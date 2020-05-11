import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const DateModified: FunctionComponent = ({ children }) => (
  <Box
    sx={{
      fontFamily: 'monospace',
      fontSize: 0,
      opacity: 0.7,
      color: 'grayDark',
      whiteSpace: 'nowrap',
      overflow: 'hidden',
      textOverflow: 'ellipsis',
      display: 'inline-block',
    }}
  >
    {children}
  </Box>
)
