const path = require('path')
const TSDocgenPlugin = require('react-docgen-typescript-webpack-plugin')

module.exports = (baseConfig, env, config) => {
  config.module.rules.push({
    test: /\.(ts|tsx)$/,
    loader: require.resolve('awesome-typescript-loader'),
  })
  config.module.rules.push({
    test: /\.(css|scss|sass)$/,
    loaders: ['style-loader', 'css-loader', 'sass-loader'],
    include: path.resolve(__dirname, '../')
  })
  config.plugins.push(new TSDocgenPlugin())
  config.resolve.extensions.push('.ts', '.tsx')
  return config
}
