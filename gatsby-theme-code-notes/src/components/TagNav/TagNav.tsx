/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Link } from 'theme-ui'

interface TagItemInterface {
  tag: string
  totalCount: number
}

interface TagNavProps {
  tags: TagItemInterface[]
  activeTag?: string
  rootPath?: boolean
}

export const TagNav: FunctionComponent<TagNavProps> = ({
  tags,
  activeTag,
  rootPath,
}) => {
  console.log('TCL: rootPath', rootPath)
  console.log('TCL: activeTag', activeTag)
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        p: 3,
      }}
    >
      <Box
        as="li"
        sx={{
          p: 1,
          fontWeight: rootPath ? 'bold' : 'normal',
        }}
      >
        <Link as={GatsbyLink} to={`/`}>
          All tags
        </Link>
      </Box>

      {tags.map((item, index) => (
        <Box
          as="li"
          key={index}
          sx={{
            p: 1,
            fontWeight: activeTag === item.tag ? 'bold' : 'normal',
          }}
        >
          <Link
            as={GatsbyLink}
            to={`/tag/${encodeURI(item.tag.toLowerCase())}`}
          >
            {item.tag}
          </Link>
        </Box>
      ))}

      <Box
        as="li"
        sx={{
          p: 1,
          fontWeight: activeTag === 'untagged' ? 'bold' : 'normal',
        }}
      >
        <Link as={GatsbyLink} to={`/tag/untagged`}>
          Untagged
        </Link>
      </Box>
    </Box>
  )
}
