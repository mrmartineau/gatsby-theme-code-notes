const slugify = require('@alexcarpenter/slugify')

module.exports = (title) => slugify(`/${title}`)
