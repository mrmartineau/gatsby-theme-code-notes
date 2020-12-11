/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Badge, Link, SxStyleProp } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'
import { getColourFromString } from '../../utils/getColourFromString'
import { useSiteMetadata } from '../../use-site-metadata'

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
  const { basePath } = useSiteMetadata()
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
        const tagLink =
          basePath === '/' ? `/tag/${tagName}` : `${basePath}/tag/${tagName}`
        if (asLinks) {
          return (
            <Link
              as={GatsbyLink}
              to={tagLink}
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
