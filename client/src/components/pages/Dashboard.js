import React, { useEffect } from 'react';
import CircularProgress from '@material-ui/core/CircularProgress';
import Grid from '@material-ui/core/Grid';
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import Tooltip from '@material-ui/core/Tooltip';

import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';
import { fetchRoutines } from '../../redux/actions/routine';
import { createStructuredSelector } from 'reselect';
import {
  selectAllRoutines,
  selectLoading
} from '../../redux/selectors/routine';

import RoutineCard from '../routines/RoutineCard';
import EmptyRoutineCard from '../routines/EmptyRoutineCard';

import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  item: {
    padding: theme.spacing(3)
  },
  fab: {
    position: 'absolute',
    bottom: theme.spacing(8),
    right: theme.spacing(10)
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
      <Tooltip title='New routine' aria-label='add' placement='left'>
        <Fab
          className={classes.fab}
          color='primary'
          to='/create'
          component={Link}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </div>
  ) : (
    <React.Fragment>
      <EmptyRoutineCard />
      <Tooltip title='New routine' aria-label='add' placement='left'>
        <Fab
          className={classes.fab}
          color='primary'
          to='/create'
          component={Link}
        >
          <AddIcon />
        </Fab>
      </Tooltip>
    </React.Fragment>
  );
};

const mapStateToProps = createStructuredSelector({
  loading: selectLoading,
  routines: selectAllRoutines
});

export default connect(
  mapStateToProps,
  { fetchRoutines }
)(Dashboard);
