---
title: ES Module import/export syntax
tags:
  - javascript
---

```js
// default exports
export default 42
export default {}
export default []
export default 1 + 2
export default foo
export default function() {}
export default class {}
export default function foo() {}
export default class foo {}

// variables exports
export var foo = 1
export var foo = function() {}
export var bar
export let foo = 2
export let bar
export const foo = 3
export function foo() {}
export class foo {}

// named exports
export {}
export { foo }
export { foo, bar }
export { foo as bar }
export { foo as default }
export { foo as default, bar }

// exports from
export * from 'foo'
export {} from 'foo'
export { foo } from 'foo'
export { foo, bar } from 'foo'
export { foo as bar } from 'foo'
export { foo as default } from 'foo'
export { foo as default, bar } from 'foo'
export { default } from 'foo'
export { default as foo } from 'foo'
```

## Import Syntax

```js
// default imports
import foo from 'foo'
import { default as foo } from 'foo'

// named imports
import {} from 'foo'
import { bar } from 'foo'
import { bar, baz } from 'foo'
import { bar as baz } from 'foo'
import { bar as baz, xyz } from 'foo'

// glob imports
import * as foo from 'foo'

// mixing imports
import foo, { baz as xyz } from 'foo'
import foo, * as bar from 'foo'

// just import
import 'foo'
```
