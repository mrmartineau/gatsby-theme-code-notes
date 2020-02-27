const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const slugify = require('slugify')

const DEFAULT_BASE_PATH = '/'
// These are customizable theme options we only need to check once
let basePath
let contentPath

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { program } = store.getState()
  basePath = themeOptions.basePath || DEFAULT_BASE_PATH
  contentPath = themeOptions.contentPath || `content/notes`
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`Initializing ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions
  basePath = options.basePath || DEFAULT_BASE_PATH

  const mdxDocs = await graphql(
    `
      {
        allNotes: allMdx {
          edges {
            node {
              id
              frontmatter {
                title
                tags
              }
              parent {
                ... on File {
                  name
                }
              }
            }
          }

          tags: group(field: frontmatter___tags) {
            tag: fieldValue
            totalCount
          }
        }

        untagged: allMdx(filter: { frontmatter: { tags: { eq: null } } }) {
          edges {
            node {
              id
            }
          }
        }
      }
    `
  )

  if (mdxDocs.errors) {
    throw mdxDocs.errorsd
  }

  const { allNotes, untagged } = mdxDocs.data

  const globalTagsList = allNotes.tags
  const notesData = allNotes.edges
  const hasUntagged = !!untagged.edges.length
  console.log('TCL: hasUntagged', hasUntagged)
  console.log('TCL: untagged.edges.length', untagged.edges.length)

  // Create notes pages
  notesData.forEach((note, index) => {
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node
    const parentName = slugify(note.node.parent.name)
    const itemPath =
      basePath === DEFAULT_BASE_PATH ? parentName : `${basePath}${parentName}`
    createPage({
      path: itemPath,
      component: path.join(__dirname, './src/templates', 'Note.js'),
      context: {
        id: note.node.id,
        previous,
        next,
        hasUntagged,
        basePath,
      },
    })
  })

  // Create the notes landing page
  createPage({
    path: basePath,
    component: path.join(__dirname, './src/templates', 'Notes.js'),
    context: {
      tags: globalTagsList,
      basePath,
      hasUntagged,
    },
  })

  // Create tag pages
  globalTagsList.forEach(item => {
    createPage({
      path: `${basePath}tag/${slugify(item.tag)}`,
      component: path.join(__dirname, './src/templates', 'TagPage.js'),
      context: {
        tag: item.tag,
        tags: globalTagsList,
        hasUntagged,
      },
    })
  })

  if (hasUntagged) {
    createPage({
      path: `${basePath}tag/untagged`,
      component: path.join(__dirname, './src/templates', 'UntaggedTagPage.js'),
      context: {
        tag: 'untagged',
      },
    })
  }
}

exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const modifiedTime = fs.statSync(node.fileAbsolutePath).mtime
    createNodeField({
      node,
      name: `dateModified`,
      value: modifiedTime,
    })
  }
}
