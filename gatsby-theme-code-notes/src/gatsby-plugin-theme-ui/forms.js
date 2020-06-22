export const forms = {
  input: {
    border: 0,
    borderBottom: (theme) => `1px solid ${theme.colors.input}`,
    pl: 5,
    borderRadius: 0,
    fontFamily: 'sans',
    transition: 'all 200ms ease-in-out ',
    lineHeight: '1.4rem',
    '&:focus': {
      boxShadow: (theme) => `0 2px 0 ${theme.colors.primary}`,
      outline: 'none',
      borderColor: 'primary',
    },
  },
}
