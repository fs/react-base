import config from 'config';
import jsonApi from 'devour';
// import { browserHistory } from 'react-router';
// import Storage from 'lib/storage';
// import Session from 'services/session';
// import notifications from 'services/notifications';
import { paths } from 'helpers/routes';
import * as models from 'models'; // eslint-disable-line

const STORAGE_KEY = config.storageKey;

const errorMiddleware = {
  name: 'error-middleware',
  error: (payload) => {
    const { status } = payload;
    const { errors } = payload.data;
    const defaultError = 'Что-то пошло не так.';
    const currentError = errors[0];
    let errorMessage;

    switch (status) {
    case 401:
      errorMessage = currentError.detail;
      // Storage.remove(STORAGE_KEY);
      // notifications.error(errorMessage);

      return //browserHistory.push(paths.signIn());
    default:
      errorMessage = currentError.detail || currentError.title || defaultError;

      return //notifications.error(errorMessage);
    }
  }
};

export default function request() {
  let defaultHeaders = {
    'Accept': config.jsonHeader,
    'Content-Type': config.jsonHeader
  };

  // if (Session.token) {
  //   defaultHeaders = {
  //     ...defaultHeaders,
  //     'X-User-Token': Session.token,
  //     'X-User-Email': Session.email
  //   };
  // }

  jsonApi.headers = {
    ...jsonApi.header,
    ...defaultHeaders
  };
  jsonApi.replaceMiddleware('errors', errorMiddleware);

  return jsonApi;
}
