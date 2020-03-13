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
          display: 'block',
        },
      }}
    >
      <a
        className="slug"
        href={`#${props.id}`}
        sx={{
          position: 'absolute',
          right: '100%',
          top: '50%',
          transform: 'translateY(-50%)',
          fontSize: [2, 3],
          textDecoration: 'none',
          py: 2,
          pr: 1,
          pl: 2,
          display: 'none',
        }}
      >
        <span role="img">🔗</span>
      </a>
      {props.children}
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
