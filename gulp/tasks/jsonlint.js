import gulp from 'gulp';
import jsonlint from 'gulp-jsonlint';
import config from '../../config/app';

gulp.task('jsonlint', () => {
  return gulp.src([`${config.mocksDir}/**/*.json}`])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});
