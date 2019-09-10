import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { login } from '../../../redux/actions/auth';

import { LoginView } from './LoginView';

const LoginConnector = ({ isAuthenticated, login }) => {
  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  const handleLogin = async values => {
    const { email, password } = values;
    login(email, password);
  };
  return <LoginView submit={handleLogin} />;
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(LoginConnector);
