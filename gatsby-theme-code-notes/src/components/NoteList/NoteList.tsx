import React, { Fragment, FunctionComponent } from 'react'
import { NoteListItem } from '../NoteListItem'

interface NoteListProps {
  notes: any[]
}

export const NoteList: FunctionComponent<NoteListProps> = ({ notes }) => {
  return (
    <Fragment>
      {notes
        .sort((one, two) =>
          one.node.frontmatter.title.localeCompare(two.node.frontmatter.title)
        )
        .map(({ node }) => {
          const { title, tags, emoji } = node.frontmatter
          const { slug } = node.fields
          return (
            <NoteListItem
              title={title}
              emoji={emoji}
              tags={tags}
              slug={slug}
              key={slug}
            />
          )
        })}
    </Fragment>
  )
}
