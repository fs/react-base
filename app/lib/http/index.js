import 'es6-promise/auto';
import 'whatwg-fetch';
import qs from 'qs';
import { merge, pickBy, isString } from 'lodash';

const JSON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const DEFAULT_PAYLOAD = {
  headers: JSON_HEADERS
};

function handleResponse(response) {
  const { status } = response;

  return (status >= 200 && status < 300) ?
    Promise.resolve(response) :
    Promise.reject(response);
}

function filteredParams(params) {
  if (!params) return '';

  const filteredParams = pickBy(params, item => !!item);

  return `?${qs.stringify(filteredParams, { arrayFormat: 'brackets' })}`;
}

function requestBody(body, headers) {
  const isJSON = !!headers['Content-Type'] && headers['Content-Type'] === 'application/json';

  return (isJSON && !isString(body)) ? JSON.stringify(body) : body;
}

function request(payload) {
  const { url, query, ...options } = merge({}, DEFAULT_PAYLOAD, payload);
  const { body, headers } = options;
  const urlWithQueryParams = url + filteredParams(query);
  const fetchOptions = merge({}, options, { body: requestBody(body, headers) });

  return fetch(urlWithQueryParams, fetchOptions).then(http.handleResponse);
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
  handleResponse,
  get,
  post,
  put,
  patch,
  delete: deleteRequest
};

export default http;
