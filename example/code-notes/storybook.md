---
title: Storybook
tags:
  - testing
---

## Story

```jsx
import React, { FunctionComponent } from 'react'
import { ArticlePage } from './ArticlePage'

export default {
  title: 'Components|ArticlePage',
  component: ArticlePage,
}

export const image: FunctionComponent = () => <ArticlePage />
```

## MDX

    import { Meta, Story, Preview, Anchor } from '@storybook/addon-docs/blocks'

    <Meta title="Theme UI|Components" />

    ---

    <Anchor storyId="the-title--example" />

    # Title

    ## Example code

    ```jsx
    some code
    ```

## Story

```js
<Preview>
  <Story name="Example"></Story>
</Preview>
```
