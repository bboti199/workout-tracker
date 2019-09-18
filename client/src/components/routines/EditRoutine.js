import React, { useEffect, useState } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Typography from '@material-ui/core/Typography';
import Grid from '@material-ui/core/Grid';
import Paper from '@material-ui/core/Paper';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { fetchRoutines } from '../../redux/actions/routine';

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
  match: { params },
  fetchRoutines,
  fetching,
  routines
}) => {
  const [routineData, setRoutineData] = useState(null);
  const [loading, setLoading] = useState(true);
  const classes = useStyles();

  useEffect(() => {
    fetchRoutines();
  }, []);

  useEffect(() => {
    const rData = routines.find(routine => routine._id === params.id);
    setRoutineData({
      ...rData
    });
    setLoading(false);
  }, [routines]);

  return loading || fetching ? (
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
          {routineData.routineName}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {routineData.description}
        </Typography>

        {routineData.routine && routineData.routine.length > 0 ? (
          routineData.routine.map(rData => (
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

const mapStateToProps = state => ({
  routines: state.routine.routines,
  fetching: state.routine.loading
});

export default connect(
  mapStateToProps,
  { fetchRoutines }
)(EditRoutine);
