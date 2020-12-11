import React, { Fragment, FunctionComponent } from 'react'
import { useSiteMetadata } from '../../use-site-metadata'
import { NoteListItem } from '../NoteListItem'

interface NoteListProps {
  notes: any[]
}

export const NoteList: FunctionComponent<NoteListProps> = ({ notes }) => {
  const { sortByDate } = useSiteMetadata()
  console.log('🚀 ~ sortByDate', sortByDate)
  let sortingFunction = (one, two) =>
    one.node.frontmatter.title.localeCompare(two.node.frontmatter.title)

  if (sortByDate) {
    console.log('🚀 ~ sortByDate', sortByDate)
    sortingFunction = (one, two) => {
      return (
        new Date(two.node.frontmatter.modifiedTimestamp) -
        new Date(one.node.frontmatter.modifiedTimestamp)
      )
    }
  }

  return (
    <Fragment>
      {notes.sort(sortingFunction).map(({ node }) => {
        const {
          title,
          tags,
          emoji,
          modified,
          modifiedTimestamp,
        } = node.frontmatter
        const { slug } = node.fields
        return (
          <NoteListItem
            title={title}
            emoji={emoji}
            tags={tags}
            slug={slug}
            key={slug}
            dateModified={modified}
            modifiedTimestamp={modifiedTimestamp}
          />
        )
      })}
    </Fragment>
  )
}
