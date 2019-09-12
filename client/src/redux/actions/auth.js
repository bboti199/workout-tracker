import axios from 'axios';
import { enqueueSnackbar, closeSnackbar } from './notification';
import setAuthToken from '../../utils/setAuthToken';

import React from 'react';
import Button from '@material-ui/core/Button';

import {
  REGISTER_FAIL,
  REGISTER_SUCCESS,
  USER_LOADED,
  AUTH_ERROR,
  LOGIN_FAIL,
  LOGIN_SUCCESS,
  LOGOUT
} from './types';

/**
 * * Load user
 */
export const loadUser = () => async dispatch => {
  if (localStorage.token) {
    setAuthToken(localStorage.token);

    try {
      const res = await axios.get('/api/users');

      dispatch({
        type: USER_LOADED,
        payload: res.data
      });
    } catch (err) {
      dispatch({
        type: AUTH_ERROR
      });
    }
  }
};

/**
 * * Register a new user
 * @param {name, email, password}
 */
export const register = ({ name, email, password }) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ name, email, password });

  try {
    const res = await axios.post('/api/users', body, config);

    dispatch({
      type: REGISTER_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error =>
        dispatch(
          enqueueSnackbar({
            message: error.msg,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'error',
              action: key => (
                <Button
                  style={{ color: 'white' }}
                  onClick={() => dispatch(closeSnackbar(key))}
                >
                  got it
                </Button>
              )
            }
          })
        )
      );
    }

    dispatch({
      type: REGISTER_FAIL
    });
  }
};

/**
 * * Login user
 * @param (email, password)
 */
export const login = (email, password) => async dispatch => {
  const config = {
    headers: {
      'Content-Type': 'application/json'
    }
  };

  const body = JSON.stringify({ email, password });

  try {
    const res = await axios.post('/api/users/login', body, config);

    dispatch({
      type: LOGIN_SUCCESS,
      payload: res.data
    });

    dispatch(loadUser());
  } catch (err) {
    const errors = err.response.data.errors;

    if (errors) {
      errors.forEach(error =>
        dispatch(
          enqueueSnackbar({
            message: error.msg,
            options: {
              key: new Date().getTime() + Math.random(),
              variant: 'error',
              action: key => (
                <Button
                  style={{ color: 'white' }}
                  onClick={() => dispatch(closeSnackbar(key))}
                >
                  got it
                </Button>
              )
            }
          })
        )
      );
    }

    dispatch({
      type: LOGIN_FAIL
    });
  }
};

/**
 * * Logout user / Clear profile
 */
export const logout = () => dispatch => {
  dispatch({ type: LOGOUT });
};
