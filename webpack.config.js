const webpack = require('webpack')
const path = require('path')

const { CleanWebpackPlugin } = require('clean-webpack-plugin')
const CopyPlugin = require('copy-webpack-plugin')


const env = process.env.NODE_ENV || 'development'

const options = {
  mode: env,
  entry: {
    index: './src/index.entry.js',
    panel: './src/panel.entry.js',
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
  },
  module: {
    rules: [
      {
        test: /\.scss$/,
        use: [
          'css-loader',
          'sass-loader',
        ]
      },
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader',
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(),
    new CopyPlugin([
      { from: './src/images/**/*', to: 'images', flatten: true },
      { from: './src/manifest.json', flatten: true },
      { from: './src/html/*.html', flatten: true },
    ]),
  ],
}

if (env === 'development') {
  options.devtool = 'source-map'
}

module.exports = options
