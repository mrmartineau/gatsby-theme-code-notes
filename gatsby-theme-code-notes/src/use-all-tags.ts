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

  return data.allMdx.tags.sort()
}
