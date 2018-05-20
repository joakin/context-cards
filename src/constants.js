import bracketedDevicePixelRatio from "./ui/bracketedDevicePixelRatio";

/**
 * @module constants
 */
const pixelRatio = bracketedDevicePixelRatio();

export default {
  THUMBNAIL_SIZE: 320 * pixelRatio,
  EXTRACT_LENGTH: 525
};
