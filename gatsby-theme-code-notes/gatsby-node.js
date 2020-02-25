const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

// These are customizable theme options we only need to check once
let basePath
let contentPath

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

exports.createPages = async ({ graphql, actions }, options) => {
  const { createPage } = actions
  basePath = options.basePath || '/'

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

        untaggedNotes: allMdx(filter: { frontmatter: { tags: { eq: null } } }) {
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
        }
      }
    `
  )

  if (mdxDocs.errors) {
    throw mdxDocs.errorsd
  }

  // console.log('TCL: exports.createPages -> tags', mdxDocs.data.allNotes.tags)
  // console.log(
  //   'TCL: exports.createPages -> untaggedNotes',
  //   mdxDocs.data.untaggedNotes
  // )

  const { untaggedNotes, allNotes } = mdxDocs.data

  const globalTagsList = allNotes.tags
  const notesData = allNotes.edges

  // Create notes pages
  notesData.forEach((note, index) => {
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node
    const itemPath =
      basePath === '/'
        ? note.node.parent.name
        : `${basePath}${note.node.parent.name}`
    createPage({
      path: itemPath,
      component: path.join(__dirname, './src/templates', 'Note.js'),
      context: {
        id: note.node.id,
        previous,
        next,
      },
    })
  })

  // Create the notes landing page
  createPage({
    path: basePath,
    component: path.join(__dirname, './src/templates', 'Notes.js'),
    context: {
      tags: globalTagsList,
      basePath: basePath,
    },
  })

  // Create tag pages
  globalTagsList.forEach(item => {
    createPage({
      path: `${basePath}tag/${item.tag}`,
      component: path.join(__dirname, './src/templates', 'TagPage.js'),
      context: {
        tag: item.tag,
        tags: globalTagsList,
      },
    })
  })

  createPage({
    path: `${basePath}tag/untagged`,
    component: path.join(__dirname, './src/templates', 'UntaggedTagPage.js'),
    context: {
      tag: 'untagged',
    },
  })
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
