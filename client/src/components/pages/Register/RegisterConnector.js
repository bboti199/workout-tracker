import React from 'react';
import { Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { register } from '../../../redux/actions/auth';

import { RegisterView } from './RegisterView';

const RegisterConnector = ({ isAuthenticated, register }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }
  const handleRegister = async values => {
    const { name, email, password } = values;
    register({ name, email, password });
  };
  return <RegisterView submit={handleRegister} />;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { register }
)(RegisterConnector);
