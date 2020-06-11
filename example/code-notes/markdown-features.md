---
title: Markdown features
tags:
  - markdown
---

> This theme adds a few additional features to standard markdown.

## Fenced code blocks

Like you use with GitHub, e.g.

    ```js
    const variable = 42
    ```

## Emoji short codes

Like this: :joy: :eggplant:

```md
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

Tables are responsive by default. If you need to limit line length for a cell, add a `<br/>` tag to break the lines.

| Tables              | Are                                                                                 | Cool                                                      |
| ------------------- | ----------------------------------------------------------------------------------- | --------------------------------------------------------- |
| This is a row       | with some                                                                           | content                                                   |
| This is another row | with a lot more content. <br/>Nullam netus eu fringilla turpis parturient dignissim | Velit ut mauris penatibus <br/>turpis commodo consectetur |

## Link truncation

This uses [remark-truncate-links](https://github.com/GaiAma/Coding4GaiAma/tree/master/packages/remark-truncate-links) to truncate links

https://github.com/mrmartineau/gatsby-theme-code-notes
