import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const Sidebar: FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        width: '200px',
        position: 'fixed',
        top: 0,
        right: [0, 'none'],
        left: 0,
        bottom: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
      }}
    >
      {children}
    </Box>
  )
}
