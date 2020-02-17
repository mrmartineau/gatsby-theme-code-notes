---
title: Clickable box
tags:
  - javascript
  - react
source: https://github.com/danoc/clickable-box
---

```jsx
<span
  // Make the element clickable
  onClick={this.closeModal}
  // Make the element navigable by keyboard
  tabIndex={0}
  // Call `this.closeModal` if the user presses either the
  // enter or space key while the element is in focus
  onKeyDown={...}
  // Tell screen readers that the element is a button
  role="button"
  // All other props are passed through to the element
  aria-label="Close modal"
>
  <CloseIcon />
</span>
```
