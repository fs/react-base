module.exports = {
  target: 'http://localhost:8000',
  apiPath: 'http://localhost:8000/v1',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  },
  api: {
    target: 'http://localhost:8001',
    path: '/v1',
    port: 8001
  },
  test: {
    port: 9999
  }
};
