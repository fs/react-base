import gulp from 'gulp';
import gutil from 'gulp-util';
import prism from 'connect-prism';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../config/build';

gulp.task('webpack', (callback) => {
  webpack(config, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);
    callback();
  });
});

gulp.task('webpack-dev-server', (callback) => {
  const compiler = webpack(config);

  // prism.create({
  //   name: 'serve',
  //   mode: 'mock',
  //   context: '/api',
  //   host: 'localhost',
  //   port: 8001,
  //   delay: 0,
  //   rewrite: {},
  //   mockFilenameGenerator: (config, req) => {
  //     return `${req._parsedUrl.pathname.replace(/^\//, '')}_${req.method}.json`;
  //   }
  // });

  const server = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
      progress: true
    }
  });

  server.listen(8000, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
  });
});
