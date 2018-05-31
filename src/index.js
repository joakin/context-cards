import "./ui/index.less";
import createGateway from "./gateway";
import { init, render } from "./ui/renderer";
import {
  FETCH_COMPLETE_TARGET_DELAY,
  FETCH_START_DELAY,
  ABANDON_END_DELAY
} from "./constants";
import wait from "./wait";

const linkSelector = "a[data-wiki-title]";

if (typeof window.Promise === "function") {
  document.addEventListener("DOMContentLoaded", () => {
    let preview = null;

    // Init the renderer
    init();

    function onAbandon(oldUI) {
      if ((preview && preview.ui()) === oldUI) preview = null;
    }

    document.querySelectorAll(linkSelector).forEach(link => {
      link.addEventListener("mouseenter", event => {
        const link = event.target;
        const title = link.dataset.wikiTitle;
        const lang = link.dataset.wikiLang;

        if (preview && link === preview.link()) {
          preview.mouseenter(event);
        } else {
          preview && preview.die();
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
}

function createPreviewState(link, title, lang, onAbandon) {
  const gateway = createGateway(lang);
  let preview = null;
  let onLimbo = false;
  let limboTimeout = null;
  let ded = false;

  function die() {
    preview.hide();
    ded = true;
    onAbandon(preview);
  }

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
            die();
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
    die() {
      die();
    },
    link() {
      return link;
    },
    load(event) {
      const request = wait(FETCH_START_DELAY).then(
        _ =>
          !ded
            ? gateway.getPageSummary(title).then(response => {
                preview = render(response);
              })
            : null
      );

      return Promise.all([
        request,
        wait(FETCH_COMPLETE_TARGET_DELAY - FETCH_START_DELAY)
      ]).then(() => {
        if (!ded) preview.show(event, previewBehavior(), "token");
      });
    },
    ui() {
      return preview;
    }
  };
}
