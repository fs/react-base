import jsonApi from 'devour';

const session = {
  'email': '',
  'password': '',
  'authentication-token': ''
};

export default jsonApi.define('session', session);
