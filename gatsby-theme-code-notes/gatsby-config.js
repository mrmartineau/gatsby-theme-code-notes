// const remarkHeadings = require('remark-autolink-headings')
// var remarkGithub = require('remark-github')

module.exports = options => {
  const {
    mdxOtherwiseConfigured = true,
    mdxLayouts = {},
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
          defaultLayouts: {
            ...mdxLayouts,
          },
          // remarkPlugins: [remarkHeadings, remarkGithub],
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
