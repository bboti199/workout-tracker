import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  FETCH_EXERCISES_FAILED,
  FETCH_EXERCISES_START,
  FETCH_EXERCISES_SUCCESS
} from './types';

export const fetchExercises = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);

    try {
      dispatch({
        type: FETCH_EXERCISES_START
      });
      const res = await axios.get('/api/exercises');

      dispatch({
        type: FETCH_EXERCISES_SUCCESS,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: FETCH_EXERCISES_FAILED
      });
    }
  }
};
