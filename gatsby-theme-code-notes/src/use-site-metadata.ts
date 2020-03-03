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
        }
      }
    }
  `)

  return data.site.siteMetadata
}
