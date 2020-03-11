const remarkSlug = require('remark-slug')
const remarkEmoji = require('remark-emoji')

module.exports = options => {
  const {
    mdxOtherwiseConfigured = true,
    gitRepoContentPath = '',
    showThemeInfo = true,
  } = options

  return {
    siteMetadata: {
      title: `Code Notes Title Placeholder`,
      description: `A Gatsby theme for your code-related notes`,
      siteUrl: `http://zander.wtf/`,
      gitRepoContentPath,
      showThemeInfo,
    },
    plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-typescript-checker',
      mdxOtherwiseConfigured && {
        resolve: `gatsby-plugin-mdx`,
        options: {
          extensions: [`.md`, `.mdx`],
          remarkPlugins: [remarkSlug, remarkEmoji],
        },
      },
      {
        resolve: `gatsby-source-filesystem`,
        options: {
          path: options.contentPath || `content/notes`,
          name: options.contentPath || `content/notes`,
        },
      },
      `gatsby-plugin-redirects`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
