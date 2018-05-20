import "./ui/index.less";
import createGateway from "./gateway";
import { init, render } from "./ui/renderer";

init();

const linkSelector = "a[data-wiki-title]";

document.addEventListener("DOMContentLoaded", () => {
  let preview = null;

  const previewBehavior = preview => {
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
  };

  $(document).on("mouseenter", linkSelector, event => {
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

  $(document).on("mouseout", linkSelector, event => {
    preview && preview.hide();
  });
});
