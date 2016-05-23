import path from 'path';

export default {
  browsers: ['PhantomJS'],
  singleRun: true,
  coverageReporter: {
    dir: '../coverage'
  },
  basePath: path.resolve('app'),
  files: [
    '**/tests/*.test.js'
  ],
  frameworks: [
    'jasmine',
    'es6-shim'
  ],
  preprocessors: {
    '**/tests/*.test.js': ['webpack']
  },
  reporters: ['dots', 'coverage'],
  webpackMiddleware: {
    quiet: true
  },
  webpack: {
    resolve: {
      root: [
        path.resolve('app')
      ],
      alias: {
        config: path.resolve('config', 'app', 'test')
      },
      extensions: ['', '.js', '.jsx', '.css']
    },
    cache: true,
    module: {
      preLoaders: [
        {
          test: /\.jsx?$/,
          exclude: [/node_modules/, /\.test\.js/],
          loader: 'isparta-instrumenter-loader'
        },
        {
          test: /\.test\.js$/,
          exclude: [/node_modules/],
          loader: 'babel'
        },
        {
          test: /\.css$/,
          loader: 'style!css?modules&importLoaders=1!postcss'
        }
      ]
    },
    externals: {
      'cheerio': 'window',
      'react/addons': true,
      'react/lib/ExecutionEnvironment': true,
      'react/lib/ReactContext': true
    }
  }
};
