import store from 'stores/application'
import config from 'config'
import { createUser, logoutUser } from 'actions/session'

export default class Session {
  static reducer() {
    return store.getState().session
  }

  static currentUser() {
    return this.reducer().currentUser
  }

  static loggedIn() {
    return Object.keys(this.currentUser()).length !== 0
  }

  static create(user) {
    store.dispatch(createUser(user))
  }

  static delete() {
    store.dispatch(logoutUser(this.currentUser()))
  }

  static get token() {
    return this.currentUser()[config.session.tokenKey]
  }

  static get email() {
    return this.currentUser()[config.session.emailKey]
  }
}
