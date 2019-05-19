# Wikipedia Context Cards

Get Wikipedia page previews on any page.

See some live examples at <https://joakin.github.io/context-cards>, or check our
[UI tests](https://joakin.github.io/context-cards/test.html) for examples of
many previews.

## Use

Include the library in your page:

```
https://unpkg.com/context-cards/dist/context-cards.js
```

Mark some links with `data-wiki-title` and `data-wiki-lang`.

```html
<ul>
  <li>
    <a href="#" data-wiki-lang="en" data-wiki-title="Cake">Cake</a>
  </li>
  <li>
    <a href="#" data-wiki-lang="ca" data-wiki-title="Pastís">Pastís</a>
  </li>
</ul>
```

Those links should show the previews now on hover and focus!

## Credits

Based on the original work on
[Extension:Popups](https://mediawiki.org/wiki/Extension:Popups).
