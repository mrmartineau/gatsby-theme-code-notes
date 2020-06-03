import React, { useContext } from 'react'
import { Input, Box } from 'theme-ui'
import { SearchContext } from './SearchProvider'

export const SearchInput = () => {
  const { query, setQuery } = useContext(SearchContext)

  return (
    <Box>
      <Input
        value={query}
        onChange={(event) => {
          console.log('Search -> event.target.value', event.target.value)
          setQuery(event.target.value)
        }}
        aria-label="Search"
      />
    </Box>
  )
}
