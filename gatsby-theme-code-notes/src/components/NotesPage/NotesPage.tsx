import React from 'react'
import { Helmet } from 'react-helmet'
import { Box } from 'theme-ui'
import { NoteList } from '../NoteList'
import { Layout } from '../layout'

export const NotesPage = ({ data, pageContext }) => {
  console.log('TCL: NotesPage -> pageContext', pageContext)
  const notes = data.allMdx.edges
  const siteTitle = 'Znippets'
  return (
    <Layout activeTag={pageContext.tag}>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Box sx={{ p: 3 }}>
        <NoteList notes={notes} />
      </Box>
    </Layout>
  )
}
