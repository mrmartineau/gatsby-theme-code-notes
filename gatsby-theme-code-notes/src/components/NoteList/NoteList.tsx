import React, { Fragment, FunctionComponent } from 'react'
import { useSiteMetadata } from '../../use-site-metadata'
import { NoteListItem } from '../NoteListItem'

interface NoteListProps {
  notes: any[]
}

export const NoteList: FunctionComponent<NoteListProps> = ({ notes }) => {
  const { sortByDate } = useSiteMetadata()
  let sortingFunction = (one, two) =>
    one.node.frontmatter.title.localeCompare(two.node.frontmatter.title)

  if (sortByDate) {
    sortingFunction = (one, two) =>
      new Date(two.node.fields.modifiedTimestamp) -
      new Date(one.node.fields.modifiedTimestamp)
  }

  return (
    <Fragment>
      {notes.sort(sortingFunction).map(({ node }) => {
        const { title, tags, emoji } = node.frontmatter
        const { dateModified, modifiedTimestamp, slug } = node.fields
        return (
          <NoteListItem
            title={title}
            emoji={emoji}
            tags={tags}
            slug={slug}
            key={slug}
            dateModified={dateModified}
            modifiedTimestamp={modifiedTimestamp}
          />
        )
      })}
    </Fragment>
  )
}
