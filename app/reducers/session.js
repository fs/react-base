import * as ActionTypes from 'actions/session';
import config from 'config';

const initialState = {
  currentUser: Storage.get(STORAGE_KEY) || {};
}
