/** @jsx jsx */
import { FunctionComponent } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, NavLink, useThemeUI } from 'theme-ui'

export interface TagItemInterface {
  tag: string
  totalCount: number
  slug: string
}

interface TagNavProps {
  tags: TagItemInterface[]
  activeTag?: string
  rootPath?: boolean
  basePath: string
  hasUntagged?: boolean
}

export const TagNav: FunctionComponent<TagNavProps> = ({
  tags,
  activeTag,
  rootPath,
  basePath,
  hasUntagged,
}) => {
  const { theme } = useThemeUI()
  return (
    <Box
      as="nav"
      sx={{
        listStyleType: 'none',
        py: 3,
      }}
    >
      <NavLink
        sx={{
          fontWeight: !!rootPath ? 'bold' : undefined,
          bg: !!rootPath ? theme.colors.navHover : undefined,
        }}
        to={basePath}
        as={GatsbyLink}
      >
        All tags
      </NavLink>

      {tags.map((item, index) => (
        <NavLink
          sx={{
            fontWeight: activeTag === item.tag ? 'bold' : undefined,
            bg: activeTag === item.tag ? theme.colors.navHover : undefined,
          }}
          to={`/tag/${encodeURI(item.slug)}`}
          as={GatsbyLink}
          key={index}
        >
          {item.tag}
        </NavLink>
      ))}

      {hasUntagged && (
        <NavLink
          sx={{
            fontWeight: activeTag === 'untagged' ? 'bold' : undefined,
            bg: activeTag === 'untagged' ? theme.colors.navHover : undefined,
          }}
          to={`/tag/untagged`}
          as={GatsbyLink}
        >
          Untagged
        </NavLink>
      )}
    </Box>
  )
}
