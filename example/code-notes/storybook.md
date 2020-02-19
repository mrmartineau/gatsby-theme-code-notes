---
title: Storybook
tags:
  - testing
---

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
