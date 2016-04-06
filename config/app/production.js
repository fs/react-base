module.exports = {
  target: 'http://react-base.herokuapp.com',
  apiPath: 'http://react-base-api.herokuapp.com',
  rootPath: '/',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
