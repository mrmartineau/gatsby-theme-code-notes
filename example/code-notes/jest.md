---
title: Jest
tags:
  - javascript
  - react
  - testing
---

## Basic test skeleton

```js
describe('Given a xxx', () => {
  describe('when it is rendered', () => {
    test('it should ', () => {
      // Arrange

      // Act

      // Assert
      expect(true).toBe(true)
    })
  })
})
```

## React Testing Library

```js
import React from 'react'
import { render, fireEvent } from '@testing-library/react'

import { Button } from './Button'

describe('Given a Button component', () => {
  describe('when it is rendered', () => {
    test('should have the text `This is a button`', () => {
      // Arrange
      const { getByText } = render(<Button>This is a button</Button>)

      // Act
      fireEvent.click(getByText('This is a button'))

      // Assert
      expect(getByText('This is a button')).toHaveTextContent(
        'This is a button'
      )
    })
  })
})
```

### Snapshot test

```js
import React from 'react'
import { render } from '@testing-library/react'

import { Button } from './Button'

describe('Given a Button', () => {
  describe('when it is rendered', () => {
    it('should match the snapshot', () => {
      const { container } = render(<Button />)

      expect(container.firstChild).toMatchSnapshot()
    })
  })
})

// with snapshot-diff
const { getByText, asFragment } = render(<TestComponent />)
const firstRender = asFragment()
fireEvent.click(getByText(/Click to increase/))
// This will snapshot only the difference between the first render, and the
// state of the DOM after the click event.
// See https://github.com/jest-community/snapshot-diff
expect(firstRender).toMatchDiffSnapshot(asFragment())
```
