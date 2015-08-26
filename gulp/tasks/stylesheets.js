import gulp from 'gulp';
import stylus from 'gulp-stylus';
import cssimport from 'gulp-cssimport';
import autoprefixer from 'autoprefixer-stylus';
import jeet from 'jeet';
import plumber from 'gulp-plumber';
import notifier from '../helpers/notifier';
import config from '../../config/app';

gulp.task('stylesheets', () => {
  return gulp.src(`${config.appDir}/stylesheets/application.styl`)
    .pipe(plumber())
    .pipe(stylus({
      linenos: true,
      use: [
        autoprefixer({ browsers: 'last 2 versions' }),
        jeet()
      ]
    }).on('error', notifier.errorHandler))
    .pipe(cssimport())
    .pipe(gulp.dest(config.publicDir));
});
