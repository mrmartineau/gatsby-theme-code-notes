const remarkSlug = require('remark-slug')
const remarkEmoji = require('remark-emoji')
const squeezeParagraphs = require('remark-squeeze-paragraphs')
const remarkTruncateLinks = require('remark-truncate-links').remarkTruncateLinks
const TextCleaner = require('text-cleaner')
const unwrapImages = require('remark-unwrap-images')

const clean = (string) => {
  return TextCleaner(string)
    .removeChars({ exclude: '/', replaceWith: ' ' })
    .removeStopWords()
    .stripHtml()
    .condense()
    .toLowerCase()
    .valueOf()
}

module.exports = (options) => {
  const {
    mdxOtherwiseConfigured = true,
    gitRepoContentPath = '',
    showThemeInfo = true,
    showDescriptionInSidebar = true,
    logo = '',
    flexSearchEngineOptions = {
      encode: 'icase',
      tokenize: 'forward',
      resolution: 9,
    },
    openSearch = {},
    showDate = false,
    basePath = '/',
  } = options

  return {
    siteMetadata: {
      title: `Code Notes`,
      description: `A Gatsby theme for your code-related notes`,
      gitRepoContentPath,
      showThemeInfo,
      showDescriptionInSidebar,
      logo,
      openSearch,
      showDate,
      basePath,
    },
    plugins: [
      'gatsby-plugin-typescript',
      `gatsby-plugin-sharp`,
      `gatsby-transformer-sharp`,
      `gatsby-plugin-catch-links`,
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/notes`,
          name: options.contentPath || `content/notes`,
        },
      },
      mdxOtherwiseConfigured && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          gatsbyRemarkPlugins: [
            {
              resolve: 'gatsby-remark-images',
              options: {
                backgroundColor: 'none',
                maxWidth: 900,
                linkImagesToOriginal: false,
                disableBgImage: true,
                wrapperStyle: `margin: 1.5rem 0;`,
              },
            },
            {
              resolve: 'gatsby-remark-double-brackets-link',
              options: {
                titleToURLPath: `${__dirname}/src/utils/resolve-url.js`,
                stripBrackets: true,
              },
            },
          ],
          remarkPlugins: [
            remarkSlug,
            remarkEmoji,
            squeezeParagraphs,
            [remarkTruncateLinks, { style: 'smart' }],
            unwrapImages,
          ],
        },
      },
      `gatsby-plugin-redirects`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
      {
        resolve: 'gatsby-plugin-local-search',
        options: {
          name: 'notes',
          engine: 'flexsearch',
          engineOptions: flexSearchEngineOptions,
          query: `{
            allNotes: allMdx {
              edges {
                node {
                  id
                  frontmatter {
                    title
                    emoji
                    tags
                  }
                  fields {
                    slug
                  }
                  rawBody
                }
              }
            }
          }`,
          ref: 'id',
          index: ['title', 'body', 'tagsJoint'],
          store: ['id', 'slug', 'title', 'body', 'tags', 'emoji'],
          normalizer: ({ data }) =>
            data.allNotes.edges.map(({ node }) => {
              return {
                id: node.id,
                slug: node.fields.slug,
                title: node.frontmatter.title,
                body: clean(node.rawBody),
                emoji: node.frontmatter.emoji,
                tags: node.frontmatter.tags,
                tagsJoint:
                  node.frontmatter.tags &&
                  node.frontmatter.tags.join().replace(/,/gi, ' '),
              }
            }),
        },
      },
    ].filter(Boolean),
  }
}
