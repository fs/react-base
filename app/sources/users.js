import config from 'config';
import { post } from 'j-fetch';

export default class UsersSource {
  static urlRoot = `${config.apiTarget}/users`;

  static create(user) {
    return post({ url: this.urlRoot, body: user })
      .then(result => result.json());
  }
}
