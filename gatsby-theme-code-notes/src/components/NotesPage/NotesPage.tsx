import React from 'react'
import { Helmet } from 'react-helmet'
import { NoteList } from '../NoteList'
import { Layout } from '../Layout'
import { useSiteMetadata } from '../../use-site-metadata'

export const NotesPage = ({ data, pageContext, location }) => {
  const notes = data.allMdx.edges
  const { title } = useSiteMetadata()
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

      {/* pageContext.tag && (
        <Heading as="h1" variant="noteTitle">
          {pageContext.tag}
        </Heading>
      ) */}

      <NoteList notes={notes} />
    </Layout>
  )
}
