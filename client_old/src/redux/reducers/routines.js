import {
  FETCH_ROUTINES_SUCCESS,
  FETCH_ROUTINES_ERROR,
  FETCH_ROUTINES_START
} from '../actions/types';

const initialState = {
  loading: true,
  routines: []
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
    case FETCH_ROUTINES_ERROR:
      return {
        ...state,
        routines: [],
        loading: false
      };
    default:
      return state;
  }
}
