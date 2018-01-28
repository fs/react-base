import axios from 'axios';
import qs from 'qs';
import currentUser from 'services/currentUser';
import config from 'config';

const api = axios.create({
  baseURL: config.apiTarget,
  paramsSerializer: qs.stringify
});

api.interceptors.request.use(
  config => {
    if (config.withoutAuth) return config;

    return {
      ...config,
      headers: {
        ...config.headers,
        'X-User-Email': currentUser.email,
        'X-User-Token': currentUser.token
      }
    };
  },
  error => Promise.reject(error)
);

export default api;
