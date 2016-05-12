import gulp from 'gulp';
import runSequence from 'run-sequence';

gulp.task('lint', (callback) => {
  runSequence(
    'stylelint',
    'eslint',
    callback
  );
});
