import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', () => {
  runSequence(
    'clean',
    'jsonlint',
    [
      'copy',
      'stylesheets',
      'browserify'
    ],
    'server'
  );
});
