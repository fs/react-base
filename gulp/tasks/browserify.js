import gulp from 'gulp';
import rename from 'gulp-rename';
import browserify from 'browserify';
import babelify from 'babelify';
import watchify from 'watchify';
import source from 'vinyl-source-stream';
import notifier from '../helpers/notifier';
import config from '../../config/app';

gulp.task('browserify', () => {
  const appPath = `./${config.appDir}`;
  const entryPoint = `${appPath}/scripts/application.jsx`;
  const bundler = watchify(
    browserify({
      cache: {},
      packageCache: {},
      fullPaths: true,
      debug: true,
      entries: entryPoint,
      extensions: ['.jsx'],
      paths: [appPath]
    }).transform(babelify.configure({
      stage: 0,
      sourceMapRelative: appPath
    }))
  );

  function bundle() {
    return bundler
      .bundle()
      .on('error', notifier.errorHandler)
      .pipe(source(entryPoint))
      .pipe(rename('application.js'))
      .pipe(gulp.dest(config.publicDir))
  };

  bundler.on('update', bundle);
  bundle();
});
