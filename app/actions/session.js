import Storage from 'lib/storage'
import sessionSource from 'sources/session'
import appHistory from 'services/history'
import config from 'config'
import { paths } from 'helpers/routes'

const STORAGE_KEY = config.storageKey

export const LOGIN_REQUEST = 'LOGIN_REQUEST'
export const LOGIN_SUCCESS = 'LOGIN_SUCCESS'
export const LOGOUT_SUCCESS = 'LOGOUT_SUCCESS'

const requestLogin = (user) => ({
  type: LOGIN_REQUEST,
  isFetching: true
})

const successLogin = (user) => ({
  user,
  type: LOGIN_SUCCESS,
  isFetching: false
})

export const createUser = (user) =>
  (dispatch) => {
    dispatch(requestLogin())

    sessionSource.create(user).then((result) => {
      Storage.set(STORAGE_KEY, result)
      dispatch(successLogin(user))
      appHistory.push(paths.home())
    })
  }

export const deleteUser = (user) =>
  (dispatch) => {
    sessionSource.delete(user)
    Storage.remove(STORAGE_KEY)
    dispatch()
  }
