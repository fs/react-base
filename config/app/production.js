module.exports = {
  target: 'http://react-base.herokuapp.com',
  apiPath: 'http://react-base.herokuapp.com/v1',
  rootPath: '/',
  sessionKey: 'authentication_token',
  storageKey: 'user_session',
  api: {
    target: 'http://localhost:8001',
    path: '/v1',
    port: 8001
  }
};
