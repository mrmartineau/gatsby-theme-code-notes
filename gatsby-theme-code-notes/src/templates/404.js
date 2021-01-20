import React from 'react'
import { Layout } from '../components/Layout'
import { Heading, Box, Styled } from 'theme-ui'

const ErrorPage = ({ pageContext, location }) => {
  return (
    <Layout
      path={location.pathname}
      basePath={pageContext.basePath}
      hasUntagged={pageContext.hasUntagged}
      tags={pageContext.tags}
      title={'404'}
    >
      <section>
        <Box as="header" sx={{ mb: 4 }}>
          <Heading as="h1" variant="noteTitle">
            Page not found
          </Heading>
        </Box>

        <Styled.p>
          Oops! This page you are looking for has been removed or relocated.
        </Styled.p>
      </section>
    </Layout>
  )
}

export default ErrorPage
