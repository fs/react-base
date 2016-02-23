import gulp from 'gulp';
import express from 'express';
import historyApiFallback from 'connect-history-api-fallback';
import prism from 'connect-prism';
import notifier from '../helpers/notifier';
import config from '../../config/app';

gulp.task('server', () => {
  const server = express();

  gulp.watch(`${config.appDir}/stylesheets/**/*.styl`, ['stylesheets']);
  gulp.watch(`${config.appDir}/index.html`, ['copy']);

  prism.create({
    name: 'serve',
    mode: 'mock',
    context: '/api',
    host: 'localhost',
    port: 8001,
    delay: 0,
    rewrite: {},
    mockFilenameGenerator: (config, req) => {
      return `${req._parsedUrl.pathname.replace(/^\//, '')}_${req.method}.json`;
    }
  });

  server.use(historyApiFallback());
  server.use(prism.middleware);
  server.use(express.static(config.publicDir));
  server.listen(config.ports.server);
  notifier.log(`Listening on 0.0.0.0:${config.ports.server}`);
});
