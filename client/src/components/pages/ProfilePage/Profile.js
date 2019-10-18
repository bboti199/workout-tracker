import React from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import Avatar from '@material-ui/core/Avatar';
import Typography from '@material-ui/core/Typography';
import { makeStyles } from '@material-ui/core/styles';

import { connect } from 'react-redux';

const useStyles = makeStyles({
  root: {
    margin: '3rem auto',
    width: '60vw'
  },
  avatar: {
    width: 90,
    height: 90,
    margin: '1rem auto'
  }
});

const Profile = ({ user }) => {
  const classes = useStyles();
  return (
    user && (
      <Card className={classes.root}>
        <Grid
          container
          direction='row'
          justify='center'
          alignItems='flex-start'
        >
          <Grid item xs={12} lg={2}>
            <Avatar alt='avatar' src={user.avatar} className={classes.avatar} />
          </Grid>
          <Grid item xs={12} lg={10} style={{ margin: '2rem auto' }}>
            <Grid
              container
              direction='column'
              justify='center'
              alignItems='center'
            >
              <Grid item xs={12}>
                <Typography variant='h4'>{user.name}</Typography>
              </Grid>
              <Grid item xs={12}>
                <Typography
                  variant='body1'
                  style={{ color: 'rgba(0,0,0,0.5)' }}
                >
                  {user.email}
                </Typography>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Card>
    )
  );
};

const mapStateToProps = state => ({
  user: state.auth.user
});

export default connect(mapStateToProps)(Profile);
