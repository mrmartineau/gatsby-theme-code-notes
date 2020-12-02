/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Badge, Link, SxStyleProp } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'
import { getColourFromString } from '../../utils/getColourFromString'

interface TagListProps {
  tags: string[]
  asLinks?: boolean
  sx?: SxStyleProp
}

export const TagList: FunctionComponent<TagListProps> = ({
  tags,
  asLinks = true,
  sx,
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
        ...sx,
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
