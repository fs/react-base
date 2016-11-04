import 'es6-promise';
import 'whatwg-fetch';
import qs from 'qs';
import deepAssign from 'deep-assign';
import { pickBy } from 'lodash';

function filteredParams(params) {
  const filteredParams = pickBy(params, item => !!item);

  return `?${qs.stringify(filteredParams, { arrayFormat: 'brackets' })}`;
}

export default function request(url, params, queryParams) {
  const defaultParams = {
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json',
    },
  };

  if (queryParams) {
    url += filteredParams(queryParams);
  }

  return fetch(url, deepAssign({}, defaultParams, params));
}
