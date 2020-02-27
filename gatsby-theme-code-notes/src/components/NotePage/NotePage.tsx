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
  pageContext: {
    id: string
    previous: boolean
    next: boolean
    hasUntagged: boolean
    basePath?: string
  }
  location: {
    pathname: string
  }
}

export const NotePage: FunctionComponent<NotePageProps> = ({
  data,
  pageContext,
  location,
}) => {
  const {
    frontmatter: { title, tags },
    fields: { dateModified },
    body,
  } = data.mdx
  return (
    <Layout
      hasUntagged={pageContext.hasUntagged}
      basePath={pageContext.basePath}
      path={location.pathname}
    >
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
