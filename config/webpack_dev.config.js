const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const config = require('./application');
const postcssConfig = require('./postcss');

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
  entry: [
    'webpack-hot-middleware/client',
    path.resolve(config.appDir, 'application.jsx')
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'application.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.appDir, 'index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]$/,
        exclude: [/node_modules/],
        loader: 'react-hot!babel'
      },
      {
        test: /\.css$/,
        include: [/app\/stylesheets\//],
        loader: 'style!css!postcss'
      },
      {
        test: /\.css$/,
        exclude: [/app\/stylesheets\//],
        loader: 'style!css?modules&importLoaders=1!postcss'
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        loader: 'url'
      }
    ]
  },
  postcss: postcssConfig
};
