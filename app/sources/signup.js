import config from 'config';
import request from 'lib/request';

export default class SignupSource {
  static urlRoot = `${config.apiTarget}/users`;

  static create(user) {
    return request(this.urlRoot, {
      method: 'POST',
      body: JSON.stringify(user)
    })
    .then(result => result.json());
  }
}
