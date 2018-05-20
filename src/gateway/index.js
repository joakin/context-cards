import constants from "../constants";
import createRESTBaseGateway from "./rest";
import * as formatters from "./restFormatters";

const $ = jQuery;

// Note that this interface definition is in the global scope.
/**
 * The interface implemented by all preview gateways.
 *
 * @interface Gateway
 */

/**
 * Fetches a preview for a page.
 *
 * If the underlying request is successful and contains data about the page,
 * then the resulting promise will resolve. If not, then it will reject.
 *
 * @function
 * @name Gateway#getPageSummary
 * @param {String} title The title of the page
 * @return {jQuery.Promise<PreviewModel>}
 */

/**
 * Creates a gateway with sensible values for the dependencies.
 *
 * @param {String} lang
 * @return {Gateway}
 */
export default function createGateway(lang) {
  const restConfig = Object.assign({}, constants, {
    endpoint: `https://${lang}.wikipedia.org/api/rest_v1/page/summary/`,
    url: title => `https://${lang}.wikipedia.org/wiki/${title}`
  });
  console.log($.ajax);
  return createRESTBaseGateway(
    $.ajax,
    restConfig,
    formatters.parseHTMLResponse
  );
}
