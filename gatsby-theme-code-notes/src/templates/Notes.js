import { graphql } from 'gatsby'
import { NotesPage } from '../components/NotesPage'

export default NotesPage

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
