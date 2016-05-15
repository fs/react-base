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
          exclude: [/app\/stylesheets\//],
          loader: 'style!css?modules&importLoaders=1!postcss'
        },
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
};
