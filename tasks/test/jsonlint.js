import gulp from 'gulp';
import jsonlint from 'gulp-jsonlint';

gulp.task('jsonlint', () => {
  return gulp.src(['db.json'])
    .pipe(jsonlint())
    .pipe(jsonlint.reporter());
});
