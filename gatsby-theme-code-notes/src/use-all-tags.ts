import { graphql, useStaticQuery } from 'gatsby'
import slugify from '@alexcarpenter/slugify'

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

  return data.allMdx.tags.sort().map(item => {
    return {
      ...item,
      slug: slugify(item.tag),
    }
  })
}
