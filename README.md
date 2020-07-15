<div align="center">
  <img src="https://raw.githubusercontent.com/mrmartineau/gatsby-theme-code-notes/master/assets/opengraph.png" width="640">

  <p>
    <a href="https://github.com/MrMartineau/gatsby-theme-code-notes/blob/master/LICENSE">
      <img src="https://img.shields.io/badge/license-MIT-blue.svg" alt="gatsby-theme-code-notes is released under the MIT license." />
    </a>
    <a href="https://www.npmjs.org/package/gatsby-theme-code-notes">
      <img src="https://img.shields.io/npm/v/gatsby-theme-code-notes.svg" alt="Current npm package version." />
    </a>
    <a href="https://npmcharts.com/compare/gatsby-theme-code-notes?minimal=true">
      <img src="https://img.shields.io/npm/dm/gatsby-theme-code-notes.svg" alt="Downloads per month on npm." />
    </a>
    <a href="https://npmcharts.com/compare/gatsby-theme-code-notes?minimal=true">
      <img src="https://img.shields.io/npm/dt/gatsby-theme-code-notes.svg" alt="Total downloads on npm." />
    </a>
    <img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="PRs welcome!" />
    <a href="https://twitter.com/intent/follow?screen_name=MrMartineau">
      <img src="https://img.shields.io/twitter/follow/MrMartineau.svg?label=Follow%20@MrMartineau" alt="Follow @MrMartineau" />
    </a>
  </p>

  <p>
    <a href="#features">Features</a> •
    <a href="#Installation">Installation</a> •
    <a href="#usage">Usage</a> •
    <a href="https://code-notes-example.netlify.com/">Demo</a>
  </p>

<a href="https://www.producthunt.com/posts/code-notes-2?utm_source=badge-featured&utm_medium=badge&utm_souce=badge-code-notes-2" target="_blank" aria-label="View Code Notes on Product Hunt"><img src="https://api.producthunt.com/widgets/embed-image/v1/featured.svg?post_id=206754&theme=light" alt="Code Notes - A Gatsby theme for publishing code-related notes online | Product Hunt Embed" style="width: 250px; height: 54px;" width="250px" height="54px" /></a>

</div>

## Features

- Notes can:
  - be written using Markdown (`.md`) or [MDX](https://mdxjs.com/) (`.mdx`)
  - have zero, one or many tags. See an example [here](https://code-notes-example.netlify.app/syntax-highlighting)
  - have associated emojis 👏
  - be nested in subfolders so you can organise them how you like
  - sketchy annotations (highlights, strike-thoughs etc). Find out more [here](https://code-notes-example.netlify.app/annotations)
- Extra markdown features have also been added. Find out more [here](https://code-notes-example.netlify.app/markdown-features)
- Note search powered by the super-fast [Flexsearch](https://github.com/nextapps-de/flexsearch)

## Installation

```sh
mkdir my-site
cd my-site
yarn init

# install gatsby-theme-code-notes and it's dependencies
yarn add gatsby-theme-code-notes gatsby react react-dom

# or

npm install gatsby-theme-code-notes gatsby react react-dom
```

### Using the Gatsby starter

#### Step 1: Starter installation

Source code for the starter can be found at: https://github.com/MrMartineau/gatsby-starter-code-notes

##### With `gatsby-cli`:

```sh
gatsby new code-notes https://github.com/MrMartineau/gatsby-starter-code-notes
```

##### With `git clone`:

```sh
git clone git@github.com:MrMartineau/gatsby-starter-code-notes.git

cd code-notes

yarn
```

#### Step 2: Develop & Build

Once installed or cloned locally and all packages are installed you can begin developing your site.

```sh
# Run localhost
yarn dev

# Build your Gatsby site
yarn build
```

## Usage

### Theme Options

| Key                        | Default value                                             | Description                                                                                                                                                                                                                       |
| -------------------------- | --------------------------------------------------------- | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `basePath`                 | `/`                                                       | Root url for all notes pages                                                                                                                                                                                                      |
| `contentPath`              | `/content/notes`                                          | Location of notes content                                                                                                                                                                                                         |
| `logo`                     | `''` (empty string)                                       | Path to your site's logo. Will be used as the `src` attribute for an image                                                                                                                                                        |
| `showDescriptionInSidebar` | `true`                                                    | Show `config.site.description` in the sidebar                                                                                                                                                                                     |
| `gitRepoContentPath`       | `''`                                                      | Set the location for your notes if they're hosted online, e.g. your git repo. This will show a "Edit this page" link underneath each note                                                                                         |
| `showThemeInfo`            | `true`                                                    | Show info about this Gatsby theme                                                                                                                                                                                                 |
| `mdxOtherwiseConfigured`   | `true`                                                    | Configure `gatsby-plugin-mdx`. Note that most sites will not need to use this flag. If your site has already configured `gatsby-plugin-mdx` separately, set this flag `false`.                                                    |
| `flexSearchEngineOptions`  | `{ encode: 'icase', tokenize: 'forward', resolution: 9 }` | Configure FlexSearch's index method. The default value uses FlexSearch's `default` preset. Find out your other options [here](https://github.com/nextapps-de/flexsearch#presets).                                                 |
| `openSearch`               | `{ }`                                                     | Configure the `opensearch.xml` file contents. This file is generated during the build process. If you want to add opensearch support, ensure you set a `siteUrl` in the config. See [below](#example-usage) for more information. |

### Example usage

This example overrides some of the theme defaults and shows the various options for the opensearch config.

```js
// gatsby-config.js
module.exports = {
  plugins: [
    {
      resolve: `gatsby-theme-code-notes`,
      options: {
        basePath: '/',
        contentPath: '/content/notes',
        gitRepoContentPath:
          'https://github.com/mrmartineau/gatsby-theme-code-notes/tree/master/example/code-notes/',
        showDescriptionInSidebar: true,
        showThemeInfo: false,
        logo: 'https://brand.zander.wtf/Avatar.png',

        // Opensearch is used to enhance the search on your site.
        // If you want to add it, ensure you set a `siteUrl`
        openSearch: {
          siteUrl: 'https://code-notes-example.netlify.app', // required if you want opensearch
          siteShortName: 'Gatsby Theme Code Notes Example', // override the default value of 'Search`
          siteTags: 'front-end', // optional
          siteContact: 'https://twitter.com/MrMartineau', // optional
          siteDescription: 'A Gatsby theme for storing your code-related notes', // optional
        },
      },
    },
  ],
}
```

Add notes to your site by creating `md` or `mdx` files inside `/content/notes`.

> Note that if you've changed the default `contentPath` in the configuration, you'll want to add your markdown files in the directory specified by that path.

### Note frontmatter

Frontmatter information (written in YAML) can be used to add metadata and extra information for your notes

Only the `title` field is required, the rest are optional.

```yaml
---
title: Note metadata
emoji: 😃
tags:
  - metadata
  - info
link: https://zander.wtf
---

```

#### Link

The `link` item is used to display a link that is related to the note itself. It will appear below the title if.

#### Emoji

The `emoji` frontmatter item will add an emoji beside the title on listing views and above the title on individual note pages

#### Tags

The `tags` array frontmatter item allows you to add as many tags to a note as you'd like.

### Advanced usage

#### PWA

Turn your code notes into a PWA using [this extra config](https://github.com/mrmartineau/notes.zander.wtf/blob/master/gatsby-config.js#L20-L38). This requires `gatsby-plugin-manifest` and `gatsby-plugin-offline`.

```js
// gatsby-config.js
{
  resolve: `gatsby-plugin-manifest`,
  options: {
    name: `Zander's Code Notes`,
    short_name: `CodeNotes`,
    description: `Notes on code. My memory bank.`,
    start_url: `/`,
    background_color: `hsl(210, 38%, 95%)`,
    theme_color: `hsl(345, 100%, 69%)`,
    display: `standalone`,
    icon: `static/logo.png`,
  },
},
{
  resolve: `gatsby-plugin-offline`,
  options: {
    precachePages: [`/*`, `/tag/*`],
  },
},
```

---

## License

[MIT](https://choosealicense.com/licenses/mit/) © [Zander Martineau](https://zander.wtf)

> Made by Zander • [zander.wtf](https://zander.wtf) • [GitHub](https://github.com/mrmartineau/) • [Twitter](https://twitter.com/mrmartineau/)
