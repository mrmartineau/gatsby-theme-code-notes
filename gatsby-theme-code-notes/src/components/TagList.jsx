import React from 'react'
import { Link } from 'gatsby'
import { Box, Badge } from 'theme-ui'

export const TagList = ({ tags }) => (
  <Box
    as="ul"
    sx={{
      listStyleType: 'none',
      display: 'flex',
      p: 0,
    }}
  >
    {tags.map((item, index) => (
      <Box as="li" key={index} sx={{ mr: 1 }}>
        <Link to={`/tag/${encodeURI(item.toLowerCase())}`}>
          <Badge>{item}</Badge>
        </Link>
      </Box>
    ))}
  </Box>
)
