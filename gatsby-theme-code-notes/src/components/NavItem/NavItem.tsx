import React, { FunctionComponent } from 'react'
import { Box, Link } from 'theme-ui'
import { Link as GatsbyLink } from 'gatsby'

interface NavItemProps {
  active?: boolean
  to: string
}

export const NavItem: FunctionComponent<NavItemProps> = ({
  active,
  to,
  children,
}) => (
  <Box
    as="li"
    sx={{
      p: 1,
      fontWeight: active ? 'bold' : 'normal',
    }}
  >
    <Link as={GatsbyLink} to={to}>
      {children}
    </Link>
  </Box>
)
