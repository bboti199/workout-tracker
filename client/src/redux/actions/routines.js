import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  FETCH_ROUTINES_START,
  FETCH_ROUTINES_SUCCESS,
  FETCH_ROUTINES_ERROR
} from './types';

export const fetchRoutines = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);
  }

  dispatch({
    type: FETCH_ROUTINES_START
  });

  try {
    const res = await axios.get('/api/routines');

    dispatch({
      type: FETCH_ROUTINES_SUCCESS,
      payload: res.data
    });
  } catch (err) {
    dispatch({
      type: FETCH_ROUTINES_ERROR
    });
  }
};
