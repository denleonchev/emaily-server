import { FETCH_SURVEYS } from '../actions/types'

export default function (state = {
  items: [],
  total: 0
}, action) {
    switch (action.type) {
    case FETCH_SURVEYS:
      return action.payload
    default:
      return state
  }
}
