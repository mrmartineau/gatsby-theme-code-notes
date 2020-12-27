import React, { Fragment } from 'react'
import { Button } from 'theme-ui'
import { BiSortDown, BiSortUp } from 'react-icons/bi'

const getClassNamesFor = (name, sortConfig) => {
  if (!sortConfig) {
    return
  }
  return sortConfig.key === name ? `active ${sortConfig.direction}` : undefined
}

export const SortButton = ({ requestSort, sortKey, sortConfig, children }) => (
  <Button
    variant="sort"
    type="button"
    onClick={() => requestSort(sortKey)}
    className={getClassNamesFor(sortKey, sortConfig)}
  >
    {children}
    {sortConfig.key === sortKey && (
      <Fragment>
        {sortConfig.direction === 'descending' ? (
          <BiSortDown
            sx={{
              color: 'inherit',
              pointerEvents: 'none',
            }}
            size="15px"
          />
        ) : (
          <BiSortUp
            sx={{
              color: 'inherit',
              pointerEvents: 'none',
            }}
            size="15px"
          />
        )}
      </Fragment>
    )}
  </Button>
)
