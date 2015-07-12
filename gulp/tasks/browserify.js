var gulp = require('gulp');
var rename = require('gulp-rename');
var browserify = require('browserify');
var transform = require('vinyl-transform');
var babelify = require('babelify');
var watchify = require('watchify');
var notify = require('gulp-notify');
var config = require('../config');
var entryPoint = './' + config.appDir + '/scripts/application.jsx';

gulp.task('browserify', function() {
  var bundler = browserify({
    cache: {},
    packageCache: {},
    fullPaths: true,
    debug: true,
    entries: entryPoint,
    extensions: ['.jsx'],
    paths: ['./' + config.appDir]
  })
  .transform(babelify.configure({ sourceMapRelative: './' + config.appDir }));

  function bundle() {
    var bundleTransform = transform(function(filename) {
      return bundler.bundle();
    });

    return gulp.src(entryPoint)
      .pipe(bundleTransform)
      .on('error', notify.onError())
      .pipe(rename('application.js'))
      .pipe(gulp.dest(config.publicDir))
  };

  watchify(bundler).on('update', bundle);

  return bundle();
});
