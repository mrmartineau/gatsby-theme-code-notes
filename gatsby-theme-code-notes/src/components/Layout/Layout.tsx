import React, { Fragment, FunctionComponent } from 'react'
import { Global } from '@emotion/core'
import { css } from 'theme-ui'
import { Flex, Box } from 'theme-ui'
import { TagNav } from '../TagNav'
import { useAllTags } from '../../use-all-tags'
import { Sidebar } from '../Sidebar'

interface LayoutProps {
  activeTag?: string
  path?: string
  basePath?: string
  hasUntagged?: boolean
}

export const Layout: FunctionComponent<LayoutProps> = ({
  activeTag,
  path,
  basePath,
  hasUntagged,
  children,
}) => {
  const tags = useAllTags()
  return (
    <Fragment>
      <Global
        styles={css({
          '*': {
            boxSizing: `border-box`,
          },
          body: {
            margin: 0,
            fontFamily: `body`,
          },
        })}
      />
      <Sidebar>
        <TagNav
          tags={tags}
          activeTag={activeTag}
          rootPath={path === basePath}
          basePath={basePath}
          hasUntagged={hasUntagged}
        />
      </Sidebar>
      <Box
        as="section"
        sx={{
          flexGrow: 1,
          p: 3,
          ml: [0, '200px'],
        }}
      >
        {children}
      </Box>
    </Fragment>
  )
}
