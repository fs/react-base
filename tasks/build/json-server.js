import gulp from 'gulp';
import jsonServer from 'gulp-json-srv';
import config from '../../config/gulp';

gulp.task('json-server', () => {
  return jsonServer.start({
    data: `${config.dbDir}/db.json`,
    port: config.ports.api
  });
});
