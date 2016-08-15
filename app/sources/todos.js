import config from 'config';
import { requestAuth } from 'lib/request-auth';

export default class TodosSource {
  static urlRoot = `${config.apiTarget}/todos`

  static get(todos) {
    return requestAuth(this.urlRoot, {
      method: 'GET'
    })
    .then(result => result.json());
  }

  static create(todo) {
    return requestAuth(this.urlRoot, {
      method: 'POST',
      body: JSON.stringify(todo)
    })
    .then(result => result.json());
  }

  static update(todo) {
    return requestAuth(`${this.urlRoot}/${todo.id}`, {
      method: 'PUT',
      body: JSON.stringify(todo)
    });
  }

  static delete(todo) {
    return requestAuth(`${this.urlRoot}/${todo.id}`, {
      method: 'DELETE'
    });
  }
}
