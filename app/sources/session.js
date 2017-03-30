import request from 'lib/request';

export default class SessionSource {
  static resource = 'session'

  static create(user) {
    return request().create(this.resource, user);
  }

  static destroy(id) {
    return request().destroy(this.resource, id);
  }
}
