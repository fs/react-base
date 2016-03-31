import config from 'config';

export default class SessionSource {
  static urlRoot = `${config.apiPath}/users`

  static headers = {
    'Accept': 'application/json',
    'Content-Type': 'application/json'
  }

  static create(user) {
    return fetch(this.urlRoot, {
      headers: this.headers,
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(result => result.json());
  }

  static delete(user) {
    return fetch(`${this.urlRoot}/${user.id}`, {
      headers: this.headers,
      method: 'DELETE'
    });
  }
}
