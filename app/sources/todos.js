import config from 'config';
import jFetchAuth from 'j-fetch/auth';

export default class TodosSource {
  static urlRoot = `${config.apiTarget}/todos`;

  static get() {
    return jFetchAuth.get({ url: this.urlRoot })
      .then(result => result.json());
  }

  static create(todo) {
    return jFetchAuth.post({ url: this.urlRoot, body: todo })
      .then(result => result.json());
  }

  static update(todo) {
    const updateUrl = `${this.urlRoot}/${todo.id}`;

    return jFetchAuth.patch({ url: updateUrl, body: todo });
  }

  static delete(todo) {
    const deleteUrl = `${this.urlRoot}/${todo.id}`;

    return jFetchAuth.delete({ url: deleteUrl });
  }
}
