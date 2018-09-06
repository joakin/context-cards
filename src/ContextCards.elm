port module ContextCards exposing (main)

import Browser
import Html exposing (Html, text)
import Json.Decode as D


main =
    Browser.element
        { init = init
        , subscriptions = subscriptions
        , update = update
        , view = view
        }


type alias Model =
    ()


type Msg
    = MouseEventOnLink MouseEvent


type alias MouseEvent =
    { kind : MouseEventType
    , lang : String
    , title : String
    , link : D.Value
    , rect : ClientRect
    }


type MouseEventType
    = Enter
    | Leave


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


init : () -> ( Model, Cmd Msg )
init () =
    ( (), Cmd.none )


update : Msg -> Model -> ( Model, Cmd Msg )
update msg model =
    let
        _ =
            Debug.log "msg" msg
    in
    ( model, Cmd.none )


view : Model -> Html Msg
view model =
    text "hi"


subscriptions : Model -> Sub Msg
subscriptions model =
    mouseEvent (MouseEventOnLink << mouseEventJsonToMouseEvent)


type alias MouseEventJson =
    { kind : String
    , lang : String
    , title : String
    , link : D.Value
    , rect : ClientRect
    }


mouseEventJsonToMouseEvent : MouseEventJson -> MouseEvent
mouseEventJsonToMouseEvent json =
    { kind =
        if json.kind == "enter" then
            Enter

        else
            Leave
    , lang = json.lang
    , title = json.title
    , link = json.link
    , rect = json.rect
    }


port mouseEvent : (MouseEventJson -> msg) -> Sub msg
