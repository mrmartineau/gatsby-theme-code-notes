import React, { Fragment, FunctionComponent, useState } from 'react'
import { Global } from '@emotion/core'
import { css, Box, useThemeUI, MenuButton } from 'theme-ui'
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
  const { theme } = useThemeUI()
  const tags = useAllTags()
  const [navOpen, setNavOpen] = useState(false)

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

      <Box
        as="main"
        sx={{
          position: 'relative',
          zIndex: 'low',
          p: 3,
          ml: [0, theme.sizes.sidebar],
          bg: 'background',
          transform: [navOpen && 'translateX(50%)', 'translateX(0)'],
          transition: 'all 200ms ease-in-out ',
          minHeight: '100vh',
          boxShadow: ['-10px -1px 16px rgba(0,0,0,0.1)', 'none'],
        }}
      >
        <Box>
          <MenuButton
            aria-label="Toggle Menu"
            onClick={() => setNavOpen(!navOpen)}
            sx={{
              display: ['block', 'none'],
            }}
          />
        </Box>

        {children}
      </Box>

      <Box
        as="header"
        sx={{
          width: [null, theme.sizes.sidebar],
          position: 'fixed',
          top: 0,
          right: [0, 'none'],
          left: 0,
          bottom: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          bg: '#f1f1f1',
        }}
      >
        <TagNav
          tags={tags}
          activeTag={activeTag}
          rootPath={path === basePath}
          basePath={basePath}
          hasUntagged={hasUntagged}
        />
      </Box>
    </Fragment>
  )
}
