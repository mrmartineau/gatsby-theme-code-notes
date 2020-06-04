/** @jsx jsx */
import { FunctionComponent, useContext, Fragment } from 'react'
import { Link as GatsbyLink } from 'gatsby'
import { jsx, Box, NavLink } from 'theme-ui'
import { SearchContext } from '../Search'
import { TagDot } from '../TagDot'

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
          textTransform: 'uppercase',
        }}
        to={basePath}
        as={GatsbyLink}
        onClick={() => setQuery('')}
      >
        All Notes
      </NavLink>

      {tags.length > 0 && (
        <Fragment>
          <Box
            sx={{
              px: 3,
              pt: 2,
              pb: 1,
              fontFamily: 'mono',
              textTransform: 'uppercase',
              fontSize: 1,
            }}
          >
            Tags
          </Box>

          {tags
            .sort((one, two) => one.tag.localeCompare(two.tag))
            .map((item, index) => {
              return (
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
                  <TagDot tag={item.tag} />
                  {item.tag}
                </NavLink>
              )
            })}
        </Fragment>
      )}

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
          <TagDot />
          Untagged Notes
        </NavLink>
      )}
    </Box>
  )
}
