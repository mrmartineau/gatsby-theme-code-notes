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
  const {
    frontmatter: { title, tags },
    fields: { dateModified },
    body,
  } = data.mdx
  return (
    <Layout>
      <Helmet>
        <title>{title}</title>
      </Helmet>
      <Heading as="h1" variant="noteTitle">
        {title}
      </Heading>

      {dateModified && (
        <Box mb={3}>
          <DateModified>{dateModified}</DateModified>
        </Box>
      )}

      <Flex>
        <TagList tags={tags} />
      </Flex>
      <MDXRenderer>{body}</MDXRenderer>
    </Layout>
  )
}
