var path = require('path');

module.exports = function (config) {
  config.set({
    browsers: ['PhantomJS'],
    coverageReporter: {
      dir: '../coverage/'
    },
    files: [
      'tests.webpack.js'
    ],
    frameworks: [
      'jasmine'
    ],
    preprocessors: {
      'tests.webpack.js': ['webpack', 'sourcemap']
    },
    reporters: ['progress', 'coverage'],
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
      devtool: 'inline-source-map',
      module: {
        preLoaders: [
          {
            test: /\.jsx$/,
            loader: 'isparta-instrumenter-loader'
          },
          {
            test: /.test\.js$/,
            exclude: /(node_modules|bower_components)\//,
            loader: 'babel-loader'
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
