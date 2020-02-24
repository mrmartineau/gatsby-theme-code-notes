import React, { FunctionComponent } from 'react'
import { Styled, Container } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'
import { TagList } from '../TagList'
import { Layout } from '../Layout'

interface NotePageProps {
  data: {
    mdx: {
      frontmatter: {
        tags: string[]
        title: string
      }
      body: any
    }
  }
}

export const NotePage: FunctionComponent<NotePageProps> = ({ data }) => {
  const { title, tags } = data.mdx.frontmatter
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Styled.h1>{title}</Styled.h1>
      <TagList tags={tags} />
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}
