import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

import { Link as RouterLink } from 'react-router-dom';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  link: {
    '&:hover': {
      textDecoration: 'none'
    },
    textDecoration: 'none',
    color: 'inherit'
  },
  appBar: {
    position: 'relative',
    boxShadow: 'none',
    borderBottom: `1px solid ${theme.palette.grey['100']}`,
    backgroundColor: 'white'
  },
  tabItem: {
    paddingTop: 20,
    paddingBottom: 20,
    minWidth: 'auto'
  },
  rightSide: {
    marginLeft: 'auto',
    marginRight: -12
  }
}));

const Navbar = ({ isAuthenticated, logout }) => {
  const classes = useStyles();

  const guestLinks = (
    <Tabs
      indicatorColor='primary'
      textColor='primary'
      className={classes.rightSide}
      value={false}
    >
      <Tab
        key={1}
        component={RouterLink}
        to='/login'
        className={classes.tabItem}
        label='Login'
      />
      <Tab
        key={2}
        component={RouterLink}
        to='/register'
        className={classes.tabItem}
        label='Register'
      />
    </Tabs>
  );

  const authLinks = (
    <Tabs
      indicatorColor='primary'
      textColor='primary'
      className={classes.rightSide}
      value={false}
    >
      <Tab
        key={1}
        onClick={logout}
        className={classes.tabItem}
        label='Logout'
      />
    </Tabs>
  );

  return (
    <AppBar position='absolute' color='default' className={classes.appBar}>
      <Toolbar>
        <Link
          to={isAuthenticated ? '/dashboard' : '/'}
          component={RouterLink}
          className={classes.link}
        >
          <Typography variant='h6' className={classes.menuButton}>
            TrackR
          </Typography>
        </Link>

        {isAuthenticated ? authLinks : guestLinks}
      </Toolbar>
    </AppBar>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
