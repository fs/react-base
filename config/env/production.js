module.exports = {
  target: 'http://react-base.herokuapp.com',
  apiTarget: 'http://react-base-api.herokuapp.com',
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
