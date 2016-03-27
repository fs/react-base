import gulp from 'gulp';
import runSequence from 'run-sequence';
import config from '../../config/gulp';

gulp.task('build', (callback) => {
  if (config.production) {
    runSequence('webpack-build', callback);
  }
  else {
    callback();
  }
});
