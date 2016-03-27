import gulp from 'gulp';
import gutil from 'gulp-util';
import webpack from 'webpack';
import webpackConfig from '../../config/webpack/build';

gulp.task('webpack-build', (callback) => {
  webpack(webpackConfig, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err);

    callback();
  });
});
