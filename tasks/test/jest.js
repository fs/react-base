import gulp from 'gulp';
import shell from 'gulp-shell';

gulp.task('jest', shell.task(
  ['jest --config ./jest.json']
));
