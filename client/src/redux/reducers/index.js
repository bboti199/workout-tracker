import { combineReducers } from 'redux';
import notification from './notification';
import auth from './auth';
import exercise from './exercise';
import routine from './routine';

export default combineReducers({
  notification,
  auth,
  exercise,
  routine
});
