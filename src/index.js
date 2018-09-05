// Elm output will be prepended to this file.
// ------------------------------------------
window.ContextCards = (function() {
  var LINK_SELECTOR = "a[data-wiki-title]";
  var contextCardsApp = null;

  document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    contextCardsApp = Elm.ContextCards.init({ node: div });
    bindLinks();
  });

  function bindLinks() {
    var links = document.querySelectorAll(LINK_SELECTOR);

    for (var i = 0; i < links.length; i++) {
      var link = links[i];

      if (link.dataset.wikiPreviewEventsBound !== "events-set") {
        link.dataset.wikiPreviewEventsBound = "events-set";

        link.addEventListener("mouseenter", function(event) {
          var link = event.target;
          var title = link.dataset.wikiTitle;
          var lang = link.dataset.wikiLang;

          console.log("mouseenter", title, " ", lang);
        });
        link.addEventListener("mouseout", function(event) {
          var link = event.target;
          var title = link.dataset.wikiTitle;
          var lang = link.dataset.wikiLang;

          console.log("mouseout", title, " ", lang);
        });
      }
    }
  }

  return {
    bindLinks: bindLinks
  };
})();
