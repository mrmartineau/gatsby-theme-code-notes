const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState()
  const contentPath = options.contentPath || 'notes'
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

exports.createPages = async ({ graphql, actions }, options) => {
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
      path: post.node.fields.slug,
      component: path.join(__dirname, './src/templates', 'Note.js'),
      context: {
        slug: post.node.fields.slug,
        previous,
        next,
      },
    })
  })
}

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
