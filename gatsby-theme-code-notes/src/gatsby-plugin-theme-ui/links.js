import { badgePrimary } from './badges'

export const links = {
  noteListItem: {
    mx: (theme) => `-${theme.space[2]}`,
    p: 2,
    borderRadius: 'default',
    display: 'block',
    transition: 'all 200ms ease-in-out ',
    color: 'text',
    variant: 'utils.focusVisibleOutset',
    '&:link, &:visited': {
      color: 'primary',
      textDecoration: 'none',
    },
    '&:hover': {
      bg: 'codeBackground',
    },
  },

  nav: {
    px: 3,
    py: 1,
    display: 'flex',
    alignItems: 'center',
    fontWeight: 'normal',
    fontSize: '14px',
    transition: 'all 200ms ease-in-out ',
    color: 'textStrong',
    '&:hover': {
      bg: 'navHover',
      color: 'textStrong',
    },
    variant: 'utils.focusVisibleOutset',
  },

  badge: {
    ...badgePrimary,
    transition: 'all 200ms ease-in-out ',
    flexShrink: 0,
    '&:hover': {
      textDecoration: 'none',
      opacity: '0.7',
    },
    variant: 'utils.focusVisibleOutset',
  },
}
