---
title: Axios
tags: JavaScript
---

```js
const createCurveAccountResponse = await axios({
  method: 'POST',
  url: `${process.env.CURVE_API_BASE_PATH}/v2/signup/kiss`,
  data: createAccountRequestData,
  headers: {
    authorization: process.env.CURVE_USER_AUTH_TOKEN,
  },
})
```
