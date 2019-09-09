import React from 'react';

import { LoginView } from './LoginView';

const LoginConnector = () => {
  const dummySubmit = async values => {
    console.log(values);
  };
  return <LoginView submit={dummySubmit} />;
};

export default LoginConnector;
