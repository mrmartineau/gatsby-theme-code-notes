---
title: Axios
emoji: 👌
tags:
  - javascript
---

## POST request

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

## Handling errors

```js
axios.get('/user/12345').catch(function(error) {
  if (error.response) {
    // The request was made and the server responded with a status code
    // that falls out of the range of 2xx
    console.log(error.response.data)
    console.log(error.response.status)
    console.log(error.response.headers)
  } else if (error.request) {
    // The request was made but no response was received
    // `error.request` is an instance of XMLHttpRequest in the browser and an instance of
    // http.ClientRequest in node.js
    console.log(error.request)
  } else {
    // Something happened in setting up the request that triggered an Error
    console.log('Error', error.message)
  }
  console.log(error.config)
})
```
