import { graphql, useStaticQuery } from 'gatsby'

export const useSiteMetadata = () => {
  const data = useStaticQuery(graphql`
    {
      site {
        siteMetadata {
          title
          description
          gitRepoContentPath
          showThemeInfo
          showDescriptionInSidebar
          logo
          openSearch {
            siteUrl
            siteShortName
          }
          sortByDate
          showDate
          basePath
        }
      }
    }
  `)

  return data.site.siteMetadata
}
