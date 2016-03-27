import path from 'path';
import webpack from 'webpack';
import HtmlWebpackPlugin from 'html-webpack-plugin';
import postcssConfig from '../postcss/config';

export default {
  resolve: {
    root: [
      path.resolve('./app')
    ],
    extensions: ['', '.js', '.jsx', '.css']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8000',
    'webpack/hot/only-dev-server',
    './app/application.jsx'
  ],
  output: {
    path: path.resolve('dist'),
    filename: 'application.js'
  },
  devtool: 'source-map',
  plugins: [
    new HtmlWebpackPlugin({
      template: path.resolve('./app/index.html')
    }),
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      {
        test: /\.js[x]$/,
        loader: 'react-hot!babel',
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: 'style!css?importLoaders=1!postcss'
      },
      {
        test: /\.(jpg|png|ttf|eot|svg|woff2|woff)$/,
        loader: 'url?limit=100000!file'
      }
    ]
  },
  postcss: postcssConfig
};
