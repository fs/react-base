import config from 'config';
import { request } from 'lib/request';

export default class SessionSource {
  static urlRoot = `${config.apiPath}/session`

  static create(user) {
    return request(this.urlRoot, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(result => result.json());
  }

  static delete(user) {
    return request(`${this.urlRoot}/${user.id}`, {
      method: 'DELETE'
    });
  }
}
