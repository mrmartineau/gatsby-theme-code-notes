import React, { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link } from 'gatsby'
import { Styled, Flex, Box } from 'theme-ui'

interface NoteListItemProps {
  name: string
  title: string
  dateModified: string
  tags: string[]
}

export const NoteListItem: FunctionComponent<NoteListItemProps> = ({
  name,
  title,
  dateModified,
  tags,
}) => (
  <article>
    <Flex sx={{ justifyContent: 'space-between' }}>
      <Styled.h3 sx={{}}>
        <Link to={`/${name}`}>{title}</Link>
      </Styled.h3>
      <Flex sx={{ alignItems: 'center', flexShrink: 0 }}>
        {tags && <TagList tags={tags} />}
        {dateModified && (
          <Box sx={{ ml: 3, fontFamily: 'monospace', fontSize: 0 }}>
            {dateModified}
          </Box>
        )}
      </Flex>
    </Flex>
  </article>
)
