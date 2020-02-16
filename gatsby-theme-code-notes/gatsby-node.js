const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { createFilePath } = require(`gatsby-source-filesystem`)
const { urlResolve, createContentDigest } = require(`gatsby-core-utils`)

// These are customizable theme options we only need to check once
let basePath
let contentPath

// These templates are simply data-fetching wrappers that import components
const NoteTemplate = require.resolve(`./src/templates/Note`)
const NotesTemplate = require.resolve(`./src/templates/Notes`)

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { program } = store.getState()
  basePath = themeOptions.basePath || `/`
  contentPath = themeOptions.contentPath || `content/notes`
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`Initializing ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions

  const toNotesPath = node => {
    const { dir } = path.parse(node.parent.relativePath)
    return urlResolve(basePath, dir, node.parent.name)
  }

  const result = await graphql(`
    {
      site {
        siteMetadata {
          title
        }
      }
      mdxPages: allMdx {
        edges {
          node {
            id
            parent {
              ... on File {
                name
                base
                relativePath
                sourceInstanceName
              }
            }
          }
        }
      }
    }
  `)

  if (result.errors) {
    console.log(result.errors)
    throw new Error(`Could not query notes`, result.errors)
  }

  const { mdxPages, site } = result.data
  const siteTitle = site.siteMetadata.title
  const notes = mdxPages.edges.filter(
    ({ node }) => node.parent.sourceInstanceName === contentPath
  )

  // Create notes pages
  notes.forEach(({ node }) => {
    createPage({
      path: toNotesPath(node),
      context: {
        ...node,
        title: node.parent.name,
      },
      component: NoteTemplate,
    })
  })

  const notesUrls = notes.map(({ node }) => toNotesPath(node))

  const groupedNotes = notes.reduce((acc, { node }) => {
    const { dir } = path.parse(node.parent.relativePath)

    if (!dir) {
      return acc
    }

    acc[dir] = acc[dir] || []
    acc[dir].push({
      pagePath: urlResolve(basePath, dir),
      url: toNotesPath(node),
      ...node,
    })

    return acc
  }, {})

  Object.entries(groupedNotes).map(([key, value]) => {
    const breadcrumbs = key.split(path.sep).reduce(
      (acc, dir) => [
        ...acc,
        {
          name: dir,
          url: urlResolve(basePath, dir),
        },
      ],
      []
    )

    createPage({
      path: urlResolve(basePath, key),
      context: {
        breadcrumbs,
        siteTitle,
        urls: value.map(v => v.url),
      },
      component: NotesTemplate,
    })
  })

  createPage({
    path: basePath,
    context: {
      urls: notesUrls,
      groupedNotes,
      siteTitle,
    },
    component: NotesTemplate,
  })
}

/* exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions
  const basePath = options.basePath || '/'

  const result = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              fields {
                slug
              }
              frontmatter {
                title
                tags
                date
              }
            }
          }
        }
      }
    `
  )

  if (result.errors) {
    throw result.errors
  }

  // Create the notes landing page
  createPage({
    path: basePath,
    component: path.join(__dirname, './src/templates', 'Notes.js'),
  })

  // Create notes posts pages
  const notesData = result.data.allMdx.edges
  notesData.forEach((post, index) => {
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node
    createPage({
      path:
        basePath === '/'
          ? post.node.fields.slug
          : `${basePath}${post.node.fields.slug}`,
      component: path.join(__dirname, './src/templates', 'Note.js'),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
} */

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

/* exports.sourceNodes = (
  { actions: { createTypes, createNode }, schema },
  { basePath = `/`, homeText = `~`, breadcrumbSeparator = `/` }
) => {
  // Create the Garden type to solidify the field data types
  createTypes(`type CodeNotesConfig implements Node {
basePath: String!
home: String
breadcrumbSeparator: String
}`)

  // create garden data from plugin config
  const codeNotesConfig = {
    breadcrumbSeparator,
    basePath,
    homeText,
  }

  createNode({
    ...codeNotesConfig,
    id: `gatsby-theme-code-notes-config`,
    parent: null,
    children: [],
    internal: {
      type: `CodeNotesConfig`,
      contentDigest: createContentDigest(codeNotesConfig),
      content: JSON.stringify(codeNotesConfig),
      description: `Notes Config`,
    },
  })
} */
