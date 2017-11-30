import axios from 'axios'
import { reset } from 'redux-form'

import { FETCH_USER, FETCH_SURVEYS, SET_SEARCH, SET_IS_FETCHING_SURVEYS, SET_INITIAL_FETCHING_SURVEYS } from './types'

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/cur_user')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}

export const fetchSurveys = (params) => async (dispatch, getState) => {
  dispatch({
    type: SET_IS_FETCHING_SURVEYS,
    payload: true
  })
  dispatch({
    type: SET_INITIAL_FETCHING_SURVEYS,
    payload: !Boolean(params)
  })
  const res = await axios.get('/api/surveys', { params })
  dispatch({
    type: SET_IS_FETCHING_SURVEYS,
    payload: false
  })
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  })
}

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token)
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
}

export const submitSurvey = (surveyData, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', surveyData)
  history.push('/surveys')
  dispatch({
    type: FETCH_USER,
    payload: res.data
  })
  dispatch(reset('newSurvey'))
}

export const setSearch = (value) => (
  {
    type: SET_SEARCH,
    payload: value
  }
)
