import { SET_INITIAL_FETCHING_SURVEYS } from '../actions/types'

export default function (state = false, action) {
  switch (action.type) {
  case SET_INITIAL_FETCHING_SURVEYS:
    return action.payload
  default:
    return state
  }
}
