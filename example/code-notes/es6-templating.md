---
title: ES6 templating
tags:
  - javascript
---

```js
const dogs = [
  { name: 'Snickers', age: 2 },
  { name: 'Hugo', age: 8 },
  { name: 'Sunny', age: 1 },
]

const markup = `
  <ul class="dogs">
      ${dogs
        .map(
          dog =>
            `<li>${dog.name}
              is
              ${dog.age * 7}
              </li>`
        )
        .join('')}
    </ul>
`
```

## or

```js
const song = {
  name: 'Dying to live',
  artist: 'Tupac',
  featuring: 'Biggie Smalls',
}

const markup = `
    <div class="song">
        <p>
            ${song.name} - ${song.artist}
            ${song.featuring ? `(Featuring ${song.featuring})` : ''}
        </p>
    </div>
`
```
