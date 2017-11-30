import { SET_IS_FETCHING_SURVEYS } from '../actions/types'

export default function (state = true, action) {
  switch (action.type) {
  case SET_IS_FETCHING_SURVEYS:
    return action.payload
  default:
    return state
  }
}
