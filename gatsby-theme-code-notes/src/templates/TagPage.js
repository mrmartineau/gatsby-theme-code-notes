import { graphql } from 'gatsby'
import { NotesList } from '../components/NotesList'

export default NotesList

export const pageQuery = graphql`
  query($tag: String!) {
    allMdx(
      sort: { fields: fields___dateModified, order: DESC }
      filter: { frontmatter: { tags: { eq: $tag } } }
    ) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
          }
          fields {
            dateModified(formatString: "Do MMM YYYY")
          }
          parent {
            ... on File {
              name
              ctime(formatString: "Do MMM YYYY")
            }
          }
        }
      }
    }
  }
`
