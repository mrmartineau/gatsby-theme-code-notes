module.exports = {
  siteMetadata: {
    title: 'Code notes',
    description: 'Code notes',
    keywords: [],
    author: 'Zander',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: { contentPath: 'code-notes', basePath: '/' },
    },
  ],
}
