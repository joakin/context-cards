port module ContextCards exposing (main)

import Browser
import Browser.Dom exposing (Viewport)
import Card exposing (ClientRect, Link)
import Data exposing (Summary, decodeSummary)
import Html exposing (Attribute, Html, div, img, node, p, text)
import Html.Attributes exposing (attribute, class, classList, id, src, style)
import Html.Events exposing (onMouseEnter, onMouseLeave)
import Html.Keyed as Keyed
import Html.Lazy as L
import Http exposing (Error(..))
import Json.Decode as D exposing (Decoder)
import Json.Encode as E
import Process
import Task


main : Program () Model Msg
main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }


type Model
    = Idle (Maybe ( Link, Summary ))
    | Active Link InteractionStatus (Maybe Summary)


type InteractionStatus
    = ActiveLink
    | LeavingLink
    | ActivePreview
    | LeavingPreview


type Msg
    = LinkEnter Link
    | LinkLeave Link
    | LinkLeaveTimeout Link
    | PreviewEnter Link
    | PreviewLeave Link
    | PreviewLeaveTimeout Link
    | Fetch Link
    | SummaryResponse Link (Result Http.Error Summary)


init : () -> ( Model, Cmd Msg )
init () =
    ( Idle Nothing
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( model, msg ) of
        ( Active currentLink ActiveLink Nothing, Fetch link ) ->
            if currentLink.domElement == link.domElement then
                ( model
                , Http.send (SummaryResponse link) (getSummary link.lang link.title)
                )

            else
                ( model, Cmd.none )

        ( Active currentLink interactionStatus Nothing, SummaryResponse link response ) ->
            if currentLink.domElement == link.domElement then
                case response of
                    Ok summary ->
                        ( Active link interactionStatus (Just summary)
                        , renderHTML ()
                        )

                    Err err ->
                        let
                            strErr =
                                case err of
                                    BadUrl str ->
                                        "Bad URL: " ++ str

                                    Timeout ->
                                        "Request timed out"

                                    NetworkError ->
                                        "Network error"

                                    BadStatus res ->
                                        "Status error: " ++ String.fromInt res.status.code ++ " - " ++ res.status.message

                                    BadPayload errMsg res ->
                                        "Payload error:\n" ++ errMsg
                        in
                        ( Idle Nothing, log ("Request failed\n" ++ strErr) )

            else
                ( model, Cmd.none )

        ( Active currentLink ActiveLink summary, LinkLeave link ) ->
            if currentLink.domElement == link.domElement then
                ( Active link LeavingLink summary, abandonTimeout (LinkLeaveTimeout link) )

            else
                ( model, Cmd.none )

        ( Active currentLink LeavingLink summary, LinkLeaveTimeout link ) ->
            idle currentLink link summary model

        ( Active currentLink LeavingLink summary, LinkEnter link ) ->
            activePreviewIfCurrentLink currentLink link summary model

        ( Active currentLink LeavingLink summary, PreviewEnter link ) ->
            activePreviewIfCurrentLink currentLink link summary model

        ( Active currentLink ActivePreview summary, PreviewLeave link ) ->
            if currentLink.domElement == link.domElement then
                ( Active link LeavingPreview summary, abandonTimeout (PreviewLeaveTimeout link) )

            else
                ( model, Cmd.none )

        ( Active currentLink LeavingPreview summary, PreviewLeaveTimeout link ) ->
            idle currentLink link summary model

        ( Active currentLink LeavingPreview summary, PreviewEnter link ) ->
            activePreviewIfCurrentLink currentLink link summary model

        ( Active currentLink LeavingPreview summary, LinkEnter link ) ->
            activePreviewIfCurrentLink currentLink link summary model

        ( _, LinkEnter link ) ->
            ( Active link ActiveLink Nothing, fetchTimeout link )

        ( _, _ ) ->
            ( model, Cmd.none )


activePreviewIfCurrentLink : Link -> Link -> Maybe Summary -> Model -> ( Model, Cmd Msg )
activePreviewIfCurrentLink currentLink msgLink summary model =
    if currentLink.domElement == msgLink.domElement then
        ( Active msgLink ActivePreview summary, Cmd.none )

    else
        ( model, Cmd.none )


idle : Link -> Link -> Maybe Summary -> Model -> ( Model, Cmd Msg )
idle currentLink msgLink maybeSummary model =
    if currentLink.domElement == msgLink.domElement then
        case maybeSummary of
            Just summary ->
                ( Idle (Just ( msgLink, summary ))
                , Cmd.none
                )

            Nothing ->
                ( Idle Nothing, Cmd.none )

    else
        ( model, Cmd.none )


abandonTimeout : Msg -> Cmd Msg
abandonTimeout msg =
    Process.sleep 300
        |> Task.perform (\() -> msg)


fetchTimeout : Link -> Cmd Msg
fetchTimeout link =
    Process.sleep 150 |> Task.perform (\() -> Fetch link)


cardEvents : Card.Events Msg
cardEvents =
    { mouseEnter = PreviewEnter
    , mouseLeave = PreviewLeave
    }


view : Model -> Html Msg
view model =
    let
        viewLink link summary dismissed =
            [ ( link.lang ++ " " ++ link.title
              , L.lazy4 Card.view cardEvents link summary dismissed
              )
            ]
    in
    Keyed.node "div"
        [ id "ContextCardsContainer" ]
    <|
        [ ( "styles", node "style" [] [ text Card.styles ] ) ]
            ++ (case model of
                    Idle Nothing ->
                        []

                    Idle (Just ( lastLink, lastSummary )) ->
                        viewLink lastLink (Just lastSummary) True

                    Active link interactionStatus summary ->
                        viewLink link summary False
               )


subscriptions : Model -> Sub Msg
subscriptions model =
    mouseEvent mouseEventJsonToMouseEvent


type alias MouseEventJson =
    { kind : String
    , lang : String
    , title : String
    , link : D.Value
    , rect : ClientRect
    , viewport : Viewport
    }


mouseEventJsonToMouseEvent : MouseEventJson -> Msg
mouseEventJsonToMouseEvent json =
    let
        link =
            { lang = json.lang
            , title = json.title
            , domElement = json.link
            , rect = json.rect
            , viewport = json.viewport
            }
    in
    if json.kind == "enter" then
        LinkEnter link

    else
        LinkLeave link


port mouseEvent : (MouseEventJson -> msg) -> Sub msg


port renderHTML : () -> Cmd msg


port log : String -> Cmd msg



-- Data Fetching


url : String -> String -> String
url lang title =
    "https://" ++ lang ++ ".wikipedia.org/api/rest_v1/page/summary/" ++ title


getSummary : String -> String -> Http.Request Summary
getSummary lang title =
    Http.get (url lang title) decodeSummary
