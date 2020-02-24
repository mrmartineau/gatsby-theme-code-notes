import React from 'react'
import { Helmet } from 'react-helmet'
// import { Heading } from 'theme-ui'
import { NoteList } from '../NoteList'
import { Layout } from '../Layout'

export const NotesPage = ({ data, pageContext }) => {
  const notes = data.allMdx.edges
  const siteTitle = 'Znippets'
  return (
    <Layout activeTag={pageContext.tag}>
      <Helmet>
        <title>{siteTitle}</title>
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
