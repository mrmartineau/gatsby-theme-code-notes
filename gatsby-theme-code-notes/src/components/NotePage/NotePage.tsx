/** @jsx jsx */
import { FunctionComponent, Fragment, useEffect, useState } from 'react'
import { jsx, Box, Flex, Heading, Link, Text } from 'theme-ui'
import { MDXRenderer } from 'gatsby-plugin-mdx'
import { GoLink, GoCalendar, GoTag } from 'react-icons/go'
import { useSiteMetadata } from '../../use-site-metadata'
import { Contents } from '../Contents'
import { Layout } from '../Layout'
import { TagList } from '../TagList'

interface NotePageProps {
  data: {
    mdx: {
      frontmatter: {
        tags: string[]
        title: string
        emoji: string
        link: string
      }
      body: any
      parent: {
        relativePath: string
      }
      tableOfContents: any
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
    frontmatter: { title, tags, emoji, link },
    body,
    parent: { relativePath },
    tableOfContents,
  } = data.mdx

  const { gitRepoContentPath } = useSiteMetadata()
  const showMetadata = !!(link)
  const [shortenedLink, setShortenedLink] = useState<string>(link)

  useEffect(() => {
    if (link) {
      if ('URL' in window) {
        const { hostname, pathname } = new URL(link)
        setShortenedLink(`${hostname}${pathname}`)
      }
    }
  }, [link])

  return (
    <Layout
      hasUntagged={pageContext.hasUntagged}
      basePath={pageContext.basePath}
      path={location.pathname}
      title={title}
    >
      <article>
        <Box as="header" mb={4}>
          {emoji && (
            <Box
              sx={{
                fontSize: 7,
                lineHeight: 1,
                mb: 3,
              }}
            >
              <span role="img">{emoji}</span>
            </Box>
          )}

          <Heading as="h1" variant="noteTitle">
            {title}
          </Heading>

          {showMetadata && (
            <Flex
              sx={{
                mb: 3,
                alignItems: 'center',
              }}
            >
              {link && (
                <Fragment>
                  <GoLink
                    sx={{
                      color: 'input',
                      pointerEvents: 'none',
                      mr: 2,
                    }}
                  />
                  <Link
                    href={link}
                    sx={{
                      mr: 4,
                      fontSize: 0,
                      whiteSpace: 'nowrap',
                      overflow: 'hidden',
                      textOverflow: 'ellipsis',
                    }}
                  >
                    {shortenedLink}
                  </Link>
                </Fragment>
              )}
            </Flex>
          )}

          {tags && (
            <Flex>
              <GoTag
                sx={{
                  color: 'input',
                  pointerEvents: 'none',
                  mr: 2,
                }}
              />
              <TagList tags={tags} />
            </Flex>
          )}
        </Box>

        <Contents toc={tableOfContents} />

        <MDXRenderer>{body}</MDXRenderer>

        <Box
          sx={{
            mt: 6,
            pt: 4,
            borderTop: '2px solid',
            borderTopColor: 'background',
          }}
        >
          {gitRepoContentPath && (
            <Link href={`${gitRepoContentPath}${relativePath}`}>
              Edit this page
            </Link>
          )}
        </Box>
      </article>
    </Layout>
  )
}
