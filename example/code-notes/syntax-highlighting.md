---
title: Syntax highlighting examples
tags:
  - syntax
  - html
  - css
  - js
  - javascript
  - typescript
  - shell
emoji: 🌭
---

## CSS

```css
.grid {
  display: grid;
  grid-gap: 30px;
  grid-template-columns: repeat(auto-fill, 112px);
  /* or this */
  grid-template-columns: repeat(auto-fill, minmax(112px, 1fr));
}

/* To select modern Grid browsers and IE 11 */
@supports (display: grid) {
  grid-gap: 20px;
}
```

```css
@font-face {
  font-family: 'MyWebFont';
  src: url('myfont.woff2') format('woff2'), url('myfont.woff') format('woff');
  font-display: 'swap';
}
```

## JavaScript

```js
import { graphql, useStaticQuery } from 'gatsby'

export const useAllTags = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        tags: group(field: frontmatter___tags) {
          tag: fieldValue
          totalCount
        }
      }
    }
  `)

  return data
}
```

## TypeScript

```ts
// Convert specified properties of T to be optional
type WithOptional<T, K extends keyof T> = Omit<T, K> & Partial<Pick<T, K>>

type NewType = WithOptional<OldInterface, 'date' | 'title'>
```

## JSX

```jsx
import React from 'react'
import { connect } from 'react-redux'
import { doClearQuery } from './some/file/of/action/creators'

// We again use a simple, functional component.
const OurComponent = ({ query, results, clearQuery }) => (
  <div>
    query: {query}
    <button onClick={clearQuery}>Clear</button>
    <ul>
      {results.map(result => (
        <li>
          <img src={result.url} alt={result.title} />
          {result.title}
        </li>
      ))}
    </ul>
  </div>
)
```

## HTML

```html
<img src="../path/to/image.jpg" loading="lazy" />
```

## Shell

```sh
git branch --merged | egrep -v "(^\*|master|develop)"
```
