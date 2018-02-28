import pathToRegexp from 'path-to-regexp';

export const routes = {
  home: '/',
  about: '/about',
  profile: '/profile',
  signin: '/signin',
  signup: '/signup',
  aboutExtended: '/about/extended/:id',
};

export const paths = {};

Object.keys(routes)
  .forEach((routeName) => {
    paths[routeName] = pathToRegexp.compile(routes[routeName]);
  });

export default routes;
