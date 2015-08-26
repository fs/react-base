import gulp from 'gulp';
import plumber from 'gulp-plumber';
import config from '../../config/app';

gulp.task('copy', () => {
  return gulp.src([
    `${config.appDir}/fixtures/**/*`,
    `${config.appDir}/index.html`
  ], { base: config.appDir })
    .pipe(plumber())
    .pipe(gulp.dest(config.publicDir));
});
