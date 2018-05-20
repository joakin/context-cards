/**
 * @module templateUtil
 */

function escapeCallback(s) {
  switch (s) {
    case "'":
      return "&#039;";
    case '"':
      return "&quot;";
    case "<":
      return "&lt;";
    case ">":
      return "&gt;";
    case "&":
      return "&amp;";
  }
}

/**
 * Escape a string for HTML.
 *
 * Converts special characters to HTML entities.
 *
 *     mw.html.escape( '< > \' & "' );
 *     // Returns &lt; &gt; &#039; &amp; &quot;
 *
 * @param {string} s The string to escape
 * @return {string} HTML
 */
function escape(s) {
  return s.replace(/['"<>&]/g, escapeCallback);
}

/**
 * @param {string} str
 * @return {string} The string with any HTML entities escaped.
 */
export function escapeHTML(str) {
  return escape(str);
}
