import React, { useEffect } from 'react';

import Routines from '../routine/Routines';

import { connect } from 'react-redux';
import { fetchRoutines } from '../../redux/actions/routines';

const Dashboard = ({ fetchRoutines }) => {
  useEffect(() => {
    fetchRoutines();
  }, []);
  return (
    <div className='container'>
      <h1 className='is-size-3' style={{ marginBottom: '3rem' }}>
        Dashboard
      </h1>
      <Routines />
    </div>
  );
};

export default connect(
  null,
  { fetchRoutines }
)(Dashboard);
