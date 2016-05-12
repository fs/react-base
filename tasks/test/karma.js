import gulp from 'gulp';
import karma from 'karma';
import karmaConfig from '../../config/karma.js';

gulp.task('karma', () => new karma.Server(karmaConfig, process.exit).start());
