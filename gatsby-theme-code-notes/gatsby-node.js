const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

exports.onPreBootstrap = ({ store, reporter }, options) => {
  const { program } = store.getState()
  const contentPath = options.contentPath || '/'
  const dirs = [path.join(program.directory, `src/${contentPath}`)]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}

// exports.createPages = ({ graphql, actions }, options) => {
//   const { createPage } = actions
//   const basePath = options.basePath || '/'

//   return graphql(`
//     {
//       allContentfulPageMarketing {
//         totalCount
//         edges {
//           node {
//             name
//             node_locale
//             id
//             contentful_id
//             seo {
//               slug
//             }
//           }
//         }
//       }
//     }
//   `)
//     .then(result => {
//       // Marketing Pages
//       result.data.allContentfulPageMarketing.edges.forEach(({ node }) => {
//         createPage({
//           path: `/${basePath}${node.seo.slug}`,
//           component: path.resolve('./src/pages/marketing.tsx'),
//           context: { id: node.contentful_id, locale: node.node_locale },
//         })
//       })
//     })
//     .catch(err => console.log(err))
// }
