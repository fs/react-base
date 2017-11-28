const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');
const config = require('./application');

module.exports = {
  resolve: {
    modules: [
      path.resolve(config.appDir),
      'node_modules'
    ],
    alias: {
      config: path.resolve(config.configDir, 'env', config.env)
    },
    extensions: ['.js', '.jsx', '.css']
  },
  entry: path.resolve(config.appDir, 'index.jsx'),
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
    new webpack.EnvironmentPlugin(['NODE_ENV'])
  ],
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader']
      },
      {
        test: /\.css$/,
        exclude: [/app\/stylesheets\//],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            {
              loader: 'css-loader',
              query: {
                modules: true,
                importLoaders: 1
              }
            },
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.css$/,
        include: [/app\/stylesheets\//],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader'
          ]
        })
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        use: ['file-loader']
      }
    ]
  }
};
