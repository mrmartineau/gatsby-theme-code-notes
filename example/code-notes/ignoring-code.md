---
title: Ignoring code
tags:
  - CSS
  - HTML
  - JavaScript
  - TypeScript
---

# ESlint

[https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments](https://eslint.org/docs/user-guide/configuring#disabling-rules-with-inline-comments)

```js
/* eslint-disable */
alert('foo')
/* eslint-enable */

/* eslint-disable no-alert, no-console */
alert('foo')
console.log('bar')
/* eslint-enable no-alert, no-console */

alert('foo') // eslint-disable-line

alert('foo') // eslint-disable-line no-alert
```

# Prettier

[https://prettier.io/docs/en/ignore.html](https://prettier.io/docs/en/ignore.html)

```js
// prettier-ignore
matrix(
    1, 0, 0,
    0, 1, 0,
    0, 0, 1
)
```

```html
<!-- prettier-ignore-start -->

<!-- prettier-ignore-end -->
```

# TypeScript

```ts
// @ts-ignore
```

## TSLint

```ts
/* tslint:disable no-console */
console.log()
/* tslint:disable no-console */

/* tslint:disable */
/* tslint:enable */

/* tslint:disable:rule */
/* tslint:enable:rule */

/* tslint:disable-next-line */
/* tslint:disable-line */
/* tslint:disable-next-line:rule */
```

# Stylelint

```js
/* stylelint-disable */
const Container = styled.div``
/* stylelint-enable */
```
