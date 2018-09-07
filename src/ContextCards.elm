port module ContextCards exposing (main)

import Browser
import Html exposing (Html, div, node, text)
import Html.Attributes exposing (class, classList, style)
import Html.Events exposing (onMouseEnter, onMouseLeave)
import Html.Keyed as Keyed
import Json.Decode as D
import Process
import Task


main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }


type Model
    = Idle (Maybe Link)
    | Active Link InteractionStatus


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


type alias Link =
    { lang : String
    , title : String
    , domElement : D.Value
    , rect : ClientRect
    , scroll : Scroll
    }


type alias ClientRect =
    { x : Float
    , y : Float
    , width : Float
    , height : Float
    , top : Float
    , bottom : Float
    , left : Float
    , right : Float
    }


type alias Scroll =
    { x : Float, y : Float }


init : () -> ( Model, Cmd Msg )
init () =
    ( Idle Nothing, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( model, msg ) of
        ( _, LinkEnter link ) ->
            ( Active link ActiveLink, Cmd.none )

        ( Active currentLink ActiveLink, LinkLeave link ) ->
            if currentLink.domElement == link.domElement then
                ( Active link LeavingLink, timeout (LinkLeaveTimeout link) )

            else
                model |> noCmds

        ( Active currentLink LeavingLink, LinkLeaveTimeout link ) ->
            if currentLink.domElement == link.domElement then
                idle link

            else
                model |> noCmds

        ( Active currentLink LeavingLink, PreviewEnter link ) ->
            if currentLink.domElement == link.domElement then
                Active link ActivePreview |> noCmds

            else
                model |> noCmds

        ( Active currentLink LeavingPreview, PreviewEnter link ) ->
            if currentLink.domElement == link.domElement then
                Active link ActivePreview |> noCmds

            else
                model |> noCmds

        ( Active currentLink ActivePreview, PreviewLeave link ) ->
            if currentLink.domElement == link.domElement then
                ( Active link LeavingPreview, timeout (PreviewLeaveTimeout link) )

            else
                model |> noCmds

        ( Active currentLink LeavingPreview, PreviewLeaveTimeout link ) ->
            if currentLink.domElement == link.domElement then
                idle link

            else
                model |> noCmds

        ( _, _ ) ->
            model |> noCmds


noCmds model =
    ( model, Cmd.none )


idle link =
    ( Idle (Just link), Cmd.none )


timeout msg =
    Process.sleep 300 |> Task.perform (\() -> msg)


view : Model -> Html Msg
view model =
    let
        viewLink link dismissed =
            [ ( link.lang ++ " " ++ link.title
              , viewCard link dismissed
              )
            ]
    in
    Keyed.node "div"
        []
    <|
        [ ( "styles", node "style" [] [ text styles ] ) ]
            ++ (case model of
                    Idle Nothing ->
                        []

                    Idle (Just lastLink) ->
                        viewLink lastLink True

                    Active link interactionStatus ->
                        viewLink link False
               )


viewCard : Link -> Bool -> Html Msg
viewCard link dismissed =
    div
        [ classList
            [ ( "ContextCard", True )
            , ( "ContextCardDismissed", dismissed )
            ]
        , style "top" (px (link.rect.top + link.scroll.y + link.rect.height))
        , style "left" (px (link.rect.left + link.scroll.x))
        , onMouseEnter (PreviewEnter link)
        , onMouseLeave (PreviewLeave link)
        ]
        [ text link.title ]


px n =
    String.fromFloat n ++ "px"


styles =
    """
    @keyframes contextCardsFadeIn {
        from {
            opacity: 0;
            transform: translate3d(0, 50%, 0);
        }

        to {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }
    }
    @keyframes contextCardsFadeOut {
        from {
            opacity: 1;
            transform: translate3d(0, 0, 0);
        }

        to {
            opacity: 0;
            transform: translate3d(0, 50%, 0);
        }
    }

    .ContextCard {
        position: absolute;
        z-index: 10000;
        background-color: white;
        padding: 1em;
        box-shadow: 0 0 20px rgba(0,0,0,0.1);
        animation-name: contextCardsFadeIn;
        animation-delay: 500ms;
        animation-duration: 300ms;
        animation-fill-mode: both;
    }
    .ContextCard.ContextCardDismissed {
        animation-name: contextCardsFadeOut;
        animation-delay: 0ms;
    }
    """


subscriptions : Model -> Sub Msg
subscriptions model =
    mouseEvent mouseEventJsonToMouseEvent


type alias MouseEventJson =
    { kind : String
    , lang : String
    , title : String
    , link : D.Value
    , rect : ClientRect
    , scroll : Scroll
    }


mouseEventJsonToMouseEvent : MouseEventJson -> Msg
mouseEventJsonToMouseEvent json =
    let
        link =
            { lang = json.lang
            , title = json.title
            , domElement = json.link
            , rect = json.rect
            , scroll = json.scroll
            }
    in
    if json.kind == "enter" then
        LinkEnter link

    else
        LinkLeave link


port mouseEvent : (MouseEventJson -> msg) -> Sub msg
