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

  const result = await graphql(
    `
      {
        allMdx {
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
                  base
                  relativePath
                }
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
    console.log('TCL: exports.createPages -> post', JSON.stringify(post))
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node
    createPage({
      path:
        basePath === '/'
          ? post.node.parent.name
          : `${basePath}${post.node.parent.name}`,
      component: path.join(__dirname, './src/templates', 'Note.js'),
      context: {
        id: post.node.id,
        previous,
        next,
      },
    })
  })
}
