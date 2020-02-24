import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { NoteList } from './NoteList'

export const NotesList = ({ data, pageContext }) => {
  const notes = data.allMdx.edges
  const siteTitle = 'Znippets'
  return (
    <Fragment>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <NoteList notes={notes} />
    </Fragment>
  )
}
