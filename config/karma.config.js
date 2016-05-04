var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: '../coverage/'
    },
    basePath: path.resolve('app'),
    files: [
      '**/tests/*.test.js'
    ],
    frameworks: [
      'jasmine'
    ],
    preprocessors: {
      '**/tests/*.test.js': ['webpack']
    },
    reporters: ['dots', 'coverage'],
    webpack: {
      resolve: {
        root: [
          path.resolve('app')
        ],
        alias: {
          config: path.resolve('config', 'app', 'test')
        },
        extensions: ['', '.js', '.jsx']
      },
      cache: true,
      module: {
        preLoaders: [
          {
            test: /\.jsx$/,
            loader: 'babel'
          },
          {
            test: /.test\.js$/,
            exclude: /(node_modules)\//,
            loader: 'babel'
          }
        ]
      }
    },
    webpackMiddleware: {
      quiet: false,
      noInfo: false,
      stats: {
        assets: false,
        colors: true,
        version: false,
        hash: false,
        timings: false,
        chunks: false,
        chunkModules: false
      }
    }
  });
};
