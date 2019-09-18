import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';

import { connect } from 'react-redux';
import { fetchRoutines } from '../../redux/actions/routine';

const Dashboard = ({ fetchExercises, exercises, loading, fetchRoutines }) => {
  useEffect(() => {
    fetchRoutines();
  }, []);

  return <div>{loading ? <CircularProgress /> : <h1>Fetched</h1>}</div>;
};

const mapStateToProps = state => ({
  exercises: state.exercise.exercises,
  loading: state.routine.loading
});

export default connect(
  mapStateToProps,
  { fetchRoutines }
)(Dashboard);
