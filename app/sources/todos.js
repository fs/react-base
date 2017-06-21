import config from 'config';
import {
  get,
  post,
  patch,
  destroy
} from 'j-fetch/auth';

export default class TodosSource {
  static urlRoot = `${config.apiTarget}/todos`;

  static get() {
    return get({ url: this.urlRoot })
      .then(result => result.json());
  }

  static create(todo) {
    return post({ url: this.urlRoot, body: todo })
      .then(result => result.json());
  }

  static update(todo) {
    const updateUrl = `${this.urlRoot}/${todo.id}`;

    return patch({ url: updateUrl, body: todo });
  }

  static delete(todo) {
    const deleteUrl = `${this.urlRoot}/${todo.id}`;

    return destroy({ url: deleteUrl });
  }
}
