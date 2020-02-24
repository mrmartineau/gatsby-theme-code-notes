import React, { FunctionComponent } from 'react'
import { Heading, Box, Flex } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { Helmet } from 'react-helmet'
import { TagList } from '../TagList'
import { Layout } from '../Layout'
import { DateModified } from '../DateModified'

interface NotePageProps {
  data: {
    mdx: {
      frontmatter: {
        tags: string[]
        title: string
      }
      body: any
      fields: {
        dateModified: string
      }
    }
  }
}

export const NotePage: FunctionComponent<NotePageProps> = ({ data }) => {
  console.log('TCL: data', data)
  const { title, tags } = data.mdx.frontmatter
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading as="h1" variant="noteTitle">
        {title}
      </Heading>

      {data.mdx.fields.dateModified && (
        <Box mb={3}>
          <DateModified>{data.mdx.fields.dateModified}</DateModified>
        </Box>
      )}

      <Flex>
        <TagList tags={tags} />
      </Flex>
      <MDXRenderer>{data.mdx.body}</MDXRenderer>
    </Layout>
  )
}
