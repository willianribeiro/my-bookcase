'use strict'

const common = require('./common')
const webpackConfig = require('@kadira/storybook/dist/server/config/defaults/webpack.config.js')

module.exports = (config, env) => {
  const newConfig = webpackConfig(config, env)

  const preloaders = Object.assign({}, common.standardPreLoader, {
    use: undefined,
    loader: common.standardPreLoader.use.loader
  })

  const loaders = Object.assign({}, common.scssLoader, {
    use: undefined,
    loaders: common.scssLoader.use
  })

  newConfig.module.loaders = (newConfig.module.loaders || []).concat(loaders)
  newConfig.module.preLoaders = (newConfig.module.preLoaders || []).concat(preloaders)
  newConfig.resolve = common.resolve

  return newConfig
}
