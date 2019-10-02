import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import {
  selectAllExercises,
  selectLoading
} from '../../../redux/selectors/exercise';

import { fetchExercises } from '../../../redux/actions/exercise';

import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import SearchBar from './SearchBar';
import CircularProgress from '@material-ui/core/CircularProgress';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  paper: {
    padding: theme.spacing(2),
    textAlign: 'center',
    color: theme.palette.text.secondary
  }
}));

const NewRoutinePage = ({ fetchExercises, exercises, loading }) => {
  const classes = useStyles();

  useEffect(() => {
    fetchExercises();
  }, []);

  if (loading || exercises.length === 0) {
    return (
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <CircularProgress />
      </div>
    );
  }

  return (
    <Grid
      container
      direction='column'
      justify='center'
      alignItems='center'
      className={classes.root}
    >
      <Grid item xs={12} sm={12}>
        <SearchBar data={exercises} />
      </Grid>
    </Grid>
  );
};

const mapStateToProps = createStructuredSelector({
  exercises: selectAllExercises,
  loading: selectLoading
});

export default connect(
  mapStateToProps,
  { fetchExercises }
)(NewRoutinePage);
