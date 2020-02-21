import React, { Fragment } from 'react'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/layout'
import { TagNav } from './TagNav'
import { NoteList } from './NoteList'

export const NotesList = ({ data, pageContext }) => {
  const { tags } = pageContext
  const notes = data.allMdx.edges
  const siteTitle = 'Znippets'
  return (
    <Fragment>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Layout>
        <TagNav tags={tags} />
        <NoteList notes={notes} />
      </Layout>
    </Fragment>
  )
}
