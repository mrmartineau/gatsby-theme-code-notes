import { badgePrimary } from './badges'

export const links = {
  noteListItem: {
    mx: (theme) => `-${theme.space[2]}`,
    p: 2,
    borderRadius: 'default',
    display: 'block',
    transition: 'all 200ms ease-in-out ',
    color: 'text',
    '&:link, &:visited': {
      color: 'primary',
      textDecoration: 'none',
    },
    '&:hover': {
      bg: 'codeBackground',
    },
    '&:focus': {
      bg: 'codeBackground',
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
}
