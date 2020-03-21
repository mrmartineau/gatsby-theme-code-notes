/** @jsx jsx */
import { jsx } from 'theme-ui'
import Prism from '@theme-ui/prism'

const heading = Tag => props => {
  if (!props.id) return <Tag {...props} />

  return (
    <Tag
      {...props}
      sx={{
        position: 'relative',
        '&:hover .slug': {
          opacity: 1,
        },
      }}
    >
      {props.children}
      <a
        className="slug"
        href={`#${props.id}`}
        sx={{
          position: ['static', 'absolute'],
          right: '100%',
          top: '50%',
          transform: ['unset', 'translateY(-50%)'],
          fontSize: 3,
          textDecoration: 'none',
          pr: 2,
          pl: 2,
          display: ['inline-block', 'block'],
          mt: '0.25em',
          color: 'text',
          opacity: 0.6,
          transition: 'all 200ms ease-in-out ',
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="1em"
          height="1em"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path>
          <path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path>
        </svg>
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
