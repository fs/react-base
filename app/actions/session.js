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
  type: LOGIN_REQUEST
})

const successLogin = (user) => ({
  user,
  type: LOGIN_SUCCESS
})

const successLogout = () => ({
  type: LOGOUT_SUCCESS
})

export const createUser = (user) =>
  (dispatch) => {
    dispatch(requestLogin())

    sessionSource.create(user).then((result) => {
      Storage.set(STORAGE_KEY, result)
      dispatch(successLogin(result))
      appHistory.push(paths.home())
    })
  }

export const logoutUser = (user) =>
  (dispatch) => {
    sessionSource.delete(user).then(() => {
      Storage.remove(STORAGE_KEY)
      dispatch(successLogout())
    })
  }
