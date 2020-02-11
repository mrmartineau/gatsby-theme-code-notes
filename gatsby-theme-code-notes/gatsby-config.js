module.exports = ({ contentPath = 'notes', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        extensions: [`.mdx`, `.md`],
        /* defaultLayouts: {
          default: require.resolve('./src/pages/Note.js'),
        }, */
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'notes',
        path: contentPath,
      },
    },
  ],
})
