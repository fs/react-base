const webpack = require('webpack');
const webpackDevMiddleware = require('webpack-dev-middleware');
const webpackHotMiddleware = require('webpack-hot-middleware');
const Dashboard = require('webpack-dashboard');
const DashboardPlugin = require('webpack-dashboard/plugin');
const express = require('express');
const compression = require('compression');
const historyApiFallback = require('connect-history-api-fallback');
const jsonServer = require('json-server');
const config = require('./config/application');
const webpackDevConfig = require('./config/webpack_dev.config');
const webpackBuildConfig = require('./config/webpack_build.config');

const port = config.port;
const server = express();

if (config.development) {
  const compiler = webpack(webpackDevConfig);
  const dashboard = new Dashboard();
  const dashboardPlugin = new DashboardPlugin(dashboard.setData);

  compiler.apply(dashboardPlugin);

  server.use(historyApiFallback());
  server.use(webpackDevMiddleware(compiler, {
    quiet: true,
    watchOptions: {
      aggregateTimeout: 300,
      poll: true,
      ignored: /node_modules/
    },
    publicPath: webpackDevConfig.output.publicPath
  }));
  server.use(webpackHotMiddleware(compiler));
  server.use(jsonServer.defaults());
  server.use(config.apiPath, jsonServer.router('./db/db.json'));
  server.listen(port, 'localhost', () => {
    console.log(`Server listening on port ${port}`);
  });
} else {
  webpack(webpackBuildConfig, (err, stats) => {
    if (err) return console.log(err);

    server.use(compression());
    server.use(historyApiFallback());
    server.use(express.static(config.distDir));
    server.listen(port);
  });
}
