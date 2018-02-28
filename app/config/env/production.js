module.exports = {
  env: process.env.NODE_ENV,
  target: 'http://react-base.herokuapp.com',
  apiTarget: 'http://react-base-api.herokuapp.com',
  storage: {
    sessionKey: 'user_session',
    localizationKey: 'i18nextLng',
  },
  session: {
    tokenKey: 'authentication_token',
    emailKey: 'email',
  },
};
