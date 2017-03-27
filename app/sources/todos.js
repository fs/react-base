import config from 'config';
import authRequest from 'services/authRequest';

export default class TodosSource {
  static urlRoot = `${config.apiTarget}/todos`;

  static get() {
    return authRequest.get({ url: this.urlRoot })
      .then(result => result.json());
  }

  static create(todo) {
    return authRequest.post({ url: this.urlRoot, body: todo })
      .then(result => result.json());
  }

  static update(todo) {
    const updateUrl = `${this.urlRoot}/${todo.id}`;

    return authRequest.patch({ url: updateUrl, body: todo });
  }

  static delete(todo) {
    const deleteUrl = `${this.urlRoot}/${user.id}`;

    return authRequest.delete({ url: deleteUrl });
  }
}
