import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import routine from './routines';

export default combineReducers({
  alert,
  auth,
  routine
});
