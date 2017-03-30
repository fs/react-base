import config from 'config';
import request from 'lib/request';

export default class SignupSource {
  static resource = 'user'

  static create(user) {
    return request().create(this.resource, user);
  }

  static destroy(id) {
    return request().destroy(this.resource, id);
  }
}
