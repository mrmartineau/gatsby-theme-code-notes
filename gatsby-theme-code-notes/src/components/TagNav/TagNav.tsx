/** @jsx jsx */
import { FunctionComponent, useContext } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, NavLink } from 'theme-ui'
import { SearchContext } from '../Search'

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
  const { setQuery } = useContext(SearchContext)
  return (
    <Box
      as="nav"
      sx={{
        listStyleType: 'none',
      }}
    >
      <NavLink
        sx={{
          fontWeight: !!rootPath ? 'bold' : undefined,
          bg: !!rootPath ? 'navHover' : undefined,
        }}
        to={basePath}
        as={GatsbyLink}
        onClick={() => setQuery('')}
      >
        All notes
      </NavLink>

      {tags.map((item, index) => (
        <NavLink
          sx={{
            fontWeight: activeTag === item.tag ? 'bold' : undefined,
            bg: activeTag === item.tag ? 'navHover' : undefined,
          }}
          to={`/tag/${encodeURI(item.slug)}`}
          as={GatsbyLink}
          key={index}
          onClick={() => setQuery('')}
        >
          {item.tag}
        </NavLink>
      ))}

      {hasUntagged && (
        <NavLink
          sx={{
            fontWeight: activeTag === 'untagged' ? 'bold' : undefined,
            bg: activeTag === 'untagged' ? 'navHover' : undefined,
          }}
          to={`/tag/untagged`}
          as={GatsbyLink}
          onClick={() => setQuery('')}
        >
          Untagged
        </NavLink>
      )}
    </Box>
  )
}
