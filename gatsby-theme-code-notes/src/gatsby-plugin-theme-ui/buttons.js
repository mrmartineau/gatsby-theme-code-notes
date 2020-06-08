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
    '&:hover,&:focus': {
      bg: 'badgeBgHover',
    },
  },
}
