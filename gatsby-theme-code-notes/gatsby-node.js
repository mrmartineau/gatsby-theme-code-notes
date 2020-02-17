const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { union, flattenDeep, compact } = require('lodash')
const { createFilePath } = require(`gatsby-source-filesystem`)

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

  const allMdxDocs = await graphql(
    `
      {
        allMdx {
          edges {
            node {
              id
              fields {
                slug
              }
              frontmatter {
                title
                tags
              }
              parent {
                ... on File {
                  name
                  ctime
                }
              }
            }
          }
        }
      }
    `
  )

  if (allMdxDocs.errors) {
    throw allMdxDocs.errors
  }

  // Create the notes landing page
  createPage({
    path: basePath,
    component: path.join(__dirname, './src/templates', 'Notes.js'),
  })

  const globalTagsList = []
  const notesData = allMdxDocs.data.allMdx.edges

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

    globalTagsList.push(note.node.frontmatter.tags)
  })

  // Create tag pages
  const allTags = compact(union(flattenDeep(globalTagsList)))
  allTags.forEach(item => {
    createPage({
      path: `${basePath}tag/${item}`,
      component: path.join(__dirname, './src/templates', 'TagPage.js'),
      context: {
        tag: item,
      },
    })
  })
}
