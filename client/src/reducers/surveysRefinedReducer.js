import { SET_REFINED_SURVEYS } from '../actions/types'

export default function (state = false, action) {
  switch (action.type) {
  case SET_REFINED_SURVEYS:
    return action.payload
  default:
    return state
  }
}
