import config from 'config';
import http from 'j-fetch';

export default class UsersSource {
  static urlRoot = `${config.apiTarget}/users`;

  static create(user) {
    return http.post({ url: this.urlRoot, body: user })
      .then(result => result.json());
  }
}
