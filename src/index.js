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
      sendMouseEvent("enter", {
        link: event.target,
        title: link.dataset.wikiTitle,
        lang: link.dataset.wikiLang,
        rect: link.getBoundingClientRect()
      });
    });
    link.addEventListener("mouseout", function(event) {
      sendMouseEvent("leave", {
        link: event.target,
        title: link.dataset.wikiTitle,
        lang: link.dataset.wikiLang,
        rect: link.getBoundingClientRect()
      });
    });
  }

  function sendMouseEvent(kind, data) {
    data.kind = kind;
    contextCardsApp.ports.mouseEvent.send(data);
  }

  return {
    bindLinks: bindLinks
  };
})();
