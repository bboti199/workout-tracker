import {
  FETCH_ROUTINES_START,
  FETCH_ROUTINES_SUCCESS,
  FETCH_ROUTINES_FAILED,
  FETCH_SINGLE_ROUTINE_FAILED,
  FETCH_SINGLE_ROUTINE_SUCCESS,
  FETCH_SINGLE_ROUTINE_START
} from '../actions/types';

const initialState = {
  routines: [],
  loading: false,
  singleRoutine: null,
  singleRoutineLoading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_ROUTINES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_SINGLE_ROUTINE_START:
      return {
        ...state,
        singleRoutineLoading: true
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
        loading: false,
        routines: []
      };
    case FETCH_SINGLE_ROUTINE_FAILED:
      return {
        ...state,
        singleRoutineLoading: false,
        singleRoutine: null
      };
    case FETCH_SINGLE_ROUTINE_SUCCESS:
      return {
        ...state,
        singleRoutineLoading: false,
        singleRoutine: payload
      };
    default:
      return state;
  }
}
