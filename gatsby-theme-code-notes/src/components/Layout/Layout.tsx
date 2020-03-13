import React, { Fragment, FunctionComponent, useState } from 'react'
import { Global } from '@emotion/core'
import { css, Box, useThemeUI, MenuButton, Link } from 'theme-ui'
import { TagNav } from '../TagNav'
import { useAllTags } from '../../use-all-tags'
import { useSiteMetadata } from '../../use-site-metadata'

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
  const { showThemeInfo } = useSiteMetadata()
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
          position: ['relative', 'fixed'],
          top: [0, 3],
          right: [0, 3],
          bottom: [0, 3],
          left: [0, theme.sizes.sidebar],
          overflowX: 'hidden',
          overflowY: 'auto',
          zIndex: 'low',
          p: 3,
          bg: 'light',
          transform: [
            navOpen && `translateX(${theme.sizes.sidebarSkinny})`,
            'translateX(0)',
          ],
          transition: 'all 200ms ease-in-out ',
          boxShadow: ['md', 'md'],
          borderRadius: [0, 'default'],
          minHeight: ['100vh', 'unset'],
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
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
          width: [theme.sizes.sidebarSkinny, theme.sizes.sidebar],
          position: 'fixed',
          top: 0,
          right: [0, 'none'],
          left: 0,
          bottom: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          bg: 'background',
          py: '4',
        }}
      >
        <TagNav
          tags={tags}
          activeTag={activeTag}
          rootPath={path === basePath}
          basePath={basePath}
          hasUntagged={hasUntagged}
        />

        {showThemeInfo && (
          <Box
            sx={{
              mt: 4,
              px: 3,
              fontSize: 0,
            }}
          >
            Want to make your own site like this? Try{' '}
            <Link href="https://github.com/mrmartineau/gatsby-theme-code-notes">
              gatsby-theme-code-notes
            </Link>{' '}
            by <Link href="https://zander.wtf">Zander Martineau</Link>.
          </Box>
        )}
      </Box>
    </Fragment>
  )
}
