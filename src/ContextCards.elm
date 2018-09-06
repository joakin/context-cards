port module ContextCards exposing (main)

import Browser
import Html exposing (Html, div, text)
import Html.Attributes exposing (class, style)
import Json.Decode as D


main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }


type Model
    = Idle
    | ActiveLink Link


type Msg
    = MouseEventOnLink MouseEvent


type alias Link =
    { lang : String
    , title : String
    , link : D.Value
    , rect : ClientRect
    , scroll : Scroll
    }


type MouseEvent
    = Enter Link
    | Leave Link


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
    ( Idle, Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    case msg of
        MouseEventOnLink event ->
            case event of
                Enter link ->
                    ( ActiveLink link, Cmd.none )

                Leave link ->
                    case model of
                        Idle ->
                            ( model, Cmd.none )

                        ActiveLink currentLink ->
                            if currentLink.link == link.link then
                                ( Idle, Cmd.none )

                            else
                                ( model, Cmd.none )


view : Model -> Html Msg
view model =
    div []
        [ case model of
            Idle ->
                text ""

            ActiveLink link ->
                viewCard link
        ]


viewCard : Link -> Html Msg
viewCard link =
    div
        [ class "ContextCard"
        , style "position" "absolute"
        , style "top" (px (link.rect.top + link.scroll.y + link.rect.height))
        , style "left" (px (link.rect.left + link.scroll.x))
        , style "z-index" "10000"
        , style "background-color" "white"
        , style "padding" "1em"
        , style "box-shadow" "0 0 20px rgba(0,0,0,0.1)"
        ]
        [ text link.title ]


px n =
    String.fromFloat n ++ "px"


subscriptions : Model -> Sub Msg
subscriptions model =
    mouseEvent (MouseEventOnLink << mouseEventJsonToMouseEvent)


type alias MouseEventJson =
    { kind : String
    , lang : String
    , title : String
    , link : D.Value
    , rect : ClientRect
    , scroll : Scroll
    }


mouseEventJsonToMouseEvent : MouseEventJson -> MouseEvent
mouseEventJsonToMouseEvent json =
    let
        link =
            { lang = json.lang
            , title = json.title
            , link = json.link
            , rect = json.rect
            , scroll = json.scroll
            }
    in
    if json.kind == "enter" then
        Enter link

    else
        Leave link


port mouseEvent : (MouseEventJson -> msg) -> Sub msg
