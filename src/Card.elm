module Card exposing (ClientRect, Events, Link, styles, view)

import Browser.Dom exposing (Viewport)
import Data exposing (Dir(..), Summary, Thumbnail)
import Html exposing (..)
import Html.Attributes exposing (attribute, class, classList, dir, href, id, src, style, target)
import Html.Events exposing (onMouseEnter, onMouseLeave)
import Html.Keyed as Keyed
import Html.Lazy as L
import Json.Decode as D exposing (Decoder)


type alias Link =
    { lang : String
    , title : String
    , domElement : D.Value
    , rect : ClientRect
    , viewport : Viewport
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


type PreviewKind
    = Horizontal
    | Vertical


type alias Dimensions =
    { kind : PreviewKind
    , top : Float
    , left : Float
    , constrainedSize : { styleAttr : String, value : Float }
    , extractWidth : Float
    , extractMaxHeight : String
    , extractOrder : Int
    , thumbnailWidth : Float
    , thumbnailHeight : Float
    }


type alias Events msg =
    { mouseEnter : Link -> msg, mouseLeave : Link -> msg }


view : Events msg -> Link -> Maybe Summary -> Bool -> Html msg
view events link maybeSummary dismissed =
    case maybeSummary of
        Just summary ->
            let
                dimensions =
                    getDimensions link.rect link.viewport summary

                eventAttrs =
                    if dismissed then
                        []

                    else
                        [ onMouseEnter (events.mouseEnter link)
                        , onMouseLeave (events.mouseLeave link)
                        ]
            in
            div
                ([ classList
                    [ ( "ContextCard", True )
                    , ( "ContextCardDismissed", dismissed )
                    ]
                 , dir <| dirToString summary.dir
                 , style "top" (px dimensions.top)
                 , style "left" (px dimensions.left)
                 ]
                    ++ eventAttrs
                )
                [ L.lazy3 viewSummary link dimensions summary ]

        Nothing ->
            text ""


styles : String
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
        background: linear-gradient(to bottom, rgba(255, 255, 255, 0) 0%, rgba(255, 255, 255, 1) 80%), linear-gradient(to bottom right, rgba(255, 255, 255, 0) 80%, rgba(255, 255, 255, 1) 100%);
        position: absolute;
        bottom: 0px;
        left: 1px;
        right: 1px;
        height: 3em;
    }
    .ContextCardThumbnail {
        flex-shrink: 0;
        background-position: center center;
        background-size: 110%;
        box-shadow: 0 0 1px #a2a9b1;
    }
    """


innerHtml : String -> Attribute msg
innerHtml html =
    attribute "inner-html" html


px : Float -> String
px n =
    String.fromFloat n ++ "px"


getDimensions : ClientRect -> Viewport -> Summary -> Dimensions
getDimensions linkRect { viewport } ({ thumbnail } as summary) =
    let
        isHorizontalPreview =
            thumbnail
                |> Maybe.map (\t -> t.height > t.width)
                |> Maybe.withDefault True

        kind =
            if isHorizontalPreview then
                Horizontal

            else
                Vertical

        horizontalPreviewHeight =
            250

        verticalPreviewWidth =
            320

        hasThumbnail =
            case thumbnail of
                Just thumb ->
                    True

                Nothing ->
                    False

        ( thumbnailMaxSize, thumbnailOtherDimension ) =
            case thumbnail of
                Just thumb ->
                    if isHorizontalPreview then
                        ( horizontalPreviewHeight
                        , thumb.width * horizontalPreviewHeight / thumb.height
                        )

                    else
                        ( verticalPreviewWidth
                        , thumb.height * verticalPreviewWidth / thumb.width
                        )

                Nothing ->
                    -- Won't be used
                    ( 0, 0 )

        ( thumbnailWidth, thumbnailHeight ) =
            if isHorizontalPreview then
                ( thumbnailOtherDimension, thumbnailMaxSize )

            else
                ( thumbnailMaxSize, thumbnailOtherDimension )

        topPosition =
            linkRect.top + viewport.y + linkRect.height

        leftPosition =
            linkRect.left + viewport.x

        constrainedSize =
            if isHorizontalPreview then
                { styleAttr = "max-height", value = horizontalPreviewHeight }

            else
                { styleAttr = "max-width", value = verticalPreviewWidth }

        extractWidth =
            if isHorizontalPreview then
                if hasThumbnail then
                    260

                else
                    320

            else
                verticalPreviewWidth

        extractMaxHeight =
            if isHorizontalPreview then
                "100%"

            else
                px 190

        extractOrder =
            if isHorizontalPreview then
                0

            else
                1
    in
    { kind = kind
    , top = topPosition
    , left = leftPosition
    , constrainedSize = constrainedSize
    , extractWidth = extractWidth
    , extractMaxHeight = extractMaxHeight
    , extractOrder = extractOrder
    , thumbnailWidth = thumbnailWidth
    , thumbnailHeight = thumbnailHeight
    }


viewLogo : Html msg
viewLogo =
    let
        logoUrl =
            "https://en.m.wikipedia.org/static/images/mobile/copyright/wikipedia-wordmark-en.svg"
    in
    img [ class "ContextCardLogo", src logoUrl ] []


viewSummary : Link -> Dimensions -> Summary -> Html msg
viewSummary link dimensions ({ thumbnail } as summary) =
    let
        { constrainedSize, kind, extractOrder, extractWidth, extractMaxHeight } =
            dimensions

        summaryStyles =
            [ style "flex-direction"
                (case kind of
                    Horizontal ->
                        "row"

                    Vertical ->
                        "column"
                )
            , style constrainedSize.styleAttr (px constrainedSize.value)
            ]

        extractStyles =
            [ style "order" (String.fromInt extractOrder)
            , style "width" (px extractWidth)
            , style "max-height" extractMaxHeight
            ]

        url =
            wikipediaUrl link
    in
    div
        (class "ContextCardSummary" :: summaryStyles)
        [ div
            (class "ContextCardExtract" :: extractStyles)
            [ a [ href url, target "_blank" ] [ viewLogo ]
            , div [ innerHtml summary.contentHtml ] [ text summary.contentText ]
            ]
        , case thumbnail of
            Just thumb ->
                viewThumbnail url dimensions thumb

            Nothing ->
                text ""
        ]


dirToString dir =
    case dir of
        LTR ->
            "ltr"

        RTL ->
            "rtl"


viewThumbnail : String -> Dimensions -> Thumbnail -> Html msg
viewThumbnail url dimensions thumbnail =
    a
        [ href url
        , target "_blank"
        , class "ContextCardThumbnail"
        , style "background-image" ("url(" ++ thumbnail.source ++ ")")
        , style "width" (px dimensions.thumbnailWidth)
        , style "height" (px dimensions.thumbnailHeight)
        ]
        []


wikipediaUrl : Link -> String
wikipediaUrl link =
    "https://" ++ link.lang ++ ".wikipedia.org/wiki/" ++ link.title
