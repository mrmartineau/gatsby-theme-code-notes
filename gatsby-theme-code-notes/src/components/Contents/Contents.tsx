import React from 'react'
import { Link, Box } from 'theme-ui'

const ContentsList = ({ items }) => {
  return (
    <Box as="ul" sx={{ listStyleType: 'none', pl: 3 }}>
      {items.map((item) => {
        return <ContentsItem key={`${item.url}-item`} item={item} />
      })}
    </Box>
  )
}

const ContentsItem = ({ item }) => (
  <li>
    <Link href={item.url}>{item.title}</Link>
    {item.items && item.items.length && (
      <ContentsList key={`${item.url}-list`} items={item.items} />
    )}
  </li>
)

export const Contents = ({ toc }) => {
  if (!toc.items) {
    return null
  }

  return (
    <Box as="details" sx={{ my: 4, fontSize: 1 }}>
      <Box as="summary" sx={{ textTransform: 'uppercase', fontSize: 0 }}>
        On this page
      </Box>
      <ContentsList items={toc.items} key="toc-list" />
    </Box>
  )
}
