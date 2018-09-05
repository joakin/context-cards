/**
 * Responsive images based on `srcset` and `window.devicePixelRatio` emulation where needed.
 *
 * Call `.hidpi()` on a document or part of a document to proces image srcsets within that section.
 *
 * `$.devicePixelRatio()` can be used as a substitute for `window.devicePixelRatio`.
 * It provides a familiar interface to retrieve the pixel ratio for browsers that don't
 * implement `window.devicePixelRatio` but do have a different way of getting it.
 *
 * @class jQuery.plugin.hidpi
 */

/**
 * Get reported or approximate device pixel ratio.
 *
 * - 1.0 means 1 CSS pixel is 1 hardware pixel
 * - 2.0 means 1 CSS pixel is 2 hardware pixels
 * - etc.
 *
 * Uses `window.devicePixelRatio` if available, or CSS media queries on IE.
 *
 * @static
 * @inheritable
 * @return {number} Device pixel ratio
 */
function devicePixelRatio() {
  if (window.devicePixelRatio !== undefined) {
    // Most web browsers:
    // * WebKit/Blink (Safari, Chrome, Android browser, etc)
    // * Opera
    // * Firefox 18+
    // * Microsoft Edge (Windows 10)
    return window.devicePixelRatio;
  } else if (window.msMatchMedia !== undefined) {
    // Windows 8 desktops / tablets, probably Windows Phone 8
    //
    // IE 10/11 doesn't report pixel ratio directly, but we can get the
    // screen DPI and divide by 96. We'll bracket to [1, 1.5, 2.0] for
    // simplicity, but you may get different values depending on zoom
    // factor, size of screen and orientation in Metro IE.
    if (window.msMatchMedia("(min-resolution: 192dpi)").matches) {
      return 2;
    } else if (window.msMatchMedia("(min-resolution: 144dpi)").matches) {
      return 1.5;
    } else {
      return 1;
    }
  } else {
    // Legacy browsers...
    // Assume 1 if unknown.
    return 1;
  }
}

/**
 * Bracket a given device pixel ratio to one of [1, 1.5, 2].
 *
 * This is useful for grabbing images on the fly with sizes based on the display
 * density, without causing slowdown and extra thumbnail renderings on devices
 * that are slightly different from the most common sizes.
 *
 * The bracketed ratios match the default 'srcset' output on MediaWiki thumbnails,
 * so will be consistent with default renderings.
 *
 * @static
 * @inheritable
 * @param {number} baseRatio Base ratio
 * @return {number} Device pixel ratio
 */
function bracketDevicePixelRatio(baseRatio) {
  if (baseRatio > 1.5) {
    return 2;
  } else if (baseRatio > 1) {
    return 1.5;
  } else {
    return 1;
  }
}

/**
 * Get reported or approximate device pixel ratio, bracketed to [1, 1.5, 2].
 *
 * This is useful for grabbing images on the fly with sizes based on the display
 * density, without causing slowdown and extra thumbnail renderings on devices
 * that are slightly different from the most common sizes.
 *
 * The bracketed ratios match the default 'srcset' output on MediaWiki thumbnails,
 * so will be consistent with default renderings.
 *
 * - 1.0 means 1 CSS pixel is 1 hardware pixel
 * - 1.5 means 1 CSS pixel is 1.5 hardware pixels
 * - 2.0 means 1 CSS pixel is 2 hardware pixels
 *
 * @static
 * @inheritable
 * @return {number} Device pixel ratio
 */
export default function bracketedDevicePixelRatio() {
  return bracketDevicePixelRatio(devicePixelRatio());
}
