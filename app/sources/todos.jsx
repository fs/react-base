import session from 'services/session';
import config from 'config';

export default class TodosSource {
  static urlRoot = `${config.apiPath}/todos`

  static headers() {
    return {
      'Accept': 'application/json',
      'Content-Type': 'application/json',
      'X-User-Token': session.token,
      'X-User-Email': session.email
    };
  }

  static get(todos) {
    return fetch(this.urlRoot, {
      headers: this.headers(),
      method: 'GET'
    })
    .then(result => result.json());
  }

  static create(todo) {
    return fetch(this.urlRoot, {
      headers: this.headers(),
      method: 'POST',
      body: JSON.stringify(todo)
    })
    .then(result => result.json());
  }

  static update(todo) {
    return fetch(`${this.urlRoot}/${todo.id}`, {
      headers: this.headers(),
      method: 'PUT',
      body: JSON.stringify(todo)
    });
  }

  static delete(todo) {
    return fetch(`${this.urlRoot}/${todo.id}`, {
      headers: this.headers(),
      method: 'DELETE'
    });
  }
}
