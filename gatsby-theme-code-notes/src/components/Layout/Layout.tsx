import React, { Fragment, FunctionComponent, useState } from 'react'
import { Global } from '@emotion/core'
import { css, Box, useThemeUI, MenuButton, Link, Text, Image } from 'theme-ui'
import { Helmet } from 'react-helmet'
import { TagNav } from '../TagNav'
import { useAllTags } from '../../use-all-tags'
import { useSiteMetadata } from '../../use-site-metadata'

interface LayoutProps {
  activeTag?: string
  path?: string
  basePath?: string
  title?: string
  hasUntagged?: boolean
}

export const Layout: FunctionComponent<LayoutProps> = ({
  activeTag,
  path,
  basePath,
  hasUntagged,
  title,
  children,
}) => {
  const { theme } = useThemeUI()
  const tags = useAllTags()
  const {
    showThemeInfo,
    showDescriptionInSidebar,
    description,
    logo,
  } = useSiteMetadata()
  const [navOpen, setNavOpen] = useState(false)

  return (
    <Fragment>
      <Helmet
        key="app-metadata"
        titleTemplate={`%s · ${description}`}
        defaultTitle={description}
      >
        <html lang="en" />
        <meta charSet="utf-8" />
        <title>{title}</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Helmet>
      <Global
        key="global-styles"
        styles={css({
          '*': {
            boxSizing: `border-box`,
          },
          body: {
            margin: 0,
            fontFamily: `body`,
          },

          ':root': {
            fontSize: '14px',
          },
          /* 16px @ 480px increasing to 32px @ 1920px */
          '@media (min-width: 480px)': {
            ':root': {
              fontSize: 'calc(0.875rem + ((1vw - 4.8px) * 0.4167))',
              /* Where: * 0.4167 = 100 * font_Size_Difference / viewport_Width_Difference */
            },
          },
          /* Prevent font scaling beyond this breakpoint */
          '@media (min-width: 1920px)': {
            ':root': {
              fontSize: '20px',
            },
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
          p: 4,
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
          right: [0, 'auto'],
          left: 0,
          bottom: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          bg: 'background',
          py: '4',
        }}
      >
        <Box>
          {!!logo && (
            <Box px={3} pb={3}>
              <Image src={logo} variant="logo" />
            </Box>
          )}

          {showDescriptionInSidebar && description && (
            <Box px={3} pb={3}>
              <Text
                sx={{ color: 'text', lineHeight: 'snug', fontWeight: 'bold' }}
              >
                {description}
              </Text>
            </Box>
          )}

          <TagNav
            tags={tags}
            activeTag={activeTag}
            rootPath={path === basePath}
            basePath={basePath}
            hasUntagged={hasUntagged}
          />
        </Box>

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
