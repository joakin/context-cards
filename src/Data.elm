module Data exposing (Dir(..), Summary, Thumbnail, decodeDir, decodeSummary, decodeThumbnail)

import Json.Decode as D exposing (Decoder)


type alias Summary =
    { title : String
    , displayTitle : String
    , contentHtml : String
    , contentText : String
    , thumbnail : Maybe Thumbnail
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


decodeSummary : Decoder Summary
decodeSummary =
    D.map6 Summary
        (D.field "title" D.string)
        (D.field "displaytitle" D.string)
        (D.field "extract_html" D.string)
        (D.field "extract" D.string)
        (D.maybe <| D.field "thumbnail" decodeThumbnail)
        (D.field "dir" decodeDir)


decodeThumbnail : Decoder Thumbnail
decodeThumbnail =
    D.map3 Thumbnail
        (D.field "source" D.string)
        (D.field "width" D.float)
        (D.field "height" D.float)


decodeDir : Decoder Dir
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
