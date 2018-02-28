const jsonServer = require('json-server');
const { apiPath } = require('../app/config/env/development');

module.exports = {
  initialize(server) {
    const router = jsonServer.router('./json-server/db/db.json');

    server.use(jsonServer.defaults());
    server.use(apiPath, router);

    // Has overrided json-server render method to simulate server side error response.
    // Error will be returned if you try to sign in with error@example.com email
    router.render = (
      {
        url,
        method,
        body: { email }
      },
      res
    ) => {
      if (
        url === '/session' &&
        method === 'POST' &&
        email === 'error@example.com'
      ) {
        res.status(500).jsonp({ error: 'Server error has occured' });
      } else {
        res.jsonp(res.locals.data);
      }
    };
  }
};
