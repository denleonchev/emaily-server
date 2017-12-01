import { FETCH_SURVEYS } from '../actions/types'

export default function (state = {
  items: [],
  pages: 0,
  search: ''
}, action) {
  switch (action.type) {
  case FETCH_SURVEYS:
    return action.payload
  default:
    return state
  }
}
