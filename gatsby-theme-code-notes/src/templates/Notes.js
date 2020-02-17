import React from 'react'
import { Link, graphql } from 'gatsby'
import { Layout } from '../components/layout'

const Notes = ({ data, location }) => {
  console.log('TCL: Notes -> location', location)
  const notes = data.allMdx.edges

  return (
    <Layout>
      {notes.map(({ node }) => {
        const title = node.frontmatter.title
        const path = node.parent.name
        return (
          <article key={path}>
            <header>
              <h3>
                <Link to={`/${path}`}>{title}</Link>
              </h3>
            </header>
            <section>
              <p>{node.excerpt}</p>
            </section>
          </article>
        )
      })}
    </Layout>
  )
}

export default Notes

export const pageQuery = graphql`
  query {
    allMdx {
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
              base
              relativePath
            }
          }
        }
      }
    }
  }
`
