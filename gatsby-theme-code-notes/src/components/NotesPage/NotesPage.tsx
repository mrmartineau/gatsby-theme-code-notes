/** @jsx jsx */
import { jsx, Heading } from 'theme-ui'
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
      title={pageContext.tag ? `Tag: ${pageContext.tag}` : siteTitle}
    >
      {pageContext.tag && (
        <Heading as="h1" variant="noteTitle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            sx={{
              mr: 2,
            }}
          >
            <path d="M20.59 13.41l-7.17 7.17a2 2 0 0 1-2.83 0L2 12V2h10l8.59 8.59a2 2 0 0 1 0 2.82z"></path>
            <line x1="7" y1="7" x2="7" y2="7"></line>
          </svg>
          {pageContext.tag}
        </Heading>
      )}

      <NoteList notes={notes} />
    </Layout>
  )
}
