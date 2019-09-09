import React, { useState, useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

import { Link as RouterLink } from 'react-router-dom';

import Cover from '../../assets/cover.jpg';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
    overflow: 'hidden'
  },
  landing: {
    backgroundImage: `url(${Cover})`,
    backgroundSize: 'cover',
    height: '93vh'
  },
  text: {
    color: '#fff',
    backgroundColor: '#000',
    textAlign: 'center',
    margin: '2rem auto',
    padding: '.8rem 0',
    fontWeight: 400,
    fontFamily: 'Nunito'
  },
  progress: {
    margin: theme.spacing(2)
  }
}));

const Landing = () => {
  const classes = useStyles();

  const [{ loading }, setState] = useState({ loading: true });

  useEffect(() => {
    const bg = new Image();
    bg.src = Cover;

    bg.onload = () => {
      setState({ loading: false });
    };
  }, []);

  return (
    <div className={classes.root}>
      {loading ? (
        <CircularProgress className={classes.progress} />
      ) : (
        <Grid
          container
          direction='column'
          justify='center'
          alignItems='center'
          className={classes.landing}
        >
          <Typography
            variant='h2'
            component='h2'
            className={`${classes.text} animated fadeInLeft`}
          >
            Tired of completing sheets for tracking your Gym Progress?
          </Typography>

          <Typography
            variant='h4'
            component='h1'
            className={`${classes.text} animated fadeInRight`}
          >
            Use our app to speed up the process!
          </Typography>
          <Button
            color='default'
            variant='contained'
            size='large'
            to='/register'
            component={RouterLink}
            className='animated fadeInUp delay-1s'
          >
            Get Started!
          </Button>
        </Grid>
      )}
    </div>
  );
};

export default Landing;
