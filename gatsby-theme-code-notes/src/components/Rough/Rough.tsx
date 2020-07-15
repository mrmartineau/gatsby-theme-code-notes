import React from 'react'
import { RoughNotation } from 'react-rough-notation'
import { useThemeUI } from 'theme-ui'

export const Underline = (props) => (
  <RoughNotation type="underline" show={true} {...props} />
)
export const Box = (props) => {
  const { theme } = useThemeUI()
  return (
    <RoughNotation
      type="box"
      show={true}
      color={theme.colors.around}
      multiline={true}
      {...props}
    />
  )
}
export const Circle = (props) => {
  const { theme } = useThemeUI()
  return (
    <RoughNotation
      type="circle"
      show={true}
      color={theme.colors.around}
      multiline={true}
      {...props}
    />
  )
}
export const Highlight = (props) => {
  const { theme } = useThemeUI()
  return (
    <RoughNotation
      type="highlight"
      show={true}
      color={theme.colors.highlight}
      multiline={true}
      {...props}
    />
  )
}
export const StrikeThrough = (props) => {
  const { theme } = useThemeUI()
  return (
    <RoughNotation
      type="strike-through"
      show={true}
      color={theme.colors.crossed}
      multiline={true}
      {...props}
    />
  )
}
export const CrossedOff = (props) => {
  const { theme } = useThemeUI()
  return (
    <RoughNotation
      type="crossed-off"
      show={true}
      color={theme.colors.crossed}
      multiline={true}
      {...props}
    />
  )
}
