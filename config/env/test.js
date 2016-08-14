module.exports = {
  target: 'http://localhost:8000',
  apiTarget: 'http://localhost:8000/v1',
  apiPath: '/v1',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  },
  test: {
    port: 9999
  }
};
