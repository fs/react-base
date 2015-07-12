var gulp = require('gulp');
var runSequence = require('run-sequence');

gulp.task('build', function() {
  runSequence(
    'clean',
    'jsonlint',
    [
      'copy',
      'stylesheets',
      'browserify'
    ],
    'server',
    'watch'
  );
});
