/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Link } from 'theme-ui'

interface TagNavProps {
  tags: string[]
  activeTag?: string
}
export const TagNav: FunctionComponent<TagNavProps> = ({ tags, activeTag }) => (
  <Box
    as="ul"
    sx={{
      listStyleType: 'none',
      p: 3,
    }}
  >
    <Box as="li" sx={{ p: 1 }}>
      <Link as={GatsbyLink} to={`/`}>
        All tags
      </Link>
    </Box>

    {tags.map((item, index) => (
      <Box as="li" key={index} sx={{ p: 1 }}>
        <Link as={GatsbyLink} to={`/tag/${encodeURI(item.toLowerCase())}`}>
          {activeTag === item && '- '}
          {item} {activeTag === item && '-'}
        </Link>
      </Box>
    ))}

    <Box as="li" sx={{ p: 1 }}>
      <Link as={GatsbyLink} to={`/tag/untagged`}>
        Untagged {activeTag && '-'}
      </Link>
    </Box>
  </Box>
)
