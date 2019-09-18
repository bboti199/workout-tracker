import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';
import { fetchSingleRoutine } from '../../redux/actions/routine';
import {
  selectSingleRoutineLoading,
  selectSingleRoutine
} from '../../redux/selectors/routine';

import ExerciseUpdateCard from './ExerciseUpdateCard';

const useStyles = makeStyles(theme => ({
  root: {
    marginTop: '2rem'
  },
  paper: {
    padding: theme.spacing(3, 2)
  }
}));

const EditRoutine = ({
  routine,
  fetchSingleRoutine,
  loading,
  match: { params }
}) => {
  const classes = useStyles();

  useEffect(() => {
    fetchSingleRoutine(params.id);
  }, []);

  return loading || !routine ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  ) : (
    <div>
      <Grid
        className={classes.root}
        container
        direction='column'
        justify='center'
        alignItems='center'
      >
        <Typography gutterBottom variant='h5' component='h2'>
          {routine.routineName}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {routine.description}
        </Typography>

        {routine.routine && routine.routine.length > 0 ? (
          routine.routine.map(rData => (
            <Grid
              key={rData._id}
              style={{ marginTop: '1rem' }}
              item
              xs={12}
              sm={12}
              md={12}
              lg={12}
            >
              <ExerciseUpdateCard exerciseData={rData} />
            </Grid>
          ))
        ) : (
          <Paper className={classes.paper}>Fetching routine data...</Paper>
        )}
      </Grid>
    </div>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectSingleRoutineLoading,
  routine: selectSingleRoutine
});

export default connect(
  mapStateToProps,
  { fetchSingleRoutine }
)(EditRoutine);
