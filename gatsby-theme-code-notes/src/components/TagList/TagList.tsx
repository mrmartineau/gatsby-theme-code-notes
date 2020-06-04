/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Badge, Link } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'
import { getColourFromString } from '../../utils/getColourFromString'

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
        const tagName = slugify(item)
        const tagColor = getColourFromString(tagName)

        if (asLinks) {
          return (
            <Link
              as={GatsbyLink}
              to={`/tag/${tagName}`}
              key={index}
              sx={{
                display: 'inline-flex',
                mr: 1,
                bg: tagColor,
              }}
              variant="badge"
            >
              {item}
            </Link>
          )
        }

        return (
          <Badge sx={{ mr: 1, bg: tagColor }} variant="primary" key={index}>
            {item}
          </Badge>
        )
      })}
    </Box>
  )
}
