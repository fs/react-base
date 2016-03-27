import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import WebpackDevServer from 'webpack-dev-server';
import config from '../../config/gulp';
import webpackConfig from '../../config/webpack/server';

gulp.task('webpack-dev-server', (callback) => {
  const port = process.env.PORT;
  const compiler = webpack(webpackConfig);
  const server = new WebpackDevServer(compiler, {
    historyApiFallback: true,
    hot: true,
    stats: {
      colors: true,
      progress: true
    },
    proxy: {
      [`${config.api.path}/*`]: {
        target: config.api.target,
        rewrite(req) {
          const re = new RegExp(config.api.path, 'g');
          req.url = req.url.replace(re, '');
        }
      }
    }
  });

  server.listen(port, 'localhost', (err) => {
    if (err) throw new gutil.PluginError('webpack-dev-server', err);
  });
});
