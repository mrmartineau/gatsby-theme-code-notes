/** @jsx jsx */
import { FunctionComponent } from 'react'
import { jsx, Box } from 'theme-ui'
import { NavItem } from '../NavItem'

interface TagItemInterface {
  tag: string
  totalCount: number
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
  console.log('TCL: tags', tags)
  return (
    <Box
      as="ul"
      sx={{
        listStyleType: 'none',
        p: 3,
      }}
    >
      <NavItem active={!!rootPath} to={basePath}>
        All tags
      </NavItem>

      {tags.map((item, index) => (
        <NavItem
          key={index}
          active={activeTag === item.tag}
          to={`/tag/${encodeURI(item.tag.toLowerCase())}`}
        >
          {item.tag}
        </NavItem>
      ))}

      {hasUntagged && (
        <NavItem active={activeTag === 'untagged'} to={`/tag/untagged`}>
          Untagged
        </NavItem>
      )}
    </Box>
  )
}
