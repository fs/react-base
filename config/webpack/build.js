import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import config from '../gulp';
import postcssConfig from '../postcss/config';

export default {
  resolve: {
    root: [
      path.resolve(config.appDir)
    ],
    alias: {
      config: path.resolve(config.configDir, 'app', config.env)
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
    new webpack.optimize.UglifyJsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]$/,
        exclude: [/node_modules/],
        loader: 'babel'
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
  },
  postcss: postcssConfig
};
