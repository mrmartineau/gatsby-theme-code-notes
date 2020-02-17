---
title: Express middleware testing
tags: JavaScript, Node, Testing
---

```js
import reqresnext from 'reqresnext'

import { userIdChecker } from './userIdMiddleware'

const DOMAIN = 'https://example.com'
const VALID_USER_ID = '103003'
const jwtToken =
  'eyJraWQiOiI1WFwvUjdxdEdoeWxcLzNYcnY5SXFiWFwvWEhEKytvb2p0TXhBNDhZRzVERVlZPSIsImFsZyI6IlJTMjU2In0.eyJzdWIiOiJhNTdjMmM1YS1hNmMyLTQzZGYtYjJiMS04YmU1ZTA1YzI1NzMiLCJlbWFpbF92ZXJpZmllZCI6dHJ1ZSwiaXNzIjoiaHR0cHM6XC9cL2NvZ25pdG8taWRwLmV1LXdlc3QtMi5hbWF6b25hd3MuY29tXC9ldS13ZXN0LTJfUDZVMkhmNTZ5IiwiY3VzdG9tOnVzZXJfaWQiOiIxMDMwMDMiLCJjb2duaXRvOnVzZXJuYW1lIjoiYTU3YzJjNWEtYTZjMi00M2RmLWIyYjEtOGJlNWUwNWMyNTczIiwiY3VzdG9tOmlzX2FkbWluIjoiZmFsc2UiLCJhdWQiOiIyZ3FpaWlrdGQwNXFibm1jdmluODV2Zm0yZCIsImV2ZW50X2lkIjoiZDFmMjI4ZWYtMjE0Yi00NmE2LTljMjQtZWZjYTNhNDM1NzQxIiwidG9rZW5fdXNlIjoiaWQiLCJhdXRoX3RpbWUiOjE1NjM0NDgzMTksImV4cCI6MTU2MzQ1MjUzOSwiaWF0IjoxNTYzNDQ4OTM5LCJlbWFpbCI6ImhpK2RpenpsZUB6YW5kZXIud3RmIn0.gAelFt52A-84nkTMjuJ1_0SLSGUNQJgMnPPhci2zeLM0j2g4fCK12tVHbWbRq1yFeJ8LyRpobCq0CyNfDGechYqbnt91owaBDQzZNySdb0Edsfbxoq-JkgGbCJWCTddW9YxDzupZ4IjnYlfQlk6yH0bAzUH0WmACu22pLSk1isDJO8YiPvjtAN10calUkP7O4i0wTMNXXikh4UVylqfJCP4C-6XvJxG8x_UELyVB38N4Vti4aeUOpMjxii6bLxu2fvtCvQIlZJhRBjtHxKb3pWeVxldPMYpEeGrhgW6IiOgGdinGRsM0ENM0EtSrkvJpxCcnmWXjHWQBJsUJqxVD2w'

describe('Given a userIdChecker middleware', () => {
  describe(`when it is called with matching userId's`, () => {
    describe('when the request has a user_id as a query param', () => {
      it('should not modify the request', () => {
        const originalRequest = `${DOMAIN}/api/fx-api/user/103003?user_id=103003`
        const path = `/api/fx-api/user/${VALID_USER_ID}?user_id=${VALID_USER_ID}`
        const { req, res, next } = reqresnext({
          url: `${DOMAIN}${path}`,
          originalUrl: `${DOMAIN}${path}`,
          path,
          cookies: {
            jwt_id_token: jwtToken,
          },
        })

        userIdChecker(req, res, next)

        expect(req.url).toEqual(originalRequest)
      })
    })

    describe('when the request has a userId in the request body', () => {
      it('should not modify the request', () => {
        const path = `/api/fx-api/user/${VALID_USER_ID}`
        const { req, res, next } = reqresnext({
          url: `${DOMAIN}${path}`,
          originalUrl: `${DOMAIN}${path}`,
          path,
          cookies: {
            jwt_id_token: jwtToken,
          },
          body: {
            userId: VALID_USER_ID,
          },
        })

        userIdChecker(req, res, next)

        expect(req.body.userId).toEqual(VALID_USER_ID)
      })
    })
  })

  describe(`when it is called with mismatching userId's`, () => {
    const WRONG_USER_ID = '12345'

    it('should forbid the API call', () => {
      const originalRequest = `${DOMAIN}/api/fx-api/user/103003?user_id=${WRONG_USER_ID}`
      const path = `/api/fx-api/user/${VALID_USER_ID}?user_id=${WRONG_USER_ID}`
      const { req, res, next } = reqresnext({
        url: `${DOMAIN}${path}`,
        originalUrl: `${DOMAIN}${path}`,
        path,
        cookies: {
          jwt_id_token: jwtToken,
        },
      })

      userIdChecker(req, res, next)

      expect(req.url).toEqual(originalRequest)
      expect(res.statusCode).toEqual(403)
      expect(JSON.parse(res.body)).toEqual({ message: 'Forbidden' })
    })

    describe('when the request has a userId in the request body', () => {
      it('should forbid the API call', () => {
        const path = `/api/fx-api/user/${VALID_USER_ID}`
        const { req, res, next } = reqresnext({
          url: `${DOMAIN}${path}`,
          originalUrl: `${DOMAIN}${path}`,
          path,
          cookies: {
            jwt_id_token: jwtToken,
          },
          body: {
            userId: WRONG_USER_ID,
          },
        })

        userIdChecker(req, res, next)

        expect(res.statusCode).toEqual(403)
        expect(JSON.parse(res.body)).toEqual({ message: 'Forbidden' })
      })
    })
  })
})
```
