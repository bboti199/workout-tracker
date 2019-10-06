import React from 'react';
import Card from '@material-ui/core/Card';
import Typography from '@material-ui/core/Typography';
import CardHeader from '@material-ui/core/CardHeader';
import { makeStyles } from '@material-ui/core/styles';

const useStyles = makeStyles(theme => ({
  card: {
    marginTop: '2rem',
    maxWidth: 345,
    marginLeft: '2rem'
  }
}));

const EmptyRoutineCard = () => {
  const classes = useStyles();
  return (
    <Card className={classes.card}>
      <CardHeader
        title={
          <Typography gutterBottom variant='h5' component='h2'>
            No routines found...
          </Typography>
        }
        subheader={
          <Typography variant='body2' color='textSecondary' component='p'>
            You can create a new routine by clicking the + icon
          </Typography>
        }
      />
    </Card>
  );
};

export default EmptyRoutineCard;
