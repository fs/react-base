import { merge } from 'lodash';

const JSON_HEADERS = {
  'Accept': 'application/json',
  'Content-Type': 'application/json'
};

const defaultPayload = () => ({
  method: 'GET',
  headers: JSON_HEADERS,
  onSuccess: response => Promise.resolve(response),
  onError: response => Promise.reject(response)
});

function handleResponse(response, onSuccess, onError) {
  const callback = (response.status >= 200 && response.status < 300) ? onSuccess : onError;

  return callback(response);
}

function request(payload) {
  const { url, body, method, headers, fetchOptions, onSuccess, onError } = merge({}, defaultPayload(), payload);
  const options = merge({}, fetchOptions, { method, headers, body: JSON.stringify(body) });

  return fetch(url, options).then(response => handleResponse(response, onSuccess, onError));
}

export function get(payload) {
  return request(payload);
}

export function post(payload) {
  return request(
    merge({}, payload, { method: 'POST' })
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
  get: request,
  post,
  patch,
  delete: deleteRequest
};

export default http;
