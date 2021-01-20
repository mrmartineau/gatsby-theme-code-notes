import React from 'react'
import { SearchProvider } from '../components/Search'

export const wrapRootElementComponent = ({ element }) => {
  return <SearchProvider>{element}</SearchProvider>
}
