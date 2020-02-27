// const remarkHeadings = require('remark-autolink-headings')
// var remarkGithub = require('remark-github')

module.exports = options => {
  const { mdx = true, mdxLayouts = {} } = options

  return {
    siteMetadata: {
      title: `Code Notes Title Placeholder`,
      description: `Description placeholder`,
      siteUrl: `http://zander.wtf/`,
    },
    plugins: [
      'gatsby-plugin-typescript',
      'gatsby-plugin-typescript-checker',
      'gatsby-plugin-typegen',
      mdx && {
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
      `gatsby-plugin-og-image`,
      `gatsby-plugin-react-helmet`,
      `gatsby-plugin-theme-ui`,
    ].filter(Boolean),
  }
}
