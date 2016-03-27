import gulp from 'gulp';
import postcss from 'gulp-postcss';
import stylelint from 'stylelint';
import postcssReporter from 'postcss-reporter';
import config from '../../config/gulp';
import stylelintConfig from '../../config/stylelint';

gulp.task('stylelint', () => {
  return gulp.src(`${config.appDir}/stylesheets/**/*.css`)
    .pipe(postcss([
      stylelint(stylelintConfig),
      postcssReporter({ clearMessages: true })
    ]));
});
