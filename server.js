require('dotenv').config();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const compression = require('compression');
const historyApiFallback = require('connect-history-api-fallback');
const jsonServer = require('./json-server');
const webpackConfig = require('./webpack.config');

const port = process.env.PORT || 8000;
const server = express();

if (process.env.NODE_ENV !== 'production') {
  const compiler = webpack(webpackConfig);
  const webpackOptions = {
    stats: {
      assets: true,
      chunks: false,
      modules: false,
      colors: true,
      performance: true,
      timings: true,
      version: true,
      warnings: true,
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
      ignored: /node_modules/,
    },
    publicPath: webpackConfig.output.publicPath,
  };

  compiler.apply(new webpack.ProgressPlugin());
  server.use(historyApiFallback());
  server.use(webpackDevMiddleware(compiler, webpackOptions));
  server.use(webpackHotMiddleware(compiler));
  server.listen(port, 'localhost', () => {
    console.log(`Server listening on port ${port}`);
  });
  jsonServer.initialize(server);
} else {
  webpack(webpackConfig, (err) => {
    if (err) {
      console.log(err);
      return;
    }

    server.use(compression());
    server.use(historyApiFallback());
    server.use(express.static(webpackConfig.output.path));
    server.listen(port);
  });
}
