import React from 'react'
import { Global } from '@emotion/core'
import { css } from 'theme-ui'
import { Container } from 'theme-ui'
import Footer from './footer'

export const Layout = props => (
  <>
    <Global
      styles={css({
        '*': {
          boxSizing: `border-box`,
        },
        body: {
          margin: 0,
          fontFamily: `body`,
        },
      })}
    />
    <main>
      <Container>
        {props.children}
        <Footer />
      </Container>
    </main>
  </>
)
