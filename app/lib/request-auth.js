import deepAssign from 'deep-assign';
import { request } from 'lib/request';
import session from 'services/session';

export function requestAuth(url, params, queryParams) {
  const defaultParams = {
    headers: {
      'X-User-Token': session.token,
      'X-User-Email': session.email
    }
  };

  return request(url, deepAssign({}, defaultParams, params), queryParams);
}
