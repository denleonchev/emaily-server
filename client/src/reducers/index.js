import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import authReducer from './authReducer'
import surveysReducer from './surveysReducer'
import searchReducer from './searchReducer'
import fetchingSurveysReducer from './fetchingSurveysReducer'

export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
  form: reduxFormReducer,
  search: searchReducer,
  isFetchintSurveys: fetchingSurveysReducer
})
