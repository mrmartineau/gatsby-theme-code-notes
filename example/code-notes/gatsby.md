---
title: Gatsby
tags:
  - react
  - graphql
---

## GraphQL

- [Gatsby GraphQL reference](https://www.gatsbyjs.org/docs/graphql-reference)

### Group deeply nested fields together

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

#### Output

```json
{
  "data": {
    "allMdx": {
      "tags": [
        {
          "tag": "css",
          "totalCount": 4
        },
        {
          "tag": "devops",
          "totalCount": 1
        },
        {
          "tag": "git",
          "totalCount": 1
        },
        {
          "tag": "graphql",
          "totalCount": 1
        }
      ]
    }
  }
}
```

### Graphql untagged

Given `frontmatter` like this:

```yml
---
title: Gatsby
tags:
  - react
  - graphql
---

```

or this

```yml
---
title: Gatsby
---

```

Then query for items that **don't** have tags set

```graphql
query MyQuery {
  allMdx(filter: { frontmatter: { tags: { eq: null } } }) {
    edges {
      node {
        id
        frontmatter {
          title
          tags
        }
      }
    }
  }
}
```
