import React from 'react';
import { Link } from 'react-router-dom';

const RoutineCard = ({ routine }) => {
  return (
    <div
      className='card has-text-centered'
      style={{
        height: '100%',
        display: 'flex',
        flexDirection: 'column'
      }}
    >
      <div className='card-content'>
        <div className='content'>
          <p className='is-size-4'>{routine.routineName}</p>
        </div>
      </div>

      <footer className='card-footer' style={{ marginTop: 'auto' }}>
        <Link
          className='card-footer-item button is-light'
          to={`/edit/${routine._id}`}
        >
          Edit
        </Link>
        <Link
          className='card-footer-item button is-link'
          to={`/progress/${routine._id}`}
        >
          View Progress
        </Link>
      </footer>
    </div>
  );
};

export default RoutineCard;
