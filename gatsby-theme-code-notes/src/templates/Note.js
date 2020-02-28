import { graphql } from 'gatsby'
import { NotePage } from '../components/NotePage'

export default NotePage

export const pageQuery = graphql`
  query NoteById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
        emoji
      }
      fields {
        dateModified(formatString: "Do MMM YYYY")
      }
      parent {
        ... on File {
          name
          fileName: base
        }
      }
    }
  }
`
