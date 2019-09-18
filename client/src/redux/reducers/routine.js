import {
  FETCH_ROUTINES_START,
  FETCH_ROUTINES_SUCCESS,
  FETCH_ROUTINES_FAILED
} from '../actions/types';

const initialState = {
  routines: [],
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ROUTINES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_ROUTINES_SUCCESS:
      return {
        ...state,
        routines: payload,
        loading: false
      };
    case FETCH_ROUTINES_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
