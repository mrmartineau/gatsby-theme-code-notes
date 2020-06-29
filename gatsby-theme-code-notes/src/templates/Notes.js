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
      dateModified(formatString: "MMM DD, YYYY")
      modifiedTimestamp: dateModified
      slug
    }
  }

  query {
    allMdx(sort: { fields: fields___dateModified, order: DESC }) {
      edges {
        node {
          ...AllPages
        }
      }
    }
  }
`
