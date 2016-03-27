module.exports = {
  target: 'http://localhost:8000',
  apiPath: 'http://localhost:8000/v1',
  rootPath: '/',
  sessionKey: 'authentication_token',
  storageKey: 'user_session',
  api: {
    target: 'http://localhost:8001',
    path: '/v1',
    port: 8001
  },
  test: {
    port: 9999
  },
}
