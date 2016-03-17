import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../../config/gulp';

gulp.task('eslint', () => {
  return gulp.src([
    `${config.appDir}/src/**/*.jsx`,
    `${config.gulpDir}/**/*.js`,
  ])
    .pipe(eslint(`${config.configDir}/eslint.js`))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
