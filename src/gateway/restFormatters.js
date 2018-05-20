/**
 * Prepare extract
 * @param {Object} page Rest response
 * @return {Array} An array of DOM Elements
 */
export function parseHTMLResponse(page) {
  const extract = page.extract_html;

  return extract.length === 0 ? [] : $.parseHTML(extract);
}
