import gulp from 'gulp';
import config from '../../config/app';

gulp.task('watch', () => {
  gulp.watch(`${config.appDir}/stylesheets/**/*.styl`, ['stylesheets']);
  gulp.watch(`${config.appDir}/index.html`, ['copy']);
});
