import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('build', (callback) => {
  runSequence(
    'clean',
    [
      'copy',
      'stylesheets'
    ],
    'browserify',
    callback
  );
});
