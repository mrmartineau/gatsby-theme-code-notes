import React, { createContext, useState } from 'react'

interface SearchContextInterface {
  query: string
  setQuery: any
}

export const SearchContext = createContext<SearchContextInterface>({
  query: '',
  setQuery: () => {},
})

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState<string>('')
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
