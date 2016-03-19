import gulp from 'gulp';
import plumber from 'gulp-plumber';
import config from '../../config/gulp';

gulp.task('copy', () => {
  return gulp.src([
    `${config.appDir}/index.html`
  ], { base: config.appDir })
    .pipe(plumber())
    .pipe(gulp.dest(config.distDir));
});
