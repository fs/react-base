import * as ActionTypes from 'actions/signin'

const initialState = {
  user: {
    email: '',
    password: ''
  }
}

export default function signin(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_VALUE:
    return {
      ...state,
      user: {
        ...state.user,
        [action.name]: action.value
      }
    }
  default:
    return state
  }
}
