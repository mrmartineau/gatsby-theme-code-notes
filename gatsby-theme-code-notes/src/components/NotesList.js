import React, { Fragment } from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { Layout } from '../components/layout'
import { TagList } from './TagList'

export const NotesList = ({ data }) => {
  const notes = data.allMdx.edges
  const siteTitle = 'Znippets'
  return (
    <Fragment>
      <Helmet>
        <title>{siteTitle}</title>
      </Helmet>
      <Layout>
        {notes.map(({ node }) => {
          const { title, tags } = node.frontmatter
          const { name } = node.parent
          const { dateModified } = node.fields
          return (
            <article key={name}>
              <header>
                <h3>
                  <Link to={`/${name}`}>{title}</Link>
                </h3>
              </header>
              {dateModified && dateModified}
              {tags && <TagList tags={tags} />}
            </article>
          )
        })}
      </Layout>
    </Fragment>
  )
}
