import React, { FunctionComponent } from 'react'
import { Box } from 'theme-ui'
import slugify from '@alexcarpenter/slugify'
import { getColourFromString } from '../../utils/getColourFromString'

export const TagDot: FunctionComponent<{ tag?: string; size?: string }> = ({
  tag,
  size = '10px',
}) => {
  let tagColor
  if (tag) {
    const tagName = slugify(tag)
    tagColor = getColourFromString(tagName)
  } else {
    tagColor = '#aaa'
  }
  return (
    <Box
      sx={{
        bg: tagColor,
        width: size,
        height: size,
        borderRadius: '50%',
        mr: '0.5em',
      }}
    />
  )
}
