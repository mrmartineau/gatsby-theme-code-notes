export const utils = {
  focusVisibleOutset: {
    '&:focus': {
      outline: 0,
      boxShadow: (theme) =>
        `0px 0px 0px 3px ${theme.colors.primarySemiTransparent}`,
    },
    '&:focus-visible': {
      boxShadow: (theme) =>
        `0px 0px 0px 3px ${theme.colors.primarySemiTransparent}`,
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
    },
  },

  focusVisibleInset: {
    '&:focus': {
      outline: 0,
      boxShadow: (theme) =>
        `inset 0px 0px 0px 3px ${theme.colors.primarySemiTransparent}`,
    },
    '&:focus-visible': {
      outline: 0,
      boxShadow: (theme) =>
        `inset 0px 0px 0px 3px ${theme.colors.primarySemiTransparent}`,
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
    },
  },
}
