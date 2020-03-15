module.exports = {
  siteMetadata: {
    title: 'Code notes',
    description: 'Notes on code. My memory bank.',
    keywords: [],
    author: 'Zander',
  },
  plugins: [
    {
      resolve: 'gatsby-theme-code-notes',
      options: {
        contentPath: 'code-notes',
        basePath: '/',
        gitRepoContentPath:
          'https://github.com/mrmartineau/gatsby-theme-code-notes/tree/master/example/code-notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: true,
        logo: 'https://brand.zander.wtf/Avatar.png',
      },
    },
  ],
}
