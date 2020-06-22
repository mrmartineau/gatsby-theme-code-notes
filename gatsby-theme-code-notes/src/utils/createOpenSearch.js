module.exports = (options) => {
  const {
    siteUrl = '',
    siteShortName = 'Code Notes Search',
    siteDescription = null,
    siteTags = null,
    siteContact = null,
  } = options

  let data = `<?xml version="1.0" encoding="UTF-8"?>
  <OpenSearchDescription xmlns="http://a9.com/-/spec/opensearch/1.1/">
  <ShortName>${siteShortName}</ShortName>
    <Url type="text/html" template="${siteUrl}?search={searchTerms}"/>
`

  if (siteDescription !== null) {
    data += `    <Description>${siteDescription}</Description>
`
  }
  if (siteTags !== null) {
    data += `    <Tags>${siteTags}</Tags>
`
  }
  if (siteContact !== null) {
    data += `    <Contact>${siteContact}</Contact>
`
  }

  data += `</OpenSearchDescription>`

  return data
}
