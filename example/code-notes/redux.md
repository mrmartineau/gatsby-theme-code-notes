---
title: Redux
tags:
  - javascript
  - typescript
  - react
---

## Simple redux example

```js
import React from 'react'
import { connect } from 'react-redux'
import { doClearQuery } from './some/file/of/action/creators'

// We again use a simple, functional component.
const OurComponent = ({ query, results, clearQuery }) => (
  <div>
    query: {query}
    <button onClick={clearQuery}>Clear</button>
    <ul>
      {results.map(result => (
        <li>
          <img src={result.url} alt={result.title} />
          {result.title}
        </li>
      ))}
    </ul>
  </div>
)

// mapStateToProps
// For our select function we're returning an object using
// the implicit return and wrapping it in `()`
const select = appState => ({
  results: appState.results,
  query: appState.query,
})

// mapDispatchToProps
// We could also use object shorthand here to avoid
// building an object, as long as we're OK with the
// props being named the same thing
const actions = { clearQuery: doClearQuery }

// Now we'll pass both select and actions here
// and return our wrapped component.
export default connect(select, actions)(OurComponent)
```
