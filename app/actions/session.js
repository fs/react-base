import Storage from 'lib/storage'
import sessionSource from 'sources/session'
import appHistory from 'services/history'
import config from 'config'
import { paths } from 'helpers/routes'

const STORAGE_KEY = config.storageKey

export const SESSION_CREATE_REQUEST = 'SESSION_CREATE_REQUEST'
export const SESSEION_CREATE_SUCCESS = 'SESSEION_CREATE_SUCCESS'
export const SESSION_DESTROY_SUCCESS = 'SESSION_DESTROY_SUCCESS'

const requestLogin = (user) => ({
  type: SESSION_CREATE_REQUEST
})

const successLogin = (user) => ({
  user,
  type: SESSEION_CREATE_SUCCESS
})

const successLogout = () => ({
  type: SESSION_DESTROY_SUCCESS
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
