import React from 'react';

import { SpinnerContainer, SpinnerOverlay } from './WithSpinnerStyle';

const WithSpinner = WrappedComponent => {
  const Spinner = ({ loading, ...otherProps }) => {
    return loading ? (
      <SpinnerOverlay>
        <SpinnerContainer />
      </SpinnerOverlay>
    ) : (
      <WrappedComponent {...otherProps} />
    );
  };
  return Spinner;
};

export default WithSpinner;
