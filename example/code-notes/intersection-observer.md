---
title: IntersectionObserver
tags:
  - javascript
---

```js
var callback = (entries, observer) => {
  entries.forEach(entry => {
    console.log('entry', entry)
    // Each entry describes an intersection change for one observed
    // target element:
    //   entry.boundingClientRect
    //   entry.intersectionRatio
    //   entry.intersectionRect
    //   entry.isIntersecting
    //   entry.rootBounds
    //   entry.target
    //   entry.time
    if (entry.intersectionRatio > 0.8) {
      this.skippy.classList.add('is-inactive')
    } else {
      this.skippy.classList.remove('is-inactive')
    }
  })
}
var observer = new IntersectionObserver(callback, {
  root: document.querySelector('body'),
  rootMargin: '0px',
  threshold: [0.0, 0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9, 1.0],
})

observer.observe(this.bigType)
```
