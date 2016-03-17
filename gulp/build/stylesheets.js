import gulp from 'gulp';
import stylus from 'gulp-stylus';
import cssimport from 'gulp-import-css';
import autoprefixer from 'autoprefixer-stylus';
import plumber from 'gulp-plumber';
import notifier from '../helpers/notifier';
import config from '../../config/gulp';

gulp.task('stylesheets', () => {
  return gulp.src(`${config.appDir}/stylesheets/application.styl`)
    .pipe(plumber())
    .pipe(stylus({
      linenos: true,
      use: [autoprefixer({ browsers: 'last 2 versions' })]
    }).on('error', notifier.errorHandler))
    .pipe(cssimport({}))
    .pipe(gulp.dest(config.distDir))
});
