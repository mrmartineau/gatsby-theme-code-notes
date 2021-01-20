/** @jsx jsx */
import { FunctionComponent } from 'react'
import { TagList } from '../TagList'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Heading, Flex, Box, Link, Text } from 'theme-ui'
import { useSiteMetadata } from '../../use-site-metadata'

interface NoteListItemProps {
  slug: string
  title: string
  emoji?: string
  tags: string[]
  onClick?: () => void
  dateModified: string
  modifiedTimestamp: string
}

export const NoteListItem: FunctionComponent<NoteListItemProps> = ({
  slug,
  title,
  tags,
  emoji,
  onClick,
  dateModified,
  modifiedTimestamp,
}) => {
  const { showDate } = useSiteMetadata()
  const noteEmoji = emoji ?? '🗒'
  return (
    <Box as="article">
      <Link
        as={GatsbyLink}
        to={slug}
        variant="noteListItem"
        onClick={onClick}
        sx={{
          display: [null, 'flex'],
          justifyContent: 'space-between',
          overflow: 'hidden',
        }}
      >
        <Heading
          as="h3"
          variant="noteListItem"
          sx={{ mr: '3', py: 1, minWidth: 260 }}
        >
          <Box as="span" sx={{ position: 'absolute', left: 1 }}>
            {noteEmoji}
          </Box>
          {title}
        </Heading>
        <Flex
          sx={{
            alignItems: 'center',
          }}
        >
          {tags && (
            <TagList
              tags={tags}
              asLinks={false}
              sx={{
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            />
          )}
          {showDate && dateModified && modifiedTimestamp && (
            <Text
              as="time"
              variant="dateModified"
              dateTime={modifiedTimestamp}
              sx={{
                ml: 2,
                whiteSpace: 'nowrap',
                overflow: 'hidden',
                textOverflow: 'ellipsis',
              }}
            >
              {dateModified}
            </Text>
          )}
        </Flex>
      </Link>
    </Box>
  )
}
