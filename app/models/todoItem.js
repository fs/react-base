import jsonApi from 'devour';

const todoItem = {
  'title': '',
  'text': '',
  'status': ''
};

export default jsonApi.define('todoItem', todoItem);
