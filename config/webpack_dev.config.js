const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
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
  entry: [
    'babel-polyfill',
    'react-hot-loader/patch',
    'webpack-hot-middleware/client',
    path.resolve(config.appDir, 'index.jsx')
  ],
  output: {
    path: '/',
    publicPath: '/',
    filename: 'application.js'
  },
  devtool: 'eval-source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve(config.appDir, 'index.html')
    }),
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoEmitOnErrorsPlugin(),
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
        use: [
          'style-loader',
          {
            loader: 'css-loader',
            query: {
              modules: true,
              importLoaders: 1
            }
          },
          'postcss-loader'
        ]
      },
      {
        test: /\.css$/,
        include: [/app\/stylesheets\//],
        use: [
          'style-loader',
          'css-loader',
          'postcss-loader'
        ]
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        use: ['url-loader']
      }
    ]
  }
};
