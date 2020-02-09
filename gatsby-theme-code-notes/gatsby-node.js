const path = require('path')
const fs = require('fs')
const mkdirp = require('mkdirp')

exports.onPreBootstrap = ({ store, reporter }) => {
  const { program } = store.getState()
  const dirs = [path.join(program.directory, 'src/code-notes')]
  dirs.forEach(dir => {
    if (!fs.existsSync(dir)) {
      reporter.log(`creating the ${dir} directory`)
      mkdirp.sync(dir)
    }
  })
}
