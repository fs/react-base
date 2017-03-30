import jsonApi from 'devour';

const user = {
  'id': '',
  'email': '',
  'password': ''
};

export default jsonApi.define('user', user);
