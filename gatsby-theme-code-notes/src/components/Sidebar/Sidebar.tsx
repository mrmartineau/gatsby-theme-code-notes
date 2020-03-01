import React, { FunctionComponent } from 'react'
import { Box, useThemeUI } from 'theme-ui'

export const Sidebar: FunctionComponent = ({ children }) => {
  const { theme } = useThemeUI()
  return (
    <Box
      as="header"
      sx={{
        width: [null, theme.sizes.sidebar],
        position: 'fixed',
        top: 0,
        right: [0, 'none'],
        left: 0,
        bottom: 0,
        overflowX: 'hidden',
        overflowY: 'auto',
        bg: '#f1f1f1',
      }}
    >
      {children}
    </Box>
  )
}
