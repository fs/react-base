import * as ActionTypes from 'actions/signin'

const initialState = {
  user: {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: ''
  }
}

export default function signup(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_VALUE:
    return {
      user: {
        ...state.user,
        [action.name]: action.value
      }
    }
  default:
    return state
  }
}
