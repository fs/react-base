import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('development', (callback) => {
  runSequence(
    'json-server',
    'webpack-dev-server',
    callback
  );
});
