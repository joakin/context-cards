import "./ui/index.less";
import createGateway from "./gateway";
import { init, render } from "./ui/renderer";
import { ABANDON_END_DELAY } from "./constants";

const linkSelector = "a[data-wiki-title]";

// Init the renderer
init();

document.addEventListener("DOMContentLoaded", () => {
  let preview = null;

  function onAbandon(oldUI) {
    if (preview.ui() === oldUI) preview = null;
  }

  document.querySelectorAll(linkSelector).forEach(link => {
    link.addEventListener("mouseenter", event => {
      const link = event.target;
      const title = link.dataset.wikiTitle;
      const lang = link.dataset.wikiLang;

      if (preview && link === preview.link()) {
        preview.mouseenter(event);
      } else {
        preview && preview.mouseout();
        preview = createPreviewState(link, title, lang, onAbandon);
        preview.load(event);
      }
    });
  });

  document.querySelectorAll(linkSelector).forEach(link => {
    link.addEventListener("mouseout", event => {
      preview.mouseout(event);
    });
  });
});

function createPreviewState(link, title, lang, onAbandon) {
  const gateway = createGateway(lang);
  let preview = null;
  let onLimbo = false;
  let limboTimeout = null;

  function previewBehavior() {
    return {
      settingsUrl: () => {},
      showSettings: () => {},
      previewDwell: () => {
        onLimbo = false;
        clearTimeout(limboTimeout);
      },
      previewAbandon: () => {
        onLimbo = true;
        setTimeout(() => {
          if (onLimbo && preview) {
            preview.hide();
            onAbandon(preview);
          }
        }, ABANDON_END_DELAY);
      },
      previewShow: () => {},
      click: () => {}
    };
  }

  return {
    mouseenter(e) {
      previewBehavior().previewDwell();
    },
    mouseout(e) {
      previewBehavior().previewAbandon();
    },
    link() {
      return link;
    },
    load(event) {
      return gateway.getPageSummary(title).then(response => {
        preview = render(response);
        preview.show(event, previewBehavior(), "token");
      });
    },
    ui() {
      return preview;
    }
  };
}
