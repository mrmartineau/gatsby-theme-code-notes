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
    '&:hover,&:focus': {
      bg: 'badgeBgHover',
    },
  },
}
