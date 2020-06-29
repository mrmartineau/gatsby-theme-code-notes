import React, { Fragment, FunctionComponent } from 'react'
import { NoteListItem } from '../NoteListItem'

interface NoteListProps {
  notes: any[]
}

export const NoteList: FunctionComponent<NoteListProps> = ({ notes }) => {
  return (
    <Fragment>
      {notes.map(({ node }) => {
        const { title, tags, emoji } = node.frontmatter
        const { dateModified, modifiedTimestamp, slug } = node.fields
        return (
          <NoteListItem
            title={title}
            emoji={emoji}
            tags={tags}
            slug={slug}
            dateModified={dateModified}
            modifiedTimestamp={modifiedTimestamp}
            key={slug}
          />
        )
      })}
    </Fragment>
  )
}
