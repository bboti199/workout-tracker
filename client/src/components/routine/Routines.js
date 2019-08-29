import React, { useEffect } from 'react';

import RoutineCard from './RoutineCard';
import RoutineCardEmtpy from './RoutineCardEmpty';
import WithSpinner from '../hoc/WithSpinner';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import {
  selectRoutines,
  selectRoutinesLoading
} from '../../redux/selectors/routines';

const Routines = ({ routines }) => {
  return (
    <div className='columns'>
      {routines.length !== 0 ? (
        routines.map(routine => (
          <div
            key={routine._id}
            className='column is-4 animated fadeIn'
            style={{ height: '250px' }}
          >
            <RoutineCard routine={routine} />
          </div>
        ))
      ) : (
        <div className='column is-4' style={{ height: '250px' }}>
          <RoutineCardEmtpy />
        </div>
      )}
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: state => selectRoutinesLoading(state),
  routines: state => selectRoutines(state)
});

export default connect(mapStateToProps)(WithSpinner(Routines));
