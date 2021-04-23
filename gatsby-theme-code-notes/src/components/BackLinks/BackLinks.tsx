import React from 'react'
import { Box, Link } from 'theme-ui'

interface IProps {
  references: {
    frontmatter: {
      title: string
    }
    slug: string
  }[]
}

export const BackLinks: React.FC<IProps> = ({ references }) => (
  <Box as="details" sx={{ my: 4, fontSize: 1 }}>
    <Box
      as="summary"
      sx={{ textTransform: 'uppercase', fontSize: 0, cursor: 'pointer' }}
    >
      Back Links ({references.length})
    </Box>
    <Box as="ul" sx={{ listStyleType: 'none', pl: 3 }}>
      {references.map((ref) => {
        return (
          <li key={`${ref.slug}-item`}>
            <Link href={`/${ref.slug.toLowerCase()}`}>
              {ref.frontmatter.title}
            </Link>
          </li>
        )
      })}
    </Box>
  </Box>
)
