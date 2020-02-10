module.exports = ({ contentPath = 'code-notes', basePath = '/' }) => ({
  plugins: [
    'gatsby-plugin-theme-ui',
    {
      resolve: `gatsby-plugin-mdx`,
      options: {
        defaultLayouts: {
          default: require.resolve('./src/components/default-page-layout.js'),
          extensions: [`.mdx`, `.md`],
        },
      },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'pages',
        path: `${__dirname}/src/${contentPath}/`,
      },
    },
  ],
})
