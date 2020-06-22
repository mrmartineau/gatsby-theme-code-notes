/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
import { Fragment } from 'react'
import { NoteList } from '../NoteList'
import { Layout } from '../Layout'
import { useSiteMetadata } from '../../use-site-metadata'
import { TagDot } from '../TagDot'

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
      title={pageContext.tag ? `Tag: ${pageContext.tag}` : siteTitle}
    >
      {pageContext.tag && (
        <Heading as="h1" variant="noteTitle">
          {pageContext.tag !== 'untagged' ? (
            <Fragment>
              <TagDot tag={pageContext.tag} size="0.5em" /> {pageContext.tag}
            </Fragment>
          ) : (
            <Fragment>Untagged Notes</Fragment>
          )}
        </Heading>
      )}
      <NoteList notes={notes} />
    </Layout>
  )
}
