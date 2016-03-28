import gulp from 'gulp';
import runSequence from 'run-sequence';
import config from '../../config/gulp';

gulp.task('server', (callback) => {
  if (config.development) {
    runSequence(
      'json-server',
      'webpack-dev-server',
      callback
    );
  }
  else {
    runSequence(
      'connect',
      callback
    );
  }
});
