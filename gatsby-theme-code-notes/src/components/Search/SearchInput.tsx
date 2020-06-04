/** @jsx jsx */
import { useContext } from 'react'
import { jsx, Input, Box } from 'theme-ui'
import { SearchContext } from './SearchProvider'
import { GoSearch } from 'react-icons/go'

export const SearchInput = () => {
  const { query, setQuery } = useContext(SearchContext)

  return (
    <Box
      sx={{
        position: 'relative',
      }}
    >
      <GoSearch
        sx={{
          position: 'absolute',
          top: '50%',
          left: 2,
          transform: 'translateY(-50%)',
          color: 'input',
          pointerEvents: 'none',
        }}
      />
      <Input
        value={query}
        onChange={(event) => {
          console.log('Search -> event.target.value', event.target.value)
          setQuery(event.target.value)
        }}
        aria-label="Search"
        placeholder="Search notes"
      />
    </Box>
  )
}
