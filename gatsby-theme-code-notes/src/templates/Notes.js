import { graphql } from 'gatsby'
import { NotesList } from '../components/NotesList'

export default NotesList

export const pageQuery = graphql`
  query {
    allMdx(sort: { fields: fields___dateModified, order: DESC }) {
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
            }
          }
        }
      }
    }
  }
`
