import gulp from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import notifier from '../helpers/notifier';
import config from '../../config/gulp';

gulp.task('browserify', () => {
  const entryPoint = `${config.appDir}/src/application.jsx`;
  const bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true,
    entries: entryPoint,
    extensions: ['.jsx', '.js'],
    paths: [`${config.appDir}/src`]
  })
  .transform(babelify.configure({
    presets: ['es2015', 'stage-0', 'react'],
    plugins: ['transform-decorators-legacy'],
    sourceMapRelative: config.appDir
  }))

  const bundle = () => {
    const bundleStream = bundler.bundle();

    return bundleStream
      .on('error', notifier.errorHandler)
      .pipe(source(entryPoint))
      .pipe(rename('application.js'))
      .pipe(gulp.dest(config.distDir));
  };

  if (config.development) {
    watchify(bundler).on('update', bundle);
  }

  return bundle();
});

