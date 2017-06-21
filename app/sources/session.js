import config from 'config';
import { post, destroy } from 'j-fetch';

export default class SessionSource {
  static urlRoot = `${config.apiTarget}/session`;

  static signin(user) {
    return post({ url: this.urlRoot, body: user })
      .then(result => result.json());
  }

  static logout(user) {
    const logoutUrl = `${this.urlRoot}/${user.id}`;

    return destroy({ url: logoutUrl });
  }
}
