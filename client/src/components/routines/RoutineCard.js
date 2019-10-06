import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import { Link } from 'react-router-dom';
import CloseIcon from '@material-ui/icons/Close';
import CardHeader from '@material-ui/core/CardHeader';
import IconButton from '@material-ui/core/IconButton';
import DeleteDialog from './DeleteDialog';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '2rem',
    maxWidth: 345
  },
  actions: {
    display: 'flex',
    justifyContent: 'flex-start'
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
  const [open, setOpen] = useState(false);

  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <React.Fragment>
      <DeleteDialog
        open={open}
        routine={routine.routine}
        handleClose={handleClose}
        setOpen={setOpen}
      />
      <Card className={classes.card}>
        <CardHeader
          title={
            <Typography gutterBottom variant='h5' component='h2'>
              {routine.routine.routineName}
            </Typography>
          }
          action={
            <IconButton onClick={handleClickOpen}>
              <CloseIcon />
            </IconButton>
          }
          subheader={
            <Typography variant='body2' color='textSecondary' component='p'>
              {routine.routine.description}
            </Typography>
          }
        />

        <CardActions className={classes.actions}>
          <Button
            size='small'
            color='primary'
            to={`/progress/${routine.routine._id}`}
            component={Link}
          >
            Progress
          </Button>
          {/* <Fab
          size='small'
          className={classes.fab}
          to={`/edit/${routine.routine._id}`}
          component={Link}
        >
          <EditIcon />
        </Fab> */}
          <Button
            size='small'
            color='secondary'
            variant='outlined'
            to={`/edit/${routine.routine._id}`}
            component={Link}
          >
            Update
          </Button>
        </CardActions>
      </Card>
    </React.Fragment>
  );
};

export default RoutineCard;
