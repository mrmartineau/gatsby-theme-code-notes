import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

export const DateModified: FunctionComponent = ({ children }) => (
  <Box sx={{ fontFamily: 'monospace', fontSize: 0, color: '#aaa' }}>
    {children}
  </Box>
)
