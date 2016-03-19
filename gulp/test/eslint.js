import gulp from 'gulp';
import eslint from 'gulp-eslint';
import config from '../../config/gulp';
import eslintConfig from '../../config/eslint';

gulp.task('eslint', () => {
  return gulp.src([
    `${config.appDir}/src/**/*.jsx`,
    `${config.gulpDir}/**/*.js`,
  ])
    .pipe(eslint(eslintConfig))
    .pipe(eslint.format())
    .pipe(eslint.failAfterError());
});
