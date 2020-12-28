/** @jsx jsx */
import { Fragment, FunctionComponent, useState, useContext } from 'react'
import { Global } from '@emotion/core'
import {
  jsx,
  css,
  Box,
  useThemeUI,
  MenuButton,
  Link,
  Text,
  Image,
  useColorMode,
  IconButton,
  Container,
  Flex,
} from 'theme-ui'
import { Helmet } from 'react-helmet'
import { TagNav } from '../TagNav'
import { useSiteMetadata } from '../../use-site-metadata'
import { SearchContext, SearchInput, SearchResults } from '../Search'

interface LayoutProps {
  activeTag?: string
  path?: string
  basePath?: string
  title?: string
  hasUntagged?: boolean
  tags: any
}

export const Layout: FunctionComponent<LayoutProps> = ({
  activeTag,
  path,
  basePath,
  hasUntagged,
  title,
  tags,
  children,
}) => {
  const { theme } = useThemeUI()
  const {
    showThemeInfo,
    showDescriptionInSidebar,
    description,
    logo,
    openSearch,
  } = useSiteMetadata()
  const [navOpen, setNavOpen] = useState(false)
  const [colorMode, setColorMode] = useColorMode()
  const { query } = useContext(SearchContext)

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
        {openSearch && openSearch.siteUrl && (
          <link
            rel="search"
            type="application/opensearchdescription+xml"
            href="/opensearch.xml"
            title={openSearch.siteShortName}
          />
        )}
      </Helmet>
      <Global
        key="global-styles"
        styles={css({
          '*': {
            boxSizing: `border-box`,
          },
          body: {
            margin: 0,
          },

          ':root': {
            fontSize: '16px',
          },
          /* 16px @ 480px increasing to 32px @ 1920px */
          '@media (min-width: 480px)': {
            ':root': {
              fontSize: 'calc(1rem + ((1vw - 4.8px) * 0.2778))',
              /* Where: * 0.2778 = 100 * font_Size_Difference / viewport_Width_Difference */
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
          p: [3, 6],
          bg: 'contentBg',
          transform: [
            navOpen && `translateX(${theme.sizes.sidebar})`,
            'translateX(0)',
          ],
          transition: 'all 200ms ease-in-out ',
          boxShadow: 'md',
          borderRadius: [0, 'default'],
          minHeight: ['100vh', 'unset'],
        }}
      >
        <Container
          sx={{
            display: 'flex',
            flexDirection: 'column',
            minHeight: '100%',
          }}
        >
          <Flex sx={{ alignItems: 'center', mb: 5 }}>
            <MenuButton
              aria-label="Toggle Menu"
              onClick={() => setNavOpen(!navOpen)}
              sx={{
                display: ['block', 'none'],
                mr: 3,
              }}
            />

            <Box
              sx={{
                flexGrow: 1,
              }}
            >
              <SearchInput />
            </Box>
          </Flex>

          {query ? <SearchResults /> : children}

          {showThemeInfo && (
            <Box sx={{ mt: 4, fontSize: 0 }}>
              Want to make your own site like this?
              <br />
              Try{' '}
              <Link href="https://github.com/mrmartineau/gatsby-theme-code-notes">
                gatsby-theme-code-notes
              </Link>{' '}
              by <Link href="https://zander.wtf">Zander Martineau</Link>.
            </Box>
          )}
        </Container>
      </Box>

      <Box
        as="header"
        sx={{
          width: 'sidebar',
          position: 'fixed',
          top: 0,
          right: [0, 'auto'],
          left: 0,
          bottom: 0,
          overflowX: 'hidden',
          overflowY: 'auto',
          pt: 4,
        }}
      >
        <Box sx={{ mb: 3, px: 3 }}>
          {!!logo && (
            <Box sx={{ mb: 3 }}>
              <Image src={logo} variant="logo" alt="logo" />
            </Box>
          )}
          {showDescriptionInSidebar && description && (
            <Box sx={{ mb: 3 }}>
              <Text
                sx={{
                  color: 'textStrong',
                  lineHeight: 'snug',
                  fontWeight: 'extrabold',
                }}
              >
                {description}
              </Text>
            </Box>
          )}
        </Box>

        <TagNav
          tags={tags}
          activeTag={activeTag}
          rootPath={path === basePath}
          basePath={basePath}
          hasUntagged={hasUntagged}
        />
        <Box
          sx={{
            position: 'fixed',
            left: 0,
            width: 'sidebar',
            bottom: 0,
            bg: 'backgroundTransparent',
            py: 3,
          }}
        >
          <IconButton
            onClick={(e) => {
              setColorMode(colorMode === 'light' ? 'dark' : 'light')
            }}
            aria-label="Toggle dark mode"
            sx={{
              color: 'text',
              zIndex: 11,
              p: 0,
              display: 'block',
              mx: 'auto',
              transition: 'all 200ms ease-in-out ',
              cursor: 'pointer',
              '&:hover': {
                color: 'primary',
              },
            }}
          >
            <svg
              width="1.5rem"
              height="1.5rem"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 1024 1024"
              fill="currentColor"
            >
              <path d="M912.1 512c0 20-1.4 39.9-4 59.7.5-3.5 1-7.1 1.4-10.6-5.2 38.4-15.5 75.9-30.5 111.6 1.3-3.2 2.7-6.4 4-9.6-14.8 34.8-34 67.6-57.1 97.6l6.3-8.1c-23 29.7-49.8 56.4-79.5 79.5l8.1-6.3c-30 23.1-62.8 42.3-97.6 57.1 3.2-1.3 6.4-2.7 9.6-4-35.7 15-73.2 25.3-111.6 30.6 3.5-.5 7.1-1 10.6-1.4a450.3 450.3 0 0 1-119.4 0c3.5.5 7.1 1 10.6 1.4-38.5-5.2-76-15.5-111.7-30.5 3.2 1.3 6.4 2.7 9.6 4-34.8-14.8-67.6-34-97.6-57.1l8.1 6.3c-29.7-23-56.4-49.8-79.5-79.5l6.3 8.1c-23.1-30-42.3-62.8-57.1-97.6 1.3 3.2 2.7 6.4 4 9.6-15-35.7-25.3-73.2-30.6-111.6.5 3.5 1 7.1 1.4 10.6a450.3 450.3 0 0 1 0-119.4c-.5 3.5-1 7.1-1.4 10.6 5.3-38.4 15.5-75.9 30.6-111.6-1.3 3.2-2.7 6.4-4 9.6 14.8-34.8 34-67.6 57.1-97.6l-6.3 8.1c23-29.7 49.8-56.4 79.5-79.5l-8.1 6.3c30-23.1 62.8-42.3 97.6-57.1-3.2 1.3-6.4 2.7-9.6 4 35.7-15 73.2-25.3 111.6-30.6-3.5.5-7.1 1-10.6 1.4 39.6-5.3 79.8-5.3 119.4 0-3.5-.5-7.1-1-10.6-1.4 38.4 5.3 75.9 15.5 111.6 30.6-3.2-1.3-6.4-2.7-9.6-4 34.8 14.8 67.6 34 97.6 57.1l-8.1-6.3c29.7 23 56.4 49.8 79.5 79.5l-6.3-8.1c23.1 30 42.3 62.8 57.1 97.6-1.3-3.2-2.7-6.4-4-9.6 15 35.7 25.3 73.2 30.6 111.6-.5-3.5-1-7.1-1.4-10.6 2.7 19.7 4 39.6 4 59.6 0 20.9 18.4 41 40 40s40-17.6 40-40c-.1-49.6-7.6-99.8-22.9-146.9-14.8-45.6-36.2-89.4-64-128.5-14.6-20.5-30.6-40.3-48.1-58.5-17.6-18.2-36.8-34.5-56.9-49.9-38-29.1-80.5-51.4-125.3-67.9-46.3-17.1-95.9-26.1-145.2-28.1-49.8-2-100.5 4.1-148.5 17.7-46.1 13.1-90.9 33.3-131 59.7-39.7 26.1-76 57.8-106.2 94.4-16.1 19.5-31.1 40-44.1 61.7-13.2 21.9-24 45-33.7 68.6-18.8 45.7-29.2 94.3-33 143.4-3.8 49.7.7 100.4 12.5 148.9C57 673.3 75.9 718.9 100.8 760c24.6 40.5 55.3 78 90.8 109.5 35.7 31.7 75.7 58.7 119.2 78.4 23.5 10.6 47.5 19.9 72.3 26.8 25.4 7.1 51.3 11.5 77.4 14.5 50 5.8 100.9 2.8 150.2-7.3 47.3-9.6 93.5-27.2 135.6-50.7 41.2-23 79.4-52.6 112.1-86.7 32.8-34.3 61.2-73.7 82.3-116.3 21.7-43.6 37.5-90.2 44.9-138.4 4-25.8 6.5-51.7 6.5-77.8 0-20.9-18.4-41-40-40-21.7 1-39.9 17.6-40 40z" />
              <path d="M512 187.7v648.6c-179.1 0-324-145.2-324-324.3s144.9-324.3 324-324.3z" />
              <path d="M482 187.7v569c0 26.2-.6 52.4 0 78.6v1.1l30-30c-14.4 0-28.8-1-43.1-2.8 2.7.4 5.3.7 8 1.1-28.6-3.9-56.5-11.5-83.1-22.6l7.2 3c-15-6.4-29.5-13.9-43.4-22.4-6.7-4.1-13.3-8.5-19.7-13.1-1.6-1.2-3.2-2.3-4.8-3.5-.8-.6-2.1-1.2-2.6-2-.1-.1 6.4 5.1 3 2.3-3.2-2.6-6.5-5.2-9.6-7.9-12.1-10.3-23.5-21.5-34.1-33.5-2.6-3-5.1-6-7.6-9-1.1-1.4-2.2-2.7-3.3-4.1-.5-.7-1.1-1.4-1.6-2.1 6.1 7.7 2.9 3.7 1.5 1.9-4.9-6.5-9.5-13.1-13.8-20-9.9-15.4-18.4-31.7-25.5-48.5l3 7.2c-11.2-26.6-18.8-54.5-22.6-83.1.4 2.7.7 5.3 1.1 8-3.7-28.6-3.7-57.6 0-86.2-.4 2.7-.7 5.3-1.1 8 3.9-28.6 11.4-56.5 22.6-83.1l-3 7.2c6.4-15 13.8-29.6 22.4-43.5 4.1-6.7 8.5-13.3 13.1-19.7 1.1-1.6 2.3-3.2 3.5-4.8.5-.7 1.2-2.2 2-2.6.1-.1-5 6.4-2.3 3 2.6-3.3 5.2-6.5 7.9-9.7 10.3-12.2 21.5-23.6 33.4-34.1 3-2.6 5.9-5.1 9-7.6 1.4-1.1 2.7-2.2 4.1-3.3.7-.5 1.4-1.1 2.1-1.6-7.6 6.1-3.7 2.9-1.9 1.5 6.5-4.9 13.1-9.5 19.9-13.9 15.4-9.9 31.6-18.4 48.4-25.6l-7.2 3c26.6-11.2 54.5-18.8 83.1-22.6-2.7.4-5.3.7-8 1.1 14.3-1.9 28.7-2.8 43.1-2.8 15.7 0 30.7-13.8 30-30-.7-16.2-13.2-30-30-30-72.2.2-144.6 22.3-203.4 64.4-59.5 42.6-104.5 101.2-129.7 170-25.2 68.6-27.5 146.1-7.6 216.3C190.5 676.5 230.6 739.1 285 784c57.5 47.4 126.9 75.7 201.2 81.6 8.6.7 17.3 1 25.9 1 16.2 0 30-13.8 30-30v-64.5-155-187.5-162c0-26.2.5-52.4 0-78.6v-1.1c0-15.7-13.8-30.7-30-30-16.4.5-30.1 13-30.1 29.8z" />
            </svg>
          </IconButton>
        </Box>
      </Box>
    </Fragment>
  )
}
