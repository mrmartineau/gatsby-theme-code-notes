import React, { Fragment } from 'react'
import { graphql } from 'gatsby'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/layout'

const Note = ({ data }) => {
  const title = data.mdx.frontmatter.title
  return (
    <Fragment>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Layout>
        <h1>{title}</h1>
        <MDXRenderer>{data.mdx.body}</MDXRenderer>
      </Layout>
    </Fragment>
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
