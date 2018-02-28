const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const ExtractTextPlugin = require('extract-text-webpack-plugin');

const getEntry = () => {
  let entry = ['babel-polyfill'];

  if (process.env.NODE_ENV !== 'production') {
    entry = entry.concat('react-hot-loader/patch', 'webpack-hot-middleware/client');
  }

  return entry.concat('./index');
};

const getPlugins = () => {
  let plugins = [
    new HtmlWebpackPlugin({
      template: 'index.html',
    }),
    new ExtractTextPlugin('application.css'),
    new webpack.EnvironmentPlugin(['NODE_ENV']),
  ];

  if (process.env.NODE_ENV !== 'production') {
    plugins = plugins.concat([
      new webpack.NamedModulesPlugin(),
      new webpack.HotModuleReplacementPlugin(),
      new webpack.NoEmitOnErrorsPlugin(),
    ]);
  } else {
    plugins = plugins.concat([
      new webpack.optimize.UglifyJsPlugin(),
    ]);
  }
  return plugins;
};

module.exports = {
  context: path.resolve(__dirname, 'app'),
  resolve: {
    modules: [
      path.resolve(__dirname, 'app'),
      'node_modules',
    ],
    alias: {
      config: path.resolve(__dirname, 'app', 'config', 'env', process.env.NODE_ENV || 'development'),
    },
    extensions: ['.js', '.jsx', '.json'],
  },
  entry: getEntry(),
  output: {
    path: path.resolve(__dirname, 'dist'),
    publicPath: '/',
    filename: 'application.js',
  },
  devtool: process.env.NODE_ENV !== 'production' ? 'eval-source-map' : undefined,
  plugins: getPlugins(),
  module: {
    rules: [
      {
        test: /\.js(x)?$/,
        exclude: [/node_modules/],
        use: ['babel-loader'],
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
                importLoaders: 1,
              },
            },
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.css$/,
        include: [/app\/stylesheets\//],
        use: ExtractTextPlugin.extract({
          fallback: 'style-loader',
          use: [
            'css-loader',
            'postcss-loader',
          ],
        }),
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        use: ['file-loader'],
      },
    ],
  },
};
