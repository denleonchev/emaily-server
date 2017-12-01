import { FETCH_SURVEYS } from '../actions/types'

function surveys (state = {
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

export const getSelectedSurvey = (state, number) => (number === null ? null : state.items[number])

export default surveys