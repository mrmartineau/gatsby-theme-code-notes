// import codeTheme from '@theme-ui/prism/presets/github.json'
import { base } from '@theme-ui/presets'

export default {
  ...base,
  styles: {
    ...base.styles,
    code: {
      p: 2,
      fontSize: 1,
      color: '#393A34',
      backgroundColor: '#f6f8fa',
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
  },
  text: {
    noteTitle: {
      fontWeight: 'bold',
      fontSize: 6,
      mb: 2,
    },
  },
  links: {
    bold: {
      '&:link, &:visited': {
        fontWeight: 'bold',
        color: 'primary',
        textDecoration: 'none',
      },
      '&:hover': {
        textDecoration: 'underline',
      },
    },
  },
}
