import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'

const Note = ({ data }) => {
  return (
    <Fragment>
      <h1>{data.mdx.frontmatter.title}</h1>
      <h3>{data.mdx.excerpt}</h3>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Fragment>
  )
}

export const pageQuery = graphql`
  query NoteBySlug($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      body
      frontmatter {
        title
        date(formatString: "MMMM DD, YYYY")
      }
    }
  }
`

export default Note
