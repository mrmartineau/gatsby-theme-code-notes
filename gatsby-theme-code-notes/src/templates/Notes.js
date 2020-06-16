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
      dateModified(formatString: "Do MMM YYYY")
      slug
    }
  }

  query {
    allMdx(sort: { fields: frontmatter___title, order: ASC }) {
      edges {
        node {
          ...AllPages
        }
      }
    }
  }
`
