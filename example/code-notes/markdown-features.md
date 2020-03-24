---
title: Markdown features
tags:
  - markdown
---

> This theme adds a few additional features to standard markdown.

## Contents

This uses [remark-toc](https://github.com/remarkjs/) to create a table of contents for your document.

Just add a heading with `'Table of Contents'`, `'toc'`, or `'table-of-contents'` e.g.

```md
### Table of Contents
```

### Table of Contents

## Fenced code blocks

Like you use with GitHub, e.g.

    ```js
    const variable = 42
    ```

## Emoji short codes

Like this: :joy: :eggplant:

```
Like this: :joy: :eggplant:
```

## Details/Summary

<details>
  <summary>Open example</summary>

Tada! :tada:

```html
<details>
  <summary>Open example</summary>

  Tada! :tada:
</details>
```

</details>

## Tables

| Tables        | Are           | Cool   |
| ------------- | ------------- | ------ |
| col 3 is      | right-aligned | \$1600 |
| col 2 is      | centered      | \$12   |
| zebra stripes | are neat      | \$1    |

## Link truncation

This uses [remark-truncate-links](https://github.com/GaiAma/Coding4GaiAma/tree/master/packages/remark-truncate-links) to truncate links

https://github.com/mrmartineau/gatsby-theme-code-notes
