import session from 'services/session';

export const paths = {
  home() { return '/'; },
  about() { return '/about'; },
  signin() { return '/signin'; },
  signup() { return '/signup'; },
  aboutExtended(id) { return `/about/extended/${id}`; }
};

export function requireAuth(nextState, replace) {
  if (!session.loggedIn()) {
    replace({
      pathname: '/',
      state: { nextPathname: nextState.location.pathname }
    });
  }
};
