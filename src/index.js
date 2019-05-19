// Elm output will be prepended to this file.
// ------------------------------------------
window.ContextCards = (function() {
  var LINK_SELECTOR = "a[data-wiki-title]";
  var contextCardsApp = null;

  document.addEventListener("DOMContentLoaded", function() {
    var div = document.createElement("div");
    document.body.appendChild(div);
    contextCardsApp = Elm.ContextCards.init({ node: div });
    contextCardsApp.ports.renderHTML.subscribe(renderHTML);
    contextCardsApp.ports.log.subscribe(console.log);
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
    link.addEventListener("focus", function(event) {
      sendMouseEvent("enter", event);
    });
    link.addEventListener("blur", function(event) {
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
      viewport: getViewport()
    };
    contextCardsApp.ports.mouseEvent.send(data);
  }

  function getViewport() {
    return {
      scene: getScene(),
      viewport: {
        x: window.pageXOffset,
        y: window.pageYOffset,
        width: document.documentElement.clientWidth,
        height: document.documentElement.clientHeight
      }
    };
  }

  function getScene() {
    var body = document.body;
    var elem = document.documentElement;
    return {
      width: Math.max(
        body.scrollWidth,
        body.offsetWidth,
        elem.scrollWidth,
        elem.offsetWidth,
        elem.clientWidth
      ),
      height: Math.max(
        body.scrollHeight,
        body.offsetHeight,
        elem.scrollHeight,
        elem.offsetHeight,
        elem.clientHeight
      )
    };
  }

  function renderHTML() {
    raf(function() {
      var nodes = document.querySelectorAll(".ContextCard [inner-html]");
      for (var i = 0; i < nodes.length; i++) {
        var node = nodes[i];
        node.innerHTML = node.getAttribute("inner-html");
        node.removeAttribute("inner-html");
      }
    });
  }

  function raf(fn) {
    (window.requestAnimationFrame ||
      function(f) {
        setTimeout(f, 16);
      })(fn);
  }

  return {
    bindLinks: bindLinks
  };
})();
