import React, { useEffect } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import { selectAllExercises } from '../../redux/selectors/exercise';

import { fetchExercises } from '../../redux/actions/exercise';

const NewRoutinePage = ({ fetchExercises, exercises }) => {
  useEffect(() => {
    fetchExercises();
  }, []);
  return <div>{console.log(exercises)}</div>;
};

const mapStateToProps = createStructuredSelector({
  exercises: selectAllExercises
});

export default connect(
  mapStateToProps,
  { fetchExercises }
)(NewRoutinePage);
