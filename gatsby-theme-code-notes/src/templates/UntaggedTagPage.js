import { graphql } from 'gatsby'
import { NotesPage } from '../components/NotesPage'

export default NotesPage

export const pageQuery = graphql`
  query {
    allMdx(
      sort: { fields: frontmatter___title, order: ASC }
      filter: { frontmatter: { tags: { eq: null } } }
    ) {
      edges {
        node {
          id
          ...AllPages
        }
      }
    }
  }
`
