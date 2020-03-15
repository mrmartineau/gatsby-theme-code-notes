<div align="center">
  <img src="https://brand.zander.wtf/Avatar.png" width="140">
  <h1>
    Gatsby Theme Code Notes
  </h1>
  <h3>
    A Gatsby theme for publishing code-related Markdown or MDX notes to your website.
  </h3>
</div>

---

## Theme features

- Notes can be written using Markdown (`.md`) or MDX (`.mdx`)
- Each note can have zero, one or many tags

---

#### 🚧 This is in beta right now. It works, but it is by no means complete. You can see an example of the theme at any time at [notes.zander.wtf](https://notes.zander.wtf)

## Installation

1. Install the theme

```shell
mkdir my-site
cd my-site
yarn init
# install gatsby-theme-code-notes and it's dependencies
yarn add gatsby react react-dom gatsby-theme-code-notes
# or
npm install gatsby react react-dom gatsby-theme-code-notes
```

2. Add the configuration to your `gatsby-config.js` file

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        basePath: '/',
        contentPath: 'code-notes',
        gitRepoContentPath:
          'https://github.com/mrmartineau/gatsby-theme-code-notes/tree/master/example/code-notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        logo: 'https://brand.zander.wtf/Avatar.png',
      },
    },
  ],
}
```

3. Add notes to your site by creating `md` or `mdx` files inside `/content/notes`.
   > Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

### Options

| Key                        | Default value     | Description                                                                                                                                                                    |
| -------------------------- | ----------------- | ------------------------------------------------------------------------------------------------------------------------------------------------------------------------------ |
| `basePath`                 | `/`               | Root url for all notes pages                                                                                                                                                   |
| `contentPath`              | `/content/notes`  | Location of notes content                                                                                                                                                      |
| `logo`                     | '' (empty string) | Path to your site's logo. Will be used as the `src` attribute in an image                                                                                                      |
| `showDescriptionInSidebar` | `true`            | Show `config.site.description` in the sidebar                                                                                                                                  |
| `gitRepoContentPath`       | `true`            | Set the location for your notes if they're hosted online, e.g. your git repo. This will show a "Edit this page" link underneath each note                                      |
| `showThemeInfo`            | `true`            | Show info about this Gatsby theme                                                                                                                                              |
| `mdxOtherwiseConfigured`   | `true`            | Configure `gatsby-plugin-mdx`. Note that most sites will not need to use this flag. If your site has already configured `gatsby-plugin-mdx` separately, set this flag `false`. |

---

## License

[MIT](https://choosealicense.com/licenses/mit/) © [Zander Martineau](https://zander.wtf)

> Made by [Zander ⚡](https://github.com/mrmartineau/)
