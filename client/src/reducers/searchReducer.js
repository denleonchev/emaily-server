import { SET_SEARCH } from '../actions/types'

export default function (state = '', action) {
  switch (action.type) {
  case SET_SEARCH:
    return action.payload || ''
  default:
    return state
  }
}
