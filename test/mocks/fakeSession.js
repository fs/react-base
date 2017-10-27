export const fakeSession = {
  isLoading: false,
  loggedIn: true,
  currentUser: {
    email: 'test@test.com',
    password: 'password',
    id: 1
  }
};

export const fakeEmptySession = {
  isLoading: false,
  loggedIn: false,
  currentUser: {}
};

export default fakeSession;
