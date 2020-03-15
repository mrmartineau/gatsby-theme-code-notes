import React, { FunctionComponent } from 'react'
import { Heading, Box, Flex, Link, useThemeUI } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { TagList } from '../TagList'
import { Layout } from '../Layout'
import { DateModified } from '../DateModified'
import { useSiteMetadata } from '../../use-site-metadata'

interface NotePageProps {
  data: {
    mdx: {
      frontmatter: {
        tags: string[]
        title: string
        emoji: string
      }
      body: any
      fields: {
        dateModified: string
      }
      parent: {
        name: string
        fileName: string
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
  if (!data) {
    return null
  }
  const {
    frontmatter: { title, tags, emoji },
    fields: { dateModified },
    body,
    parent: { fileName },
  } = data.mdx

  const { gitRepoContentPath } = useSiteMetadata()
  const { theme } = useThemeUI()

  return (
    <Layout
      hasUntagged={pageContext.hasUntagged}
      basePath={pageContext.basePath}
      path={location.pathname}
      title={title}
    >
      <Box
        as="article"
        sx={{ p: 2, maxWidth: theme.sizes.contentMaxWidth, mx: 'auto' }}
      >
        <Box as="header" mb={4}>
          {emoji && (
            <Box
              sx={{
                fontSize: 7,
              }}
            >
              <span role="img">{emoji}</span>
            </Box>
          )}

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
        </Box>

        <MDXRenderer>{body}</MDXRenderer>

        <Box mt={4}>
          {gitRepoContentPath && (
            <Link href={`${gitRepoContentPath}${fileName}`}>
              Edit this page
            </Link>
          )}
        </Box>
      </Box>
    </Layout>
  )
}
