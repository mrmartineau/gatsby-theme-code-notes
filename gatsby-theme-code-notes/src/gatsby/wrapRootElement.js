const React = require('react')
const { SearchProvider } = require('../components/Search')

exports.wrapRootElement = ({ element }) => {
  return <SearchProvider>{element}</SearchProvider>
}
