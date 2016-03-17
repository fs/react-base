import gulp from 'gulp';
import del from 'del';
import config from '../../config/gulp';

gulp.task('clean', (cb) => del([config.distDir], cb));
