import React from 'react'
import { Link } from 'gatsby'
import { Box, Badge } from 'theme-ui'

export const TagNav = ({ tags }) => (
  <Box
    as="ul"
    sx={{
      listStyleType: 'none',
    }}
  >
    {tags.map((item, index) => (
      <Box as="li" key={index} sx={{ p: 1 }}>
        <Link to={`/tag/${encodeURI(item.toLowerCase())}`}>
          <Badge>{item}</Badge>
        </Link>
      </Box>
    ))}
  </Box>
)
