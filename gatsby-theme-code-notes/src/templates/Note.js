import React from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Layout } from '../components/layout'

const Note = ({ data }) => {
  return (
    <Layout>
      <h1>{data.mdx.frontmatter.title}</h1>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}

export const pageQuery = graphql`
  query NoteById($id: String!) {
    mdx(id: { eq: $id }) {
      body
      frontmatter {
        title
        tags
      }
    }
  }
`

export default Note
