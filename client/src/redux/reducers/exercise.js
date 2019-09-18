import {
  FETCH_EXERCISES_FAILED,
  FETCH_EXERCISES_START,
  FETCH_EXERCISES_SUCCESS
} from '../actions/types';

const initialState = {
  exercises: [],
  loading: false
};

export default function(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case FETCH_EXERCISES_START:
      return {
        ...state,
        loading: true
      };
    case FETCH_EXERCISES_SUCCESS:
      return {
        ...state,
        exercises: payload,
        loading: false
      };
    case FETCH_EXERCISES_FAILED:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
}
