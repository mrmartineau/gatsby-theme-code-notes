import React, { FunctionComponent } from 'react'
import { Layout } from '../components/Layout'
import { Heading, Box, Styled } from 'theme-ui'

interface ErrorPageProps {
  location: {
    pathname: string
  }
}

const ErrorPage: FunctionComponent<ErrorPageProps> = ({ location }) => {
  return (
    <Layout path={location.pathname} title={'404'}>
      <section>
        <Box as="header" mb={4}>
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
