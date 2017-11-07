import axios from 'axios';
import { reset } from 'redux-form';

import { FETCH_USER, FETCH_SURVEYS } from './types';

export const fetchUser = () => async (dispatch) => {
  const res = await axios.get('/api/cur_user');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
}

export const fetchSurveys = () => async (dispatch, getState) => {
  if(!getState().auth) {
    return;
  }
  const res = await axios.get('/api/surveys');
  dispatch({
    type: FETCH_SURVEYS,
    payload: res.data
  });
}

export const handleToken = (token) => async (dispatch) => {
  const res = await axios.post('/api/stripe', token);
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
}

export const submitSurvey = (surveyData, history) => async (dispatch) => {
  const res = await axios.post('/api/surveys', surveyData);
  history.push('/surveys');
  dispatch({
    type: FETCH_USER,
    payload: res.data
  });
  dispatch(reset('newSurvey'));
}