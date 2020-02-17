---
title: Postman.io
tags:
  - javascript
---

## Save an env var

```js
var jsonData = JSON.parse(responseBody)
pm.environment.set('ref', jsonData.refs[0].ref)
```
