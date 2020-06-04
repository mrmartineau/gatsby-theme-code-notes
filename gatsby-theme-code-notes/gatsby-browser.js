const React = require('react')
const { SearchProvider } = require('./src/components/Search')

exports.wrapRootElement = ({ element }) => {
  return <SearchProvider>{element}</SearchProvider>
}
