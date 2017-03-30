module.exports = {
  target: 'http://localhost:8000',
  apiTarget: process.env.API_TARGET,
  apiPath: '/v1',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
