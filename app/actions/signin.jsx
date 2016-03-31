import Alt from 'alt_flux';

export default Alt.createActions(class SigninActions {
  show() {
    return true;
  }

  hide() {
    return true;
  }

  reset() {
    return true;
  }

  setEmail(email) {
    return email;
  }

  setPassword(password) {
    return password;
  }

  create(user) {
    return user;
  }
});
