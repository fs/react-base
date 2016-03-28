import gulp from 'gulp';
import connect from 'connect';
import historyApiFallback from 'connect-history-api-fallback';
import serveStatic from 'serve-static';
import config from '../../config/gulp';

gulp.task('connect', () => {
  const port = config.port;
  const server = connect();

  server.use(historyApiFallback());
  server.use(serveStatic(config.distDir));
  server.listen(port);
  console.log(`Listening on 0.0.0.0:${port}`);
});
