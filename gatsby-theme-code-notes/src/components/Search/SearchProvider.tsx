import React, { createContext, useState } from 'react'

interface SearchContextInterface {
  query: string
  setQuery: (value: string) => void
}

export const SearchContext = createContext<SearchContextInterface>(
  {} as SearchContextInterface
)

export const SearchProvider = ({ children }) => {
  const [query, setQuery] = useState<string>('')
  return (
    <SearchContext.Provider value={{ query, setQuery }}>
      {children}
    </SearchContext.Provider>
  )
}
