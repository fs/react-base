import config from 'config';
import http from 'j-fetch';

export default class SessionSource {
  static urlRoot = `${config.apiTarget}/session`;

  static signin(user) {
    return http.post({ url: this.urlRoot, body: user })
      .then(result => result.json());
  }

  static logout(user) {
    const logoutUrl = `${this.urlRoot}/${user.id}`;

    return http.delete({ url: logoutUrl });
  }
}
