import { merge } from 'lodash';
import http from 'lib/http';
import currentUser from 'services/currentUser';

const authRequestMethod = (method, payload) => {
  const authPayload = {
    headers: {
      'X-User-Email': currentUser.email,
      'X-User-Token': currentUser.token
    }
  };

  return http[method](merge({}, payload, authPayload));
};

const authRequest = Object.keys(http).reduce((obj, method) => {
  obj[method] = payload => authRequestMethod(method, payload);
  return obj;
}, {});

export default authRequest;
