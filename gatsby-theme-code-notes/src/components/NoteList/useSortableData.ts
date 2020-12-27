import useLocalStorage from '@hookit/local-storage'
import { useMemo } from 'react'

export const useSortableData = (items, config = null) => {
  const [sortConfig, setSortConfig] = useLocalStorage(
    'codeNotesSortConfig',
    config
  )

  const sortedItems = useMemo(() => {
    let sortableItems = [...items]
    if (sortConfig !== null) {
      sortableItems.sort((a, b) => {
        if (
          a.node.frontmatter[sortConfig.key] <
          b.node.frontmatter[sortConfig.key]
        ) {
          return sortConfig.direction === 'ascending' ? -1 : 1
        }
        if (
          a.node.frontmatter[sortConfig.key] >
          b.node.frontmatter[sortConfig.key]
        ) {
          return sortConfig.direction === 'ascending' ? 1 : -1
        }
        return 0
      })
    }
    return sortableItems
  }, [items, sortConfig])

  const requestSort = (key) => {
    let direction = 'ascending'
    if (
      sortConfig &&
      sortConfig.key === key &&
      sortConfig.direction === 'ascending'
    ) {
      direction = 'descending'
    }
    setSortConfig({ key, direction })
  }

  return { items: sortedItems, requestSort, sortConfig }
}
