/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, Badge, Link } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'
import ColorHash from 'color-hash'

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
        const colorHash = new ColorHash({
          lightness: 0.6,
          // hue: { min: 100, max: 200 },
          saturation: 0.4,
        })
        const tagName = slugify(item)
        const tagHsl = colorHash.hsl(tagName)
        const tagColor = `hsla(${tagHsl[0]},${tagHsl[1] * 100}%,${tagHsl[2] *
          100}%,0.5)`
        console.log('tagColor', tagColor)

        if (asLinks) {
          return (
            <Link
              as={GatsbyLink}
              to={`/tag/${slugify(item)}`}
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
