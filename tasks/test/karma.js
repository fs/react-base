import gulp from 'gulp';
import karma from 'karma';
import config from '../../config/gulp';
import karmaConfig from '../../config/karma.js';

gulp.task('karma', () => new karma.Server(karmaConfig, process.exit).start());
