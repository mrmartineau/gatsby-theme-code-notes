/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Badge, Link } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'

interface TagNavProps {
  tags: string[]
  asLinks?: boolean
}

export const TagList: FunctionComponent<TagNavProps> = ({
  tags,
  asLinks = true,
}) => {
  if (!tags) {
    return null
  }

  return (
    <Box
      sx={{
        display: 'flex',
        alignItems: 'center',
        flexShrink: 0,
      }}
    >
      {tags.map((item, index) => {
        if (item === 'untagged') {
          return null
        }

        if (asLinks) {
          return (
            <Link
              as={GatsbyLink}
              to={`/tag/${slugify(item)}`}
              key={index}
              sx={{
                display: 'inline-flex',
                mr: 1,
              }}
              variant="badge"
            >
              {item}
            </Link>
          )
        }

        return (
          <Badge sx={{ mr: 1 }} variant="primary" key={index}>
            {item}
          </Badge>
        )
      })}
    </Box>
  )
}
