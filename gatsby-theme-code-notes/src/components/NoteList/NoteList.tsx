import React, { Fragment, FunctionComponent } from 'react'
import { Flex } from 'theme-ui'
import { NoteListItem } from '../NoteListItem'
import { SortButton } from './SortButton'
import { useSortableData } from './useSortableData'

interface NoteListProps {
  notes: any[]
}

export const NoteList: FunctionComponent<NoteListProps> = ({ notes }) => {
  const { items, requestSort, sortConfig } = useSortableData(notes, {
    key: 'title',
    direction: 'descending',
  })

  return (
    <Fragment>
      <Flex
        sx={{
          justifyContent: 'flex-end',
          alignItems: 'center',
          mb: 2,
        }}
      >
        <SortButton
          requestSort={requestSort}
          sortKey="title"
          sortConfig={sortConfig}
        >
          A-Z
        </SortButton>
        <SortButton
          requestSort={requestSort}
          sortKey="modifiedTimestamp"
          sortConfig={sortConfig}
        >
          Date
        </SortButton>
      </Flex>

      {items.map(({ node }) => {
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
