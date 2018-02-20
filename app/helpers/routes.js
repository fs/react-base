import currentUser from 'services/currentUser';

export const paths = {
  home() { return '/'; },
  about() { return '/about'; },
  signin() { return '/signin'; },
  signup() { return '/signup'; },
  aboutExtended(id) { return `/about/extended/${id}`; },
};

export function requireAuth(nextState, replace) {
  if (!currentUser.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname },
    });
  }
}
