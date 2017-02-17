import * as ActionTypes from 'actions/todo'

const initialState = {
  name: '',
  isComplete: false
}

export default function todo(state = initialState, action) {
  switch (action.type) {
  case ActionTypes.SET_NAME:
    console.log(action)
    return {
      ...state,
      name: action.name
    }
  case ActionTypes.SUCCESS_CREATE:
    return {
      ...initialState
    }
  default:
    return state
  }
}
