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
    textTransform: 'uppercase',
    display: 'block',
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
      // bg: 'badgeBgHover',
      opacity: '0.7',
    },
  },
}
