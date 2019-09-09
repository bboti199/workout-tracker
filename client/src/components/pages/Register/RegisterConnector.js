import React from 'react';

import { RegisterView } from './RegisterView';

const RegisterConnector = () => {
  const dummySubmit = async values => {
    console.log(values);
  };
  return <RegisterView submit={dummySubmit} />;
};

export default RegisterConnector;
