import { graphql } from 'gatsby'
import { NotesPage } from '../components/NotesPage'

export default NotesPage

export const pageQuery = graphql`
  fragment AllPages on Mdx {
    id
    frontmatter {
      title
      tags
      emoji
    }
    fields {
      slug
      dateModified(formatString: "MMM DD, YYYY H:mm A")
      modifiedTimestamp: dateModified
    }
  }

  query {
    allMdx {
      edges {
        node {
          ...AllPages
        }
      }
    }
  }
`
