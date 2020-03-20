const baseColors = {
  grayDark: '#2d3748',
  white: '#fff',
  light: '#f7fafc',
  dark: '#2d3748',
}

const colors = {
  ...baseColors,
  text: '#2d3748',
  background: '#edf2f7',
  contentBg: baseColors.light,
  primary: '#2b6cb0',
  primaryHover: '#2c5282',
  secondary: '#718096',
  muted: '#e2e8f0',
  success: '#9ae6b4',
  info: '#63b3ed',
  warning: '#faf089',
  danger: '#feb2b2',
  textMuted: '#718096',
  navHover: '#cbd5e0',
  codeBackground: '#fbf2e9',
  badgeBg: 'hsl(210, 25%, 97%)',
  badgeBgHover: 'hsl(210, 25%, 89%)',
  badgeBorder: 'hsl(207, 24%, 83%)',

  code1: 'hsl(211, 61%, 23%)',
  code2: '#fc9867',
  code3: '#e3116c',
  code4: '#d73a49',
  code5: 'hsl(211, 61%, 43%)',
  code6: '#6f42c1',
  code7: '#999988',

  modes: {
    dark: {
      code1: '#ff6188',
      code2: '#fc9867',
      code3: '#ffd866',
      code4: '#a9dc76',
      code5: '#78dce8',
      code6: '#ab9df2',
      code7: '#999988',
      text: '#edf2f7',
      background: '#2d2a2e',
      contentBg: '#383539',
      primary: '#2b6cb0',
      primaryHover: '#2c5282',
      secondary: '#718096',
      muted: '#e2e8f0',
      success: '#9ae6b4',
      info: '#63b3ed',
      warning: '#faf089',
      danger: '#feb2b2',
      textMuted: '#718096',
      navHover: 'hsl(285, 5%, 13%)',
      codeBackground: '#2d2a2e',
      badgeBg: 'hsl(285, 5%, 17%)',
      badgeBgHover: 'hsl(285, 5%, 20%)',
      badgeBorder: 'hsl(285, 5%, 12%)',
    },
  },
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
  mt: 4,
  mb: 3,
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
  p: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    color: 'text',
    mb: '1.25rem',
  },
  h1: {
    ...heading,
    fontSize: 7,
  },
  h2: {
    ...heading,
    fontSize: 6,
  },
  h3: {
    ...heading,
    fontSize: 5,
  },
  h4: {
    ...heading,
    fontSize: 4,
  },
  h5: {
    ...heading,
    fontSize: 3,
    mb: 2,
  },
  h6: {
    ...heading,
    fontSize: 2,
    mb: 2,
  },
  inlineCode: {
    backgroundColor: 'background',
    p: '0.1em 0.2em',
    fontSize: '1em',
    borderRadius: 'default',
    fontWeight: 'inherit',
  },
  code: {
    p: 3,
    fontSize: 1,
    color: 'text',
    bg: 'background',
    overflowX: 'auto',
    borderRadius: 'default',
    '.comment,.prolog,.doctype,.cdata': {
      color: 'code7',
      fontStyle: 'italic',
    },
    '.namespace': {
      opacity: 0.7,
    },
    '.string,.attr-value,.punctuation,.tag.script-punctuation,.tag.attr-value.punctuation': {
      color: 'code3',
    },
    '.entity,.url,.symbol,.number,.boolean,.constant,.property,.regex,.inserted,.attr-value,.tag.attr-value': {
      color: 'text',
    },
    '.function,.tag.function,.deleted,.variable,.unit': {
      color: 'code3',
    },
    '.function-variable': {
      color: 'code6',
    },
    '.tag,.keyword,.selector,.attr-name,.tag.attr-name': {
      color: 'code5',
    },
    '.symbol,.tag.punctuation': {
      color: 'code7',
    },
    '.property,.number': {
      color: 'code6',
    },
    '.rule,.class-name,.keyword.module,.operator,.tag': {
      color: 'code1',
    },
    '.function,.tag.function': {
      color: 'code4',
    },
  },
  pre: {
    p: 3,
    color: 'text',
    bg: 'background',
    borderRadius: 'default',
    overflowX: 'auto',
  },
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
  bg: 'badgeBg',
  borderWidth: '1px',
  borderStyle: 'solid',
  borderColor: 'badgeBorder',
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
      fontSize: 7,
      mb: 3,
      lineHeight: 'none',
    },

    noteListItem: {
      position: 'relative',
      fontSize: 2,
      m: 0,
      fontFamily: 'body',
      fontWeight: 'bold',
      color: 'text',
      pl: 4,
    },
  },

  links: {
    noteListItem: {
      mx: theme => `-${theme.space[2]}`,
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
        bg: 'badgeBgHover',
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

  images: {
    logo: {
      maxWidth: '100%',
      display: 'block',
    },
  },
}
