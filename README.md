# Wikipedia Context Cards

Get Wikipedia page previews on any page. Live examples at
<https://joakin.github.io/context-cards>

## Use

Include the library in your page:

```
https://unpkg.com/context-cards/dist/bundle.js
```

Mark some links with `data-wiki-title` and `data-wiki-lang`.

```html
  <ul>
    <li>
      <a href="#" data-wiki-lang='en' data-wiki-title='Cake'>Cake</a>
    </li>
    <li>
      <a href="#" data-wiki-lang='ca' data-wiki-title='Pastís'>Pastís</a>
    </li>
  </ul>
```

Those links should show the previews now!

## WIP

This is a work in progress, a prototype to show how it would be done.

Based on the original work on
[Extension:Popups](https://mediawiki.org/wiki/Extension:Popups).
