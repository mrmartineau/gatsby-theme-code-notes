import React, { useState, Fragment, useContext } from 'react'
import { useStaticQuery, graphql } from 'gatsby'
import { useFlexSearch } from 'react-use-flexsearch'
import { Heading, Box } from 'theme-ui'
import { NoteListItem } from '../NoteListItem'
import { SearchContext } from './SearchProvider'

export const SearchResults = () => {
  const { query, setQuery } = useContext(SearchContext)
  const { localSearchNotes } = useStaticQuery(graphql`
    query {
      localSearchNotes {
        index
        store
      }
    }
  `)
  console.log(
    'SearchResults -> localSearchNotes.index',
    JSON.stringify(localSearchNotes.index)
  )

  const results = useFlexSearch(
    query,
    localSearchNotes.index,
    JSON.parse(localSearchNotes.store)
  )

  return (
    <Box>
      {/* <Heading as="h1" variant="noteTitle">
        Search results
      </Heading> */}

      {results.length > 0 ? (
        results.map((result) => {
          return (
            <NoteListItem
              title={result.title}
              tags={result.tags}
              name={result.path}
              key={result.id}
              emoji={result.emoji}
              dateModified="d"
              onClick={() => setQuery('')}
            />
          )
        })
      ) : (
        <Box>No search results</Box>
      )}
    </Box>
  )
}
