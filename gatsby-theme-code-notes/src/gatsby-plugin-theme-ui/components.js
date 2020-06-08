/** @jsx jsx */
import { jsx, Box, Button } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { FaAnchor } from 'react-icons/fa'
import { toClipboard } from 'copee'
import { useState } from 'react'
import { getColourFromString } from '../utils/getColourFromString'

const heading = (Tag) => (props) => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag
      {...props}
      sx={{
        '&:hover .slug': {
          opacity: 0.6,
        },
      }}
    >
      {props.children}
      <a
        className="slug"
        href={`#${props.id}`}
        sx={{
          fontSize: 3,
          textDecoration: 'none',
          pr: 3,
          pl: 3,
          display: 'inline-block',
          color: 'text',
          opacity: 0.2,
          transition: 'all 200ms ease-in-out ',
          '&:hover,&:focus': {
            opacity: 1,
            color: 'primary',
          },
        }}
      >
        <FaAnchor size="0.8em" fill="currentColor" title="" />
      </a>
    </Tag>
  )
}

const ResponsiveTable = ({ children }) => {
  return (
    <Box
      sx={{
        overflowX: 'auto',
        whiteSpace: 'nowrap',
        table: {
          width: '100%',
          maxWidth: '100%',
        },
      }}
    >
      <table>{children}</table>
    </Box>
  )
}

const CopyCode = ({ code }) => {
  const [notificationActive, setNotificationActive] = useState(false)

  const handleCopy = () => {
    toClipboard(code)
    setNotificationActive(true)

    setTimeout(() => {
      setNotificationActive(false)
    }, 3000)
  }

  return (
    <Button onClick={() => handleCopy()} variant="copyCode">
      {notificationActive ? 'Copied' : 'Copy'}
    </Button>
  )
}

const CodeLabel = ({ label }) => {
  if (!label.includes('language')) {
    return null
  }

  const classes = label.split(' ')
  const langIndex = classes.findIndex((item) => {
    return item.includes('language')
  })
  const language = classes[langIndex].replace('language-', '')

  return (
    <Box
      sx={{
        position: 'absolute',
        top: 0,
        left: '1rem',
        fontFamily: 'mono',
        fontSize: 0,
        bg: getColourFromString(language), //'contentBg',
        textTransform: 'uppercase',
        px: 2,
        py: 1,
        lineHeight: 1,
        borderRadius: '0 0 0.2rem 0.2rem',
        userSelect: 'none',
      }}
    >
      {language}
    </Box>
  )
}

const Code = ({ children, classes, code }) => {
  const noLang = !classes.includes('language')
  return (
    <Box
      sx={{
        position: 'relative',
        pre: {
          pt: noLang ? 'auto' : 5,
        },
      }}
    >
      <Box
        sx={{
          position: 'absolute',
          top: '10px',
          right: '10px',
        }}
      >
        <CopyCode code={code} />
      </Box>
      {children}
      <CodeLabel label={classes} />
    </Box>
  )
}

const components = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  pre: (props) => props.children,
  code: (props) => (
    <Code code={props.children} classes={props.className}>
      <Prism {...props} />
    </Code>
  ),
  table: (props) => <ResponsiveTable>{props.children}</ResponsiveTable>,
}

export default components
