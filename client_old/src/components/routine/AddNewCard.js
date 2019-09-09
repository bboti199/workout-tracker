import React from 'react';

const AddNewCard = () => {
  return (
    <div className='column is-4 animated fadeIn delay-1s'>
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
            <p>Add a new routine</p>
            <button className='button is-success is-rounded'>
              <span className='fa fa-plus'></span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddNewCard;
