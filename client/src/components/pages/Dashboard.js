import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { fetchRoutines } from '../../redux/actions/routine';

import RoutineCard from '../routines/RoutineCard';
import EmptyRoutineCard from '../routines/EmptyRoutineCard';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  item: {
    padding: theme.spacing(3)
  }
}));

const Dashboard = ({ routines, loading, fetchRoutines }) => {
  useEffect(() => {
    fetchRoutines();
  }, []);
  const classes = useStyles();

  return loading ? (
    <div style={{ display: 'flex', justifyContent: 'center' }}>
      <CircularProgress />
    </div>
  ) : routines && routines.length > 0 ? (
    <div className={classes.root}>
      <Grid container>
        {routines.map(routine => (
          <Grid
            key={routine._id}
            item
            xs={9}
            sm={6}
            md={3}
            lg={3}
            className={classes.item}
          >
            <RoutineCard routine={routine} />
          </Grid>
        ))}
      </Grid>
    </div>
  ) : (
    <EmptyRoutineCard />
  );
};

const mapStateToProps = state => ({
  routines: state.routine.routines,
  loading: state.routine.loading
});

export default connect(
  mapStateToProps,
  { fetchRoutines }
)(Dashboard);
