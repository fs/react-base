import deepAssign from 'deep-assign';
import request from 'lib/request';
import currentUser from 'services/currentUser';

export default function requestAuth(url, params, queryParams) {
  const defaultParams = {
    headers: {
      'X-User-Token': currentUser.token,
      'X-User-Email': currentUser.email
    }
  };

  return request(url, deepAssign({}, defaultParams, params), queryParams);
}
