const path = require('path');
const config = require('./application');

module.exports = (karmaConfig) => {
  karmaConfig.set({
    browsers: ['PhantomJS'],
    singleRun: true,
    coverageReporter: {
      dir: '../coverage',
    },
    basePath: path.resolve(config.appDir),
    files: [
      '**/tests/*.test.js',
    ],
    frameworks: [
      'jasmine',
      'es6-shim',
    ],
    preprocessors: {
      '**/tests/*.test.js': ['webpack'],
    },
    reporters: ['dots', 'coverage'],
    webpack: {
      resolve: {
        root: [
          path.resolve(config.appDir),
        ],
        alias: {
          config: path.resolve(config.configDir, 'env', 'test'),
        },
        extensions: ['', '.js', '.jsx', '.css'],
      },
      cache: true,
      module: {
        preLoaders: [
          {
            test: /\.jsx?$/,
            exclude: [/node_modules/, /\.test\.js/],
            loader: 'isparta-instrumenter-loader',
          },
          {
            test: /\.test\.js$/,
            exclude: [/node_modules/],
            loader: 'babel',
          },
          {
            test: /\.css$/,
            loader: 'style!css?modules&importLoaders=1!postcss',
          },
        ],
      },
      externals: {
        cheerio: 'window',
        'react/addons': true,
        'react/lib/ExecutionEnvironment': true,
        'react/lib/ReactContext': true,
      },
    },
    webpackMiddleware: {
      quiet: true,
    },
  });
};
