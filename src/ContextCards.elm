port module ContextCards exposing (main)

import Browser
import Html exposing (Attribute, Html, div, img, node, p, text)
import Html.Attributes exposing (attribute, class, classList, id, src, style)
import Html.Events exposing (onMouseEnter, onMouseLeave)
import Html.Keyed as Keyed
import Html.Lazy as L
import Http
import Json.Decode as D
import Json.Encode as E
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
    | IdleRemoveLastPreview


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
    ( Idle Nothing
    , Cmd.none
    )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case ( model, msg ) of
        ( Idle (Just _), IdleRemoveLastPreview ) ->
            Idle Nothing |> noCmds

        ( _, LinkEnter link ) ->
            ( Active link ActiveLink Nothing, fetchTimeout link )

        ( Active currentLink ActiveLink Nothing, Fetch link ) ->
            if currentLink.domElement == link.domElement then
                ( model
                , Http.send (SummaryResponse link) (getSummary link.lang link.title)
                )

            else
                model |> noCmds

        ( Active currentLink interactionStatus Nothing, SummaryResponse link response ) ->
            if currentLink.domElement == link.domElement then
                case response of
                    Ok summary ->
                        ( Active link interactionStatus (Just summary)
                        , renderHTML ()
                        )

                    Err err ->
                        Idle Nothing |> noCmds

            else
                model |> noCmds

        ( Active currentLink ActiveLink summary, LinkLeave link ) ->
            if currentLink.domElement == link.domElement then
                ( Active link LeavingLink summary, abandonTimeout (LinkLeaveTimeout link) )

            else
                model |> noCmds

        ( Active currentLink LeavingLink summary, LinkLeaveTimeout link ) ->
            if currentLink.domElement == link.domElement then
                idle link summary

            else
                model |> noCmds

        ( Active currentLink LeavingLink summary, PreviewEnter link ) ->
            if currentLink.domElement == link.domElement then
                Active link ActivePreview summary |> noCmds

            else
                model |> noCmds

        ( Active currentLink LeavingPreview summary, PreviewEnter link ) ->
            if currentLink.domElement == link.domElement then
                Active link ActivePreview summary |> noCmds

            else
                model |> noCmds

        ( Active currentLink ActivePreview summary, PreviewLeave link ) ->
            if currentLink.domElement == link.domElement then
                ( Active link LeavingPreview summary, abandonTimeout (PreviewLeaveTimeout link) )

            else
                model |> noCmds

        ( Active currentLink LeavingPreview summary, PreviewLeaveTimeout link ) ->
            if currentLink.domElement == link.domElement then
                idle link summary

            else
                model |> noCmds

        ( _, _ ) ->
            model |> noCmds


noCmds model =
    ( model, Cmd.none )


idle link maybeSummary =
    case maybeSummary of
        Just summary ->
            ( Idle (Just ( link, summary ))
              -- , removeIdleLastPreviewTimeout
            , Cmd.none
            )

        Nothing ->
            ( Idle Nothing, Cmd.none )


abandonTimeout msg =
    Process.sleep 300 |> Task.perform (\() -> msg)


fetchTimeout : Link -> Cmd Msg
fetchTimeout link =
    Process.sleep 150 |> Task.perform (\() -> Fetch link)


removeIdleLastPreviewTimeout =
    Process.sleep 1000 |> Task.perform (\() -> IdleRemoveLastPreview)


view : Model -> Html Msg
view model =
    let
        viewLink link summary dismissed =
            [ ( link.lang ++ " " ++ link.title
              , L.lazy3 viewCard link summary dismissed
              )
            ]
    in
    Keyed.node "div"
        [ id "ContextCardsContainer" ]
    <|
        [ ( "styles", node "style" [] [ text styles ] ) ]
            ++ (case model of
                    Idle Nothing ->
                        []

                    Idle (Just ( lastLink, lastSummary )) ->
                        viewLink lastLink (Just lastSummary) True

                    Active link interactionStatus summary ->
                        viewLink link summary False
               )


viewCard : Link -> Maybe Summary -> Bool -> Html Msg
viewCard link maybeSummary dismissed =
    let
        topPosition =
            link.rect.top + link.scroll.y + link.rect.height

        leftPosition =
            link.rect.left + link.scroll.x
    in
    case maybeSummary of
        Just summary ->
            div
                [ classList
                    [ ( "ContextCard", True )
                    , ( "ContextCardDismissed", dismissed )
                    ]
                , style "top" (px topPosition)
                , style "left" (px leftPosition)
                , onMouseEnter (PreviewEnter link)
                , onMouseLeave (PreviewLeave link)
                ]
                [ L.lazy viewSummary summary ]

        Nothing ->
            text ""


viewLogo =
    let
        logoUrl =
            "https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.png"
    in
    img
        [ class "ContextCardLogo"
        , src logoUrl
        ]
        []


viewSummary : Summary -> Html Msg
viewSummary ({ thumbnail } as summary) =
    let
        isHorizontalPreview =
            thumbnail.height > thumbnail.width

        horizontalPreviewHeight =
            250

        verticalPreviewWidth =
            320

        thumbnailMaxSize =
            if isHorizontalPreview then
                horizontalPreviewHeight

            else
                verticalPreviewWidth
    in
    div
        [ class "ContextCardSummary"
        , style "flex-direction"
            (if isHorizontalPreview then
                "row"

             else
                "column"
            )
        , if isHorizontalPreview then
            style "max-height" (px horizontalPreviewHeight)

          else
            style "max-width" (px verticalPreviewWidth)
        ]
        [ div
            [ class "ContextCardExtract"
            , style "order"
                (if isHorizontalPreview then
                    "0"

                 else
                    "1"
                )
            , if isHorizontalPreview then
                style "width" (px 260)

              else
                style "width" (px verticalPreviewWidth)
            , if isHorizontalPreview then
                style "max-height" "100%"

              else
                style "max-height" (px 190)
            ]
            [ viewLogo
            , div [ innerHtml summary.contentHtml ] [ text summary.contentText ]
            ]
        , viewThumbnail thumbnail isHorizontalPreview thumbnailMaxSize
        ]


viewThumbnail thumbnail isHorizontalPreview size =
    let
        otherDimension =
            if isHorizontalPreview then
                thumbnail.width * size / thumbnail.height

            else
                thumbnail.height * size / thumbnail.width

        ( w, h ) =
            if isHorizontalPreview then
                ( otherDimension, size )

            else
                ( size, otherDimension )
    in
    div
        [ class "ContextCardThumbnail"
        , style "background-image" ("url(" ++ thumbnail.source ++ ")")
        , style "width" (px w)
        , style "height" (px h)
        ]
        []


innerHtml : String -> Attribute msg
innerHtml html =
    attribute "inner-html" html


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
    .ContextCard, .ContextCard * {
        box-sizing: border-box;
    }

    .ContextCard {
        position: absolute;
        z-index: 10000;
        background-color: white;
        box-shadow: 0 30px 90px -20px rgba( 0, 0, 0, 0.3 ), 0 0 1px #a2a9b1;
        animation-name: contextCardsFadeIn;
        animation-duration: 300ms;
        animation-fill-mode: both;
        border-radius: 2px;
        overflow: hidden;
    }
    .ContextCard.ContextCardDismissed {
        animation-name: contextCardsFadeOut;
        pointer-events: none;
    }
    .ContextCardLogo {
        height: 15px;
    }
    .ContextCardSummary {
        display: flex;
    }
    .ContextCardExtract {
        padding: 1em;
        overflow: hidden;
        position: relative;
        font-size: 14px;
        line-height: 1.4;
    }
    .ContextCardExtract p {
        margin: 0.4em 0;
    }
    .ContextCardExtract:before, .ContextCardExtract:after {
        content: '';
        display: block;
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 100%), linear-gradient(to bottom right, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);
        position: absolute;
        bottom: 0;
        left: 0;
        width: 100%;
        height: 3em;
    }
    .ContextCardThumbnail {
        flex-shrink: 0;
        background-position: center center;
        background-size: 110%;
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


port renderHTML : () -> Cmd msg



-- Data Fetching


type alias Summary =
    { title : String
    , displayTitle : String
    , description : String
    , contentHtml : String
    , contentText : String
    , thumbnail : Thumbnail
    , dir : Dir
    }


type alias Thumbnail =
    { source : String
    , width : Float
    , height : Float
    }


type Dir
    = LTR
    | RTL


decodeSummary =
    D.map7 Summary
        (D.field "title" D.string)
        (D.field "displaytitle" D.string)
        (D.field "description" D.string)
        (D.field "extract_html" D.string)
        (D.field "extract" D.string)
        (D.field "thumbnail" decodeThumbnail)
        (D.field "dir" decodeDir)


decodeThumbnail =
    D.map3 Thumbnail
        (D.field "source" D.string)
        (D.field "width" D.float)
        (D.field "height" D.float)


decodeDir =
    D.string
        |> D.andThen
            (\str ->
                case str of
                    "ltr" ->
                        D.succeed LTR

                    "rtl" ->
                        D.succeed RTL

                    _ ->
                        D.fail ("Unknown language direction: " ++ str)
            )


url lang title =
    "https://" ++ lang ++ ".wikipedia.org/api/rest_v1/page/summary/" ++ title


getSummary : String -> String -> Http.Request Summary
getSummary lang title =
    Http.get (url lang title) decodeSummary
