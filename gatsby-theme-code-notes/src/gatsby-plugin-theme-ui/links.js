import { badgePrimary } from './badges'

export const links = {
  noteListItem: {
    mx: (theme) => `-${theme.space[2]}`,
    p: 2,
    borderRadius: 2,
    display: 'block',
    transition: 'all 200ms ease-in-out ',
    color: 'text',
    '&:link, &:visited': {
      color: 'primary',
      textDecoration: 'none',
    },
    '&:hover': {
      bg: 'navHover',
    },
    '&:focus': {
      bg: 'navHover',
      outline: 'none',
    },
  },

  nav: {
    px: 3,
    py: 1,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'normal',
    fontFamily: 'mono',
    fontSize: 1,
    transition: 'all 200ms ease-in-out ',
    '&:hover,&:focus': {
      bg: 'navHover',
      color: 'text',
    },
  },

  badge: {
    ...badgePrimary,
    transition: 'all 200ms ease-in-out ',
    flexShrink: 0,
    '&:hover': {
      textDecoration: 'none',
      opacity: '0.7',
    },
  },

  noteLink: {
    border: '1px solid currentColor',
    px: 2,
    pb: '0.3rem',
    pt: '0.4rem',
    fontWeight: 'bold',
    fontSize: 0,
    borderRadius: 'default',
    color: 'primary',
    textDecoration: 'none',
    outline: 'none',
    '&:hover,&:focus': {
      color: 'background',
      bg: 'primary',
    },
  },
}
