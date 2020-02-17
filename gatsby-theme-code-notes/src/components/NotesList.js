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
          const { name, ctime } = node.parent
          return (
            <article key={name}>
              <header>
                <h3>
                  <Link to={`/${name}`}>{title}</Link>
                </h3>
              </header>
              {ctime}
              {tags && <TagList tags={tags} />}
            </article>
          )
        })}
      </Layout>
    </Fragment>
  )
}
