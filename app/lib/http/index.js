import { merge, pickBy } from 'lodash';
import qs from 'qs';

const JSON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const defaultPayload = () => ({
  headers: JSON_HEADERS,
  onSuccess: response => Promise.resolve(response),
  onError: response => Promise.reject(response)
});

function handleResponse(response, onSuccess, onError) {
  const callback = (response.status >= 200 && response.status < 300) ? onSuccess : onError;

  return callback(response);
}

function filteredParams(params) {
  if (!params) return '';

  const filteredParams = pickBy(params, item => !!item);

  return `?${qs.stringify(filteredParams, { arrayFormat: 'brackets' })}`;
}

function request(payload) {
  const { url, query, body, method, headers, options, onSuccess, onError } = merge({}, defaultPayload(), payload);

  const fetchOptions = merge({}, options, { method, headers, body: JSON.stringify(body) });
  const urlWithQueryParams = url + filteredParams(query);

  return fetch(urlWithQueryParams, fetchOptions).then(response => handleResponse(response, onSuccess, onError));
}

export function get(payload) {
  return request(
    merge({}, payload, { method: 'GET' })
  );
}

export function post(payload) {
  return request(
    merge({}, payload, { method: 'POST' })
  );
}

export function put(payload) {
  return request(
    merge({}, payload, { method: 'PUT' })
  );
}

export function patch(payload) {
  return request(
    merge({}, payload, { method: 'PATCH' })
  );
}

export function deleteRequest(payload) {
  return request(
    merge({}, payload, { method: 'DELETE' })
  );
}

const http = {
  get,
  post,
  put,
  patch,
  delete: deleteRequest
};

export default http;
