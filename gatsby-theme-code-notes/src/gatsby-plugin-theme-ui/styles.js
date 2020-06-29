export const heading = {
  fontFamily: 'heading',
  fontWeight: 'heading',
  lineHeight: 'heading',
  mt: 4,
  mb: 3,
}

export const styles = {
  root: {
    fontFamily: 'body',
    lineHeight: 'body',
    fontWeight: 'body',
    fontSize: 2,
  },
  a: {
    transition: 'all 200ms ease-in-out ',
    fontWeight: 'bold',
    '&:link, &:visited': {
      color: 'text',
      textDecoration: 'none',
      borderBottom: '2px solid',
      borderBottomColor: 'primary',
    },
    '&:hover,&:focus': {
      color: 'primary',
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
    fontSize: '80%',
    borderRadius: 'default',
    fontWeight: 'inherit',
    fontFamily: 'mono',
    color: 'code4',
  },
  pre: {
    py: 2,
    mt: 0,
    fontSize: 1,
    color: 'text',
    bg: 'background',
    overflowX: 'auto',
    borderRadius: (theme) =>
      `0 0 ${theme.radii.default} ${theme.radii.default}`,
    fontFamily: 'mono',
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
    '&::-webkit-scrollbar': {
      width: '0.5rem',
      height: '0.5rem',
      '&:hover': {
        width: '1rem',
        height: '1rem',
      },
    },
    '&::-webkit-scrollbar-track': {
      backgroundColor: 'scrollbar',
    },
    '&::-webkit-scrollbar-thumb': {
      backgroundColor: 'muted',
    },
    '.highlight': {
      bg: 'codeHighlight',
      position: 'relative',
      '&::before': {
        content: "''",
        position: 'absolute',
        top: 0,
        left: 0,
        bottom: 0,
        display: 'block',
        width: '4px',
        bg: 'codeHighlightBorder',
      },
    },
    '.token-line': {
      px: 3,
    },
  },
  blockquote: {
    borderLeft: '4px solid',
    borderColor: 'muted',
    fontFamily: 'mono',
    textStyle: 'italic',
    pl: 3,
    my: 4,
    mx: 0,
  },
  hr: {
    bg: 'muted',
    border: 0,
    height: '1px',
    m: 3,
  },
  table: {
    width: '100%',
    borderCollapse: 'separate',
    borderSpacing: 0,
    tableLayout: 'fixed',
    my: 2,
  },
  th: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
    borderBottomColor: 'background',
    p: 2,
    fontWeight: 'bold',
    fontSize: 3,
    lineHeight: 1,
  },
  td: {
    textAlign: 'left',
    borderBottomStyle: 'solid',
    borderBottomColor: 'background',
    p: 2,
  },
  img: {
    my: 4,
    p: 3,
    border: (theme) => `1px solid ${theme.colors.muted}`,
    //  mx: 'auto',
    display: 'block',
    borderRadius: 'default',
  },
}
