const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const { createFilePath } = require(`gatsby-source-filesystem`)

exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState()
  const contentPath = options.contentPath || '/'
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

  const note = path.join(__dirname, './src/templates', 'Note.js')
  const notes = path.join(__dirname, './src/templates', 'Notes.js')
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

  // Create notes posts pages.
  const notesData = result.data.allMdx.edges

  createPage({
    path: options.basePath,
    component: notes,
  })

  notesData.forEach((post, index) => {
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node

    createPage({
      path: post.node.fields.slug,
      component: note,
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

// exports.createPages = ({ graphql, actions }, options) => {
//   const { createPage } = actions
//   const basePath = options.basePath || '/'
//   console.log('TCL: exports.createPages -> basePath', basePath)

//   return graphql(`
//     {
//       allMdx {
//         edges {
//           node {
//             id
//           }
//         }
//       }
//     }
//   `)
//     .then(result => {
//       console.log('TCL: exports.createPages -> result', result)
//       // Marketing Pages
//       result.data.mdx.edges.forEach(({ node }) => {
//         createPage({
//           path: `/${basePath}${node.frontmatter.path}`,
//           component: path.resolve('./src/pages/Note.js'),
//           context: { id: node.id },
//         })
//       })
//     })
//     .catch(err => console.log(err))
// }
