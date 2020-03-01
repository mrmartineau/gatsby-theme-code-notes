import React from 'react'
import { Heading, Box, useThemeUI } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { NoteList } from '../NoteList'
import { Layout } from '../Layout'
import { useSiteMetadata } from '../../use-site-metadata'

export const NotesPage = ({ data, pageContext, location }) => {
  const notes = data.allMdx.edges
  const { title } = useSiteMetadata()
  const { theme } = useThemeUI()
  const siteTitle = title
  return (
    <Layout
      activeTag={pageContext.tag}
      path={location.pathname}
      basePath={pageContext.basePath}
      hasUntagged={pageContext.hasUntagged}
    >
      <Helmet>
        <title>{pageContext.tag ? pageContext.tag : siteTitle}</title>
      </Helmet>

      <Box sx={{ p: 2, maxWidth: theme.sizes.contentMaxWidth, mx: 'auto' }}>
        {pageContext.tag && (
          <Heading as="h1" variant="noteTitle">
            {pageContext.tag}
          </Heading>
        )}

        <NoteList notes={notes} />
      </Box>
    </Layout>
  )
}
