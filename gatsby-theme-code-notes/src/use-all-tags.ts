import { graphql, useStaticQuery } from 'gatsby'
import pickToArray from 'pick-to-array'
import { union, flattenDeep, compact } from 'lodash'

export const useAllTags = () => {
  const data = useStaticQuery(graphql`
    {
      allMdx {
        edges {
          node {
            frontmatter {
              tags
            }
          }
        }
      }
    }
  `)

  return compact(
    union(flattenDeep(pickToArray(data.allMdx.edges, 'tags', true)))
  ).sort()
}
