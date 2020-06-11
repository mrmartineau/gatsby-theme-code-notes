import React from 'react'
import { Link, Box } from 'theme-ui'

const ContentsList = ({ items }) => {
  return (
    <ul>
      {items.map((item) => {
        return <ContentsItem key={`${item.url}-item`} item={item} />
      })}
    </ul>
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
    <Box as="details" sx={{ my: 4 }}>
      <summary>Table of contents</summary>
      <ContentsList items={toc.items} key="toc-list" />
    </Box>
  )
}
