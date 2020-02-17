import { graphql } from 'gatsby'
import { NotesList } from '../components/NotesList'

export default NotesList

export const pageQuery = graphql`
  query($tag: String!) {
    allMdx(filter: { frontmatter: { tags: { eq: $tag } } }) {
      edges {
        node {
          id
          frontmatter {
            title
            tags
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
