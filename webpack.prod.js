const { resolve } = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const ExtractTextPlugin = require('extract-text-webpack-plugin')
const CleanWebpackPlugin = require('clean-webpack-plugin')
const webpack = require('webpack')
const OfflinePlugin = require('offline-plugin')

module.exports = {
  context: resolve(__dirname, 'src'),
  entry: {
    app: './index.js',
    vendor: ['react', 'react-dom', 'react-router']
  },
  output: {
    path: resolve(__dirname, 'dist'),
    filename: '[name].[chunkhash:6].js',
    chunkFilename: '[name].chunk.[chunkhash:6].js',
    publicPath: '/'
  },
  module: {
    rules: [{
      enforce: 'pre',
      test: /\.js$/,
      loader: 'eslint-loader',
      exclude: /node_modules/
    }, {
      test: /\.js$/,
      loader: 'babel-loader',
      exclude: /node_modules/
    }, {
      test: /\.css$/,
      use: ExtractTextPlugin.extract(['css-loader?modules,localIdentName="[name]-[local]-[hash:base64:6]",camelCase'])
    }]
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      filename: '200.html',
      template: './index.html'
    }),
    new ExtractTextPlugin({
      filename: 'styles.[chunkhash:6].css',
      allChunks: true
    }),
    new CleanWebpackPlugin(['dist']),
    new webpack.optimize.CommonsChunkPlugin({
      names: ['vendor', 'manifest']  // Specify the common bundle's name
    }),
    new OfflinePlugin({
      publicPath: '/',
      externals: ['/'],
      ServiceWorker: {
        navigateFallbackURL: '/'
      }
    })
  ],
  performance: {
    hints: 'error'
  }
}
