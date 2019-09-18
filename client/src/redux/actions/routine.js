import axios from 'axios';
import setAuthToken from '../../utils/setAuthToken';

import {
  FETCH_ROUTINES_START,
  FETCH_ROUTINES_SUCCESS,
  FETCH_ROUTINES_FAILED
} from './types';

export const fetchRoutines = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);

    try {
      dispatch({ type: FETCH_ROUTINES_START });

      const res = await axios.get('/api/routines');

      dispatch({ type: FETCH_ROUTINES_SUCCESS, payload: res.data });
    } catch (err) {
      dispatch({ type: FETCH_ROUTINES_FAILED });
    }
  }
};
