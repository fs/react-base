const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./application');
// const postcssConfig = require('./postcss');

module.exports = {
  resolve: {
    root: [
      path.resolve(config.appDir)
    ],
    alias: {
      config: path.resolve(config.configDir, 'env', config.env)
    },
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: path.resolve(config.appDir, 'application.jsx'),
  output: {
    path: path.resolve(config.distDir),
    publicPath: '/',
    filename: 'application.js'
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.appDir, 'index.html')
    }),
    new ExtractTextPlugin('application.css'),
    new webpack.optimize.UglifyJsPlugin(),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': JSON.stringify(config.env)
      }
    })
  ],
  module: {
    loaders: [
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        loader: 'babel'
      },
      {
        test: /\.json$/,
        loader: 'json'
      },
      {
        test: /\.css$/,
        include: [/app\/stylesheets\//],
        loader: ExtractTextPlugin.extract('style!css!postcss')
      },
      {
        test: /\.css$/,
        exclude: [/app\/stylesheets\//],
        loader: ExtractTextPlugin.extract('style!css?modules&importLoaders=1!postcss')
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        loader: 'file'
      }
    ]
  }
};
