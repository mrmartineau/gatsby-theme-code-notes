/** @jsx jsx */
import { Link } from 'gatsby'
import { jsx, Box, Badge } from 'theme-ui'

export const TagList = ({ tags }) => (
  <Box
    sx={{
      display: 'flex',
      alignItems: 'center',
    }}
  >
    {tags.map((item, index) => (
      <Link
        to={`/tag/${encodeURI(item.toLowerCase())}`}
        key={index}
        sx={{ display: 'inline-flex' }}
      >
        <Badge sx={{ mx: 1 }}>{item}</Badge>
      </Link>
    ))}
  </Box>
)
