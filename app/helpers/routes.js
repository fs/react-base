export default {
  home() { return '/'; },
  about() { return '/about'; },
  signin() { return '/signin'; },
  signup() { return '/signup'; },
  aboutExtended(id) { return `/about/extended/${id}`; }
};
