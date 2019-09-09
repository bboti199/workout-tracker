import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Link from '@material-ui/core/Link';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';

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

export default function Navbar(props) {
  const classes = useStyles();

  return (
    <AppBar position='absolute' color='default' className={classes.appBar}>
      <Toolbar>
        <Link to='/' component={RouterLink} className={classes.link}>
          <Typography variant='h6' className={classes.menuButton}>
            TrackR
          </Typography>
        </Link>

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
      </Toolbar>
    </AppBar>
  );
}
