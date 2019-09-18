import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Fab from '@material-ui/core/Fab';
import EditIcon from '@material-ui/icons/Edit';
import { Link } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '2rem',
    maxWidth: 345
  },
  actions: {
    display: 'flex',
    justifyContent: 'space-between'
  },
  fab: {
    backgroundColor: '#f44336',
    color: 'white',
    '&:hover': {
      backgroundColor: '#c62828'
    }
  }
}));

const RoutineCard = routine => {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardContent>
        <Typography gutterBottom variant='h5' component='h2'>
          {routine.routine.routineName}
        </Typography>
        <Typography variant='body2' color='textSecondary' component='p'>
          {routine.routine.description}
        </Typography>
      </CardContent>

      <CardActions className={classes.actions}>
        <Button
          size='small'
          color='primary'
          to={`/progress/${routine.routine._id}`}
          component={Link}
        >
          View Progress
        </Button>
        <Fab
          size='small'
          className={classes.fab}
          to={`/edit/${routine.routine._id}`}
          component={Link}
        >
          <EditIcon />
        </Fab>
      </CardActions>
    </Card>
  );
};

export default RoutineCard;
