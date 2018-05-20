import "./ui/index.less";
import createGateway from "./gateway";
import { init, render } from "./ui/renderer";

init();

const linkSelector = "a[data-wiki-title]";

document.addEventListener("DOMContentLoaded", () => {
  let preview = null;

  function previewBehavior(preview) {
    return {
      settingsUrl: () => {},
      showSettings: () => {},
      previewDwell: () => {},
      previewAbandon: () => {
        preview.hide();
      },
      previewShow: () => {},
      click: () => {}
    };
  }

  document.querySelectorAll(linkSelector).forEach(link => {
    link.addEventListener("mouseenter", event => {
      const link = event.currentTarget;
      const title = link.dataset.wikiTitle;
      const lang = link.dataset.wikiLang;
      const gateway = createGateway(lang);
      console.log(title + "  -  " + lang);
      preview && preview.hide();
      gateway.getPageSummary(title).then(response => {
        console.log(response);
        preview = render(response);
        preview.show(event, previewBehavior(preview), "token");
      });
    });
  });

  document.querySelectorAll(linkSelector).forEach(link => {
    link.addEventListener("mouseout", event => {
      preview && preview.hide();
    });
  });
});
