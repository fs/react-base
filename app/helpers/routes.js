export default {
  home() { return '/'; },
  about() { return '/about'; },
  profile() { return '/profile'; },
  signin() { return '/signin'; },
  signup() { return '/signup'; },
  aboutExtended(id) { return `/about/extended/${id}`; }
};
