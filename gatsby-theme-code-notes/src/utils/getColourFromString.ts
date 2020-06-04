import ColorHash from 'color-hash'

const colorHash = new ColorHash({
  lightness: 0.6,
  saturation: 0.4,
})

export const getColourFromString = (item: string): string => {
  const tagHsl: number[] = colorHash.hsl(item)
  const tagColor = `hsla(${tagHsl[0]},${tagHsl[1] * 100}%,${
    tagHsl[2] * 100
  }%,0.5)`
  return tagColor
}
