/** @jsx jsx */
import { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Styled, Flex, Box, Link } from 'theme-ui'
import { DateModified } from '../DateModified'

interface NoteListItemProps {
  name: string
  title: string
  emoji?: string
  dateModified: string
  tags: string[]
}

export const NoteListItem: FunctionComponent<NoteListItemProps> = ({
  name,
  title,
  dateModified,
  tags,
  emoji,
}) => (
  <Box as="article" sx={{ p: 2, maxWidth: '900px' }}>
    <Flex sx={{ justifyContent: 'space-between' }}>
      <Styled.h4 sx={{ m: 0 }}>
        <Link as={GatsbyLink} to={`/${name}`} variant="bold">
          {emoji} {title}
        </Link>
      </Styled.h4>
      <Flex sx={{ alignItems: 'center', flexShrink: 0 }}>
        {tags && <TagList tags={tags} />}
        {dateModified && (
          <Box ml={2}>
            <DateModified>{dateModified}</DateModified>
          </Box>
        )}
      </Flex>
    </Flex>
  </Box>
)
