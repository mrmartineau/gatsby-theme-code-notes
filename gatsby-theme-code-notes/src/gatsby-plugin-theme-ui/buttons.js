export const buttons = {
  copyCode: {
    px: 2,
    py: 1,
    fontSize: 0,
    bg: 'badgeBg',
    userSelect: 'none',
    color: 'text',
    border: (theme) => `1px solid ${theme.colors.badgeBorder}`,
    borderRadius: 'large',
    ml: 'auto',
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    '&:hover': {
      bg: 'badgeBgHover',
    },
    variant: 'utils.focusVisibleOutset',
  },

  icon: {
    borderRadius: '50%',
    variant: 'utils.focusVisibleOutset',
  },

  sort: {
    display: 'inline-flex',
    alignItems: 'center',
    px: 2,
    py: 0,
    fontSize: 0,
    bg: 'badgeBg',
    userSelect: 'none',
    color: 'text',
    border: '1px solid',
    borderColor: 'badgeBorder',
    borderRadius: 0,
    fontFamily: 'inherit',
    textTransform: 'uppercase',
    '&:hover': {
      bg: 'badgeBgHover',
    },
    '&.active': {
      bg: 'badgeBgHover',
      color: 'textStrong',
    },
    // '&:focus': {
    //   bg: 'badgeBorder',
    //   outline: 0,
    // },
    variant: 'utils.focusVisibleOutset',
    // '&:focus': {
    //   outline: 0,
    //   variant: 'utils.focusOutset',
    // },
    // '&:focus-visible': {
    //   variant: 'utils.focusOutset',
    // },
    // '&:focus:not(:focus-visible)': {
    //   boxShadow: 'none',
    // },
    svg: {
      ml: 1,
    },
    '&:first-child': {
      borderTopLeftRadius: '0.25rem',
      borderBottomLeftRadius: '0.25rem',
      borderRight: 0,
    },
    '&:last-child': {
      borderTopRightRadius: '0.25rem',
      borderBottomRightRadius: '0.25rem',
      borderRight: '1px solid',
      borderColor: 'badgeBorder',
    },
  },
}
