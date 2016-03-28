import config from 'config';

const urlRoot = `${config.apiPath}/todos`;
const headers = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

export default class TodosSource {
  static get(todos) {
    return fetch(urlRoot, {
      headers,
      method: 'GET'
    })
    .then(result => result.json());
  }

  static create(todo) {
    return fetch(urlRoot, {
      headers,
      method: 'POST',
      body: JSON.stringify(todo)
    })
    .then(result => result.json());
  }

  static update(todo) {
    return fetch(`${urlRoot}/${todo.id}`, {
      headers,
      method: 'PUT',
      body: JSON.stringify(todo)
    });
  }

  static delete(todo) {
    return fetch(`${urlRoot}/${todo.id}`, {
      headers,
      method: 'DELETE'
    });
  }
}
