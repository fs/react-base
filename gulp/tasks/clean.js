import gulp from 'gulp';
import del from 'del';
import config from '../../config/app';

gulp.task('clean', (cb) => del([config.publicDir], cb));
