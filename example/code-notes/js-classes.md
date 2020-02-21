---
title: Classes
tags:
  - javascript
---

```js
class Parent {
  constructor(options) {
    this.title = options.title
    this.desc = options.desc
  }

  getMetadata() {
    return {
      title: this.title,
      desc: this.desc,
    }
  }
}

class Child extends Parent {
  constructor(parentOptions, childOptions) {
    super(parentOptions, childOptions)
    this.data = childOptions
  }

  getInfo() {
    return `${this.title} + ${this.desc} + ${JSON.stringify(this.data)}`
  }

  render() {}
}

const Bamber = new Child(
  {
    title: 'Bamber',
    desc: 'baby',
  },
  {
    foo: 'bar',
  }
)

console.log(JSON.stringify(Bamber.getMetadata()))
```
