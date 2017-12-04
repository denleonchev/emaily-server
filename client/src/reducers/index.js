import { combineReducers } from 'redux'
import { reducer as reduxFormReducer } from 'redux-form'
import authReducer from './authReducer'
import surveysReducer, * as fromSurveys from './surveysReducer'
import fetchingSurveysReducer from './fetchingSurveysReducer'
import initalFetchingSurveysReducer from './initalFetchingSurveysReducer'
import selectedSurveyReducer from './selectedSurveyReducer'

export default combineReducers({
  auth: authReducer,
  surveys: surveysReducer,
  form: reduxFormReducer,
  isFetchintSurveys: fetchingSurveysReducer,
  initalFetchingSurveys: initalFetchingSurveysReducer,
  selectedSurveyNumber: selectedSurveyReducer
})

export const getSelectedSurvey = (state, number) => (fromSurveys.getSelectedSurvey(state, number))