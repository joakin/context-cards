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

        bindLink(link);
      }
    }
  }

  function bindLink(link) {
    link.addEventListener("mouseenter", function(event) {
      sendMouseEvent("enter", event);
    });
    link.addEventListener("mouseout", function(event) {
      sendMouseEvent("leave", event);
    });
  }

  function sendMouseEvent(kind, event) {
    var link = event.target;
    var data = {
      kind: kind,
      link: link,
      title: link.dataset.wikiTitle,
      lang: link.dataset.wikiLang,
      rect: link.getBoundingClientRect(),
      scroll: { x: window.scrollX, y: window.scrollY }
    };
    contextCardsApp.ports.mouseEvent.send(data);
  }

  return {
    bindLinks: bindLinks
  };
})();
