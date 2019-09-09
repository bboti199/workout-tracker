import React from 'react';

const RoutineCardEmpty = () => {
  return (
    <div
      className='card has-text-centered'
      style={{
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center'
      }}
    >
      <div className='card-content'>
        <div className='content'>
          <p>You do not have any routines...</p>
          <button className='button is-success'>Create One!</button>
        </div>
      </div>
    </div>
  );
};

export default RoutineCardEmpty;
