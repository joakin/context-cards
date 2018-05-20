import bracketedDevicePixelRatio from "./ui/bracketedDevicePixelRatio";

/**
 * @module constants
 */
const pixelRatio = bracketedDevicePixelRatio();

export default {
  THUMBNAIL_SIZE: 320 * pixelRatio,
  EXTRACT_LENGTH: 525,
  // See the following for context around this value.
  //
  // * https://phabricator.wikimedia.org/T161284
  // * https://phabricator.wikimedia.org/T70861#3129780
  FETCH_START_DELAY: 150, // ms.

  // The minimum time a preview must be open before we judge it
  // has been seen.
  // See https://phabricator.wikimedia.org/T184793
  PREVIEW_SEEN_DURATION: 1000, // ms

  // The delay after which a FETCH_COMPLETE action should be dispatched.
  //
  // If the API endpoint responds faster than 500 ms (or, say, the API
  // response is served from the UA's cache), then we introduce a delay of
  // 500 - t to make the preview delay consistent to the user.
  FETCH_COMPLETE_TARGET_DELAY: 500, // ms.

  ABANDON_END_DELAY: 300 // ms.
};
