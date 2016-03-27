import gulp from 'gulp';
import connect from 'connect';
import historyApiFallback from 'connect-history-api-fallback';
import proxyMiddleware from 'http-proxy-middleware';
import serveStatic from 'serve-static';
import config from '../../config/gulp';

gulp.task('connect', () => {
  const port = config.port;
  const server = connect();

  server.use(historyApiFallback());
  server.use(proxyMiddleware(config.api.path, {
    target: config.api.target,
    pathRewrite: {
      [config.api.path]: ''
    }
  }));
  server.use(serveStatic(config.distDir));
  server.listen(port);
  console.log(`Listening on 0.0.0.0:${port}`);
});
