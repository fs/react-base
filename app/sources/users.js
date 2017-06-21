import config from 'config';
import jFetch from 'j-fetch';

export default class UsersSource {
  static urlRoot = `${config.apiTarget}/users`;

  static create(user) {
    return jFetch.post({ url: this.urlRoot, body: user })
      .then(result => result.json());
  }
}
