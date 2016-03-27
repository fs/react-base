import connect from 'connect';
import historyApiFallback from 'connect-history-api-fallback';
import serveStatic from 'serve-static';
import config from '../../config/gulp';

export default () => {
  const port = process.env.PORT;
  const server = connect();

  server.use(historyApiFallback());
  server.use(serveStatic(config.distDir));
  server.listen(port);
  console.log(`Listening on 0.0.0.0:${port}`);
};
