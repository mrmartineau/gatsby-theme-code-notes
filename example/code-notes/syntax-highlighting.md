---
title: Syntax highlighting examples
tags:
  - html
  - css
  - javascript
  - Javascript
  - JavaScript
  - yaml
emoji: 🌭
---

### Table of Contents

Here is some `inline code`..

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

### Another CSS item

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

const testVar = '22'

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

const three = [1, 2, 3]
const doubled = three.map(item => {
  return item * 2
})
console.log(three === doubled, doubled) // false, [2, 4, 6]
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

<picture>
  <source
    type="image/webp"
    srcset="/images/free-cash.webp, /images/free-cash@2x.webp 2x"
  />
  <source
    type="image/png"
    srcset="/images/free-cash.png, /images/free-cash@2x.png 2x"
  />
  <img src="/images/free-cash.png" alt="Free Cash!" />
</picture>
```

## Shell

```sh
git branch --merged | egrep -v "(^\*|master|develop)"
```

## YAML

```yml
version: 2

references:
  npm_auth: &npm_auth
    run:
      name: Authenticate with registry
      command: echo "//registry.npmjs.org/:_authToken=$NPM_TOKEN" > ~/.npmrc

jobs:
  build:
    docker:
      - image: circleci/node:13.1.0-stretch
    steps:
      - checkout
      - *npm_auth
      - run:
          name: install
          command: yarn install
      - run:
          name: build
          command: yarn build
      - run:
          name: test
          command: yarn test

workflows:
  version: 2
  build-test:
    jobs:
      - build
```
