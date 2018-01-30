require('dotenv').config();

const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const express = require('express');
const compression = require('compression');
const historyApiFallback = require('connect-history-api-fallback');
const jsonServer = require('json-server');
const config = require('./config/application');
const webpackDevConfig = require('./config/webpack_dev.config');
const webpackBuildConfig = require('./config/webpack_build.config');

const port = config.port;
const server = express();

if (config.env === 'development') {
  const apiPath = require('./config/env/development').apiPath;
  const compiler = webpack(webpackDevConfig);
  const webpackOptions = {
    stats: {
      assets: true,
      chunks: false,
      modules: false,
      colors: true,
      performance: true,
      timings: true,
      version: true,
      warnings: true
    },
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
      ignored: /node_modules/
    },
    publicPath: webpackDevConfig.output.publicPath
  };
  const router = jsonServer.router('./db/db.json');

  compiler.apply(new webpack.ProgressPlugin());

  server.use(historyApiFallback());
  server.use(webpackDevMiddleware(compiler, webpackOptions));
  server.use(webpackHotMiddleware(compiler));
  server.use(jsonServer.defaults());
  server.use(apiPath, router);
  server.listen(port, 'localhost', () => {
    console.log(`Server listening on port ${port}`);
  });

  // Has overrided json-server render method to simulate server side error response.
  // Error will be returned if you try to sign in with error@example.com email
  router.render = (
    {
      url,
      method,
      body: { email }
    },
    res
  ) => {
    if (
      url === '/session' &&
      method === 'POST' &&
      email === 'error@example.com'
    ) {
      res.status(500).jsonp({ error: 'Server error has occured' });
    } else {
      res.jsonp(res.locals.data);
    }
  };
} else {
  webpack(webpackBuildConfig, (err, stats) => {
    if (err) return console.log(err);

    server.use(compression());
    server.use(historyApiFallback());
    server.use(express.static(config.distDir));
    server.listen(port);
  });
}
