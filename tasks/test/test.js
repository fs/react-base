import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('test', (callback) => {
  runSequence(
    'test-prepare',
    'jest',
    'lint',
    callback
  );
});
