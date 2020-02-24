/** @jsx jsx */
import { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link } from 'gatsby'
import { jsx, Styled, Flex, Box } from 'theme-ui'

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
  <Box as="article" sx={{ border: '1px solid #ddd', p: 2, mb: 2 }}>
    <Flex sx={{ justifyContent: 'space-between' }}>
      <Styled.h3 sx={{ m: 0 }}>
        <Link to={`/${name}`}>{title}</Link>
      </Styled.h3>
      <Flex sx={{ alignItems: 'center', flexShrink: 0 }}>
        {tags && <TagList tags={tags} />}
        {dateModified && (
          <Box
            sx={{ ml: 3, fontFamily: 'monospace', fontSize: 0, color: 'muted' }}
          >
            {dateModified}
          </Box>
        )}
      </Flex>
    </Flex>
  </Box>
)
