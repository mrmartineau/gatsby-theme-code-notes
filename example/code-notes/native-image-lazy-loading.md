---
title: Native image lazy loading
tags:
  - html
---

```html
<img src="../path/to/image.jpg" loading="lazy" />
```

You can use three values with this attribute:

- auto: Default behaviour of the browser, equal to not including the attribute.
- lazy: Defer loading of resources until it reaches a calculated distance from viewport.
- eager: Load the resource immediately

**Feature detection**

```js
if ('loading' in HTMLImageElement.prototype === true) {
  // use the attribute
} else {
  // use polyfill
}
```
