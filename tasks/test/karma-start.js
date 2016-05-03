import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('karma-start', shell.task(
  ['karma start --single-run --no-auto-watch ./config/karma.config.js']
));
