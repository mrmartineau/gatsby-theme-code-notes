/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Badge, Link } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'

interface TagNavProps {
  tags: string[]
}

export const TagList: FunctionComponent<TagNavProps> = ({ tags }) => {
  if (!tags) {
    return null
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
      }}
    >
      {tags.map((item, index) => {
        if (item === 'untagged') {
          return null
        }

        return (
          <Link
            as={GatsbyLink}
            to={`/tag/${slugify(item)}`}
            key={index}
            sx={{ display: 'inline-flex' }}
          >
            <Badge sx={{ mr: 1 }}>{item}</Badge>
          </Link>
        )
      })}
    </Box>
  )
}
