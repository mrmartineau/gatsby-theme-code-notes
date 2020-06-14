const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')
const slugify = require('@alexcarpenter/slugify')
const { createFilePath } = require(`gatsby-source-filesystem`)

const DEFAULT_BASE_PATH = '/'
// These are customizable theme options we only need to check once
let basePath
let contentPath

exports.onPreBootstrap = ({ store, reporter }, themeOptions) => {
  const { program } = store.getState()
  basePath = themeOptions.basePath || DEFAULT_BASE_PATH
  contentPath = themeOptions.contentPath || `content/notes`
  const dirs = [path.join(program.directory, contentPath)]
  dirs.forEach((dir) => {
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
              fields {
                slug
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
    throw mdxDocs.errors
  }

  const { allNotes, untagged } = mdxDocs.data

  const globalTagsList = allNotes.tags
  const notesData = allNotes.edges
  const hasUntagged = !!untagged.edges.length
  const slugifiedTags = globalTagsList.map((item) => {
    return {
      ...item,
      slug: slugify(item.tag),
    }
  })

  // Create notes pages
  notesData.forEach((note, index) => {
    const previous =
      index === notesData.length - 1 ? null : notesData[index + 1].node
    const next = index === 0 ? null : notesData[index - 1].node
    const slug = note.node.fields.slug
    const itemPath =
      basePath === DEFAULT_BASE_PATH ? slug : `${basePath}${slug}`
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
      tags: slugifiedTags,
      basePath,
      hasUntagged,
    },
  })

  // Create tag pages
  slugifiedTags.forEach((item, index, list) => {
    createPage({
      path: `${basePath}tag/${item.slug}`,
      component: path.join(__dirname, './src/templates', 'TagPage.js'),
      context: {
        tag: item.tag,
        tags: list,
        hasUntagged,
        basePath,
      },
    })
  })

  if (hasUntagged) {
    createPage({
      path: `${basePath}tag/untagged`,
      component: path.join(__dirname, './src/templates', 'UntaggedTagPage.js'),
      context: {
        tag: 'untagged',
        hasUntagged,
        basePath,
      },
    })
  }
}

exports.onCreateNode = ({ node, actions, getNode }) => {
  const { createNodeField } = actions

  if (node.internal.type === `Mdx`) {
    const modifiedTime = fs.statSync(node.fileAbsolutePath).mtime
    createNodeField({
      node,
      name: `dateModified`,
      value: modifiedTime,
    })

    const value = createFilePath({ node, getNode })
    createNodeField({
      name: `slug`,
      node,
      value,
    })
  }
}

exports.createSchemaCustomization = ({ actions }) => {
  const { createTypes } = actions
  const typeDefs = `
    type SiteSiteMetadata {
      title: String!
      description: String!
      siteUrl: String!
      gitRepoContentPath: String!
      showThemeInfo: Boolean!
      showDescriptionInSidebar: Boolean!
      logo: String!
      author: String!
    }
    type MdxFrontmatter {
      title: String!
      tags: [String]
      emoji: String
      link: String
    }
  `
  createTypes(typeDefs)
}
