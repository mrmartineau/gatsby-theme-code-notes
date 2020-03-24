/** @jsx jsx */
import { jsx } from 'theme-ui'
import Prism from '@theme-ui/prism'
import { FaAnchor } from 'react-icons/fa'

const heading = Tag => props => {
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
          '&:hover': {
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

const components = {
  h1: heading('h1'),
  h2: heading('h2'),
  h3: heading('h3'),
  h4: heading('h4'),
  h5: heading('h5'),
  h6: heading('h6'),
  pre: props => props.children,
  code: Prism,
}

export default components
