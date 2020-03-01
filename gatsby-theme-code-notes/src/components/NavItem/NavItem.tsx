import React, { FunctionComponent } from 'react'
import { NavLink, Link } from 'theme-ui'
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
  <NavLink
    sx={{
      p: 1,
      fontWeight: active ? 'bold' : 'normal',
    }}
    to={to}
    as={GatsbyLink}
  >
    {children}
  </NavLink>
)
