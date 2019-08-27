import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import { connect } from 'react-redux';
import { logout } from '../../redux/actions/auth';

import Logo from '../../assets/logo.png';

const Navbar = ({ auth: { isAuthenticated, loading }, logout }) => {
  const authLinks = (
    <Fragment>
      <Link to='/routines' className='navbar-item'>
        Routines
      </Link>
      <Link to='/progress' className='navbar-item'>
        My Progress
      </Link>
      <div className='buttons'>
        <Link to='/login' onClick={logout} className='button is-light '>
          Sign Out
        </Link>
      </div>
    </Fragment>
  );

  const guestLinks = (
    <Fragment>
      <div className='buttons'>
        <Link to='/register' className='button is-info'>
          <strong>Register</strong>
        </Link>
        <Link to='/login' className='button is-light'>
          Log in
        </Link>
      </div>
    </Fragment>
  );

  return (
    <Fragment>
      <nav className='navbar is-transparent' role='navigation'>
        <div>
          <div className='navbar-item'>
            <img src={Logo} alt='logo' className='navbar-brand' />
          </div>
        </div>
        <div className='navbar-menu'>
          <div className='navbar-start'>
            {!loading &&
              (isAuthenticated ? (
                <Link className='navbar-item' to='/dashboard'>
                  Home
                </Link>
              ) : (
                <Link className='navbar-item' to='/'>
                  Home
                </Link>
              ))}
          </div>
          <div className='navbar-end'>
            <div className='navbar-item'>
              {!loading && (isAuthenticated ? authLinks : guestLinks)}
            </div>
          </div>
        </div>
      </nav>
    </Fragment>
  );
};
const mapStateToProps = state => ({
  auth: state.auth
});

export default connect(
  mapStateToProps,
  { logout }
)(Navbar);
