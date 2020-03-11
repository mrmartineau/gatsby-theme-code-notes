const colors = {
  grayDark: '#2d3748',
  text: '#2d3748',
  background: '#edf2f7',
  white: '#fff',
  primary: '#2b6cb0',
  primaryHover: '#2c5282',
  secondary: '#718096',
  muted: '#e2e8f0',
  success: '#9ae6b4',
  info: '#63b3ed',
  warning: '#faf089',
  danger: '#feb2b2',
  light: '#f7fafc',
  dark: '#2d3748',
  textMuted: '#718096',
  navHover: '#cbd5e0',
}

const borderWidths = {
  px: '1px',
  '0': '0',
  '2': '2px',
  '4': '4px',
  '8': '8px',
}

const baseFonts = {
  sans:
    '-apple-system, BlinkMacSystemFont,"Segoe UI",Roboto,"Helvetica Neue",Arial,"Noto Sans",sans-serif,"Apple Color Emoji","Segoe UI Emoji","Segoe UI Symbol","Noto Color Emoji"',
  serif: 'Georgia, Cambria, "Times New Roman", Times, serif',
  mono:
    '"JetBrains Mono", "Fira Code", "Input Mono", Menlo, Monaco, Consolas, "Liberation Mono", "Courier New", monospace',
}

const fonts = {
  ...baseFonts,
  body: baseFonts.sans,
  heading: 'inherit',
  monospace: baseFonts.mono,
}

const fontSizes = [
  '0.7rem',
  '0.875rem',
  '1rem',
  '1.25rem',
  '1.5rem',
  '1.875rem',
  '2.25rem',
  '3rem',
  '4rem',
  '4.5rem',
]

const baseFontWeights = {
  hairline: '100',
  thin: '200',
  light: '300',
  normal: '400',
  medium: '500',
  semibold: '600',
  bold: '700',
  extrabold: '800',
  black: '900',
}

const fontWeights = {
  ...baseFontWeights,
  body: baseFontWeights.normal,
  heading: baseFontWeights.bold,
}

const letterSpacings = {
  tighter: '-0.05em',
  tight: '-0.025em',
  normal: '0',
  wide: '0.025em',
  wider: '0.05em',
  widest: '0.1em',
}

const baseLineHeights = {
  none: '1',
  tight: '1.25',
  snug: '1.375',
  normal: '1.5',
  relaxed: '1.625',
  loose: '2',
}

const lineHeights = {
  ...baseLineHeights,
  body: baseLineHeights.relaxed,
  heading: baseLineHeights.tight,
}

const radii = {
  none: '0',
  sm: '0.125rem',
  default: '0.25rem',
  lg: '0.5rem',
  full: '9999px',
}

const shadows = {
  default: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
  md: '0 0 6px -1px rgba(0, 0, 0, 0.1), 0 0 4px -1px rgba(0, 0, 0, 0.06)',
  lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
  xl:
    '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
  '2xl': '0 25px 50px -12px rgba(0, 0, 0, 0.25)',
  inner: 'inset 0 2px 4px 0 rgba(0, 0, 0, 0.06)',
  outline: '0 0 0 3px rgba(66, 153, 225, 0.5)',
  none: 'none',
}

const space = [
  0,
  '0.25rem',
  '0.5rem',
  '1rem',
  '2rem',
  '4rem',
  '8rem',
  '16rem',
  '32rem',
]

const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  m: 0,
  mb: 1,
}

const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
  },
  a: {
    '&:link, &:visited': {
      color: 'primary',
      textDecoration: 'none',
    },
    '&:hover': {
      textDecoration: 'underline',
    },
  },
  h1: {
    ...heading,
    fontSize: 7,
    mt: 2,
  },
  h2: {
    ...heading,
    fontSize: 6,
    mt: 2,
  },
  h3: {
    ...heading,
    fontSize: 5,
    mt: 3,
  },
  h4: {
    ...heading,
    fontSize: 4,
  },
  h5: {
    ...heading,
    fontSize: 3,
  },
  h6: {
    ...heading,
    fontSize: 2,
    mb: 2,
  },
  code: {
    p: 3,
    fontSize: 2,
    color: 'text',
    backgroundColor: 'background',
    '.comment,.prolog,.doctype,.cdata': {
      color: '#999988',
      fontStyle: 'italic',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value': {
      color: '#e3116c',
    },
    '.punctuation,.operator': {
      color: '#393A34',
    },
    '.entity,.url,.symbol,.number,.boolean,.variable,.constant,.property,.regex,.inserted': {
      color: '#36acaa',
    },
    '.atrule,.keyword,.attr-name,.selector': {
      color: '#00a4db',
    },
    '.function,.deleted,.tag': {
      color: '#d73a49',
    },
    '.function-variable': {
      color: '#6f42c1',
    },
    '.tag,.selector,.keyword': {
      color: '#00009f',
    },
  },
  pre: { p: 3, color: 'text', bg: 'background', borderRadius: 'default' },
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
}

const badgePrimary = {
  borderRadius: '50px',
  color: 'text',
  bg: 'hsl(210, 25%, 97%)',
  border: '1px solid hsl(207, 24%, 83%)',
  textDecoration: 'none',
  px: 2,
  fontWeight: 'bold',
  fontSize: 0,
}

export default {
  colors,
  shadows,
  space,
  radii,
  letterSpacings,
  lineHeights,
  fonts,
  fontSizes,
  fontWeights,
  borderWidths,
  styles,

  text: {
    noteTitle: {
      fontWeight: 'bold',
      fontSize: 6,
      mb: 2,
    },

    noteListItem: {
      fontSize: 2,
      m: 0,
      fontFamily: 'mono',
      fontWeight: 'normal',
      color: 'dark',
    },
  },

  links: {
    noteListItem: {
      p: 2,
      borderRadius: 2,
      display: 'block',
      transition: 'all 200ms ease-in-out ',
      color: 'dark',
      '&:link, &:visited': {
        color: 'primary',
        textDecoration: 'none',
      },
      '&:hover': {
        bg: 'muted',
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
      '&:hover': {
        bg: 'navHover',
        color: 'dark',
      },
    },

    badge: {
      ...badgePrimary,
      transition: 'all 200ms ease-in-out ',
      flexShrink: 0,
      '&:hover': {
        textDecoration: 'none',
        bg: 'hsl(210, 25%, 89%)',
      },
    },
  },

  sizes: {
    sidebar: '210px',
    sidebarSkinny: '50%',
    contentMaxWidth: '900px',
  },

  zIndices: {
    low: 10,
    mid: 20,
    high: 30,
  },

  badges: {
    primary: badgePrimary,
  },
}
