import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'

// interface NoteListProps {
//   notes: any[]
// }

export const Sidebar: FunctionComponent = ({ children }) => {
  return (
    <Box
      sx={{
        width: '200px',
        flexShrink: 0,
      }}
    >
      {children}
    </Box>
  )
}
