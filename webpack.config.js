const path = require('path')
const { getIfUtils, removeEmpty } = require('webpack-config-utils')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


module.exports = (env = {}) => {
  const { ifProduction, ifNotProduction } = getIfUtils(env)

  return {
    mode: ifProduction('production', 'development'),
    entry: {
      index: './src/index.entry.js',
      panel: './src/panel.entry.js',
    },
    output: {
      path: path.join(__dirname, 'dist'),
      filename: '[name].js',
    },
    devtool: ifProduction('source-map', false),
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: [
            'css-loader',
            'sass-loader',
          ],
        },
        ifNotProduction({
          enforce: 'pre',
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'eslint-loader',
        }),
        {
          test: /\.js$/,
          exclude: /node_modules/,
          use: 'babel-loader',
        },
      ],
    },
    plugins: removeEmpty([
      ifProduction(new CleanWebpackPlugin()),
      new CopyPlugin([
        { from: './src/images/**/*', to: 'images', flatten: true },
        { from: './src/manifest.json', flatten: true },
        { from: './src/html/*.html', flatten: true },
      ]),
    ]),
  }
}
