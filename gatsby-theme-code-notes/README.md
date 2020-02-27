<div align="center">
  <img src="https://brand.zander.wtf/Avatar.png" width="140">
  <h1>
    Gatsby Theme Code Notes
  </h1>

> A Gatsby theme for publishing code-related notes to your website.

</div>

## Installation

1. Install the theme

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-minimal and it's dependencies
yarn add gatsby react react-dom gatsby-theme-minimal
# or
npm install gatsby-theme-code-notes
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        // basePath defaults to `/`
        contentPath: 'code-notes',
        basePath: '/',
      },
    },
  ],
}
```

3. Add notes to your site by creating `md` or `mdx` files inside `/content/notes`.
   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

### Options

| Key           | Default value    | Description                                                                                                                                                                    |
| ------------- | ---------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `basePath`    | `/`              | Root url for all notes pages                                                                                                                                                   |
| `contentPath` | `/content/notes` | Location of notes content                                                                                                                                                      |
| `mdx`         | `true`           | Configure `gatsby-plugin-mdx`. Note that most sites will not need to use this flag. If your site has already configured `gatsby-plugin-mdx` separately, set this flag `false`. |

---

## License

[MIT](https://choosealicense.com/licenses/mit/) © [Zander Martineau](https://zander.wtf)

> Made by [Zander ⚡](https://github.com/mrmartineau/)
