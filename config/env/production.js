module.exports = {
  target: 'http://react-base.herokuapp.com',
  apiTarget: process.env.API_TARGET,
  storageKey: 'user_session',
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email'
  }
};
