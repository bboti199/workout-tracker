import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { login } from '../../redux/actions/auth';

const Login = ({ login, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });

  const { email, password } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    login(email, password);
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard' />;
  }

  return (
    <Fragment>
      <section className='columns is-desktop is-vcentered has-background-black-ter'>
        <div
          className='column is-8 is-hidden-mobile'
          style={{
            backgroundImage:
              'url(https://images.unsplash.com/photo-1547919307-1ecb10702e6f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2134&q=80)',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            height: '94vh'
          }}
        ></div>
        <div
          className='column is-3-desktop has-text-centered is-full-mobile animated fadeInDown'
          style={{ margin: 'auto' }}
        >
          <h3 className='title has-text-grey-lighter'>Log In</h3>
          <p className='subtitle has-text-grey-lighter'>
            Please login to proceed.
          </p>
          <div className='box'>
            <figure className='avatar' style={{ marginBottom: '2rem' }}>
              <img src='https://placehold.it/128x128' alt='avatar' />
            </figure>
            <form onSubmit={e => onSubmit(e)}>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input
                    type='text'
                    name='email'
                    value={email}
                    onChange={e => onChange(e)}
                    className='input is-medium'
                    placeholder='Enter your email'
                    autoFocus
                  />
                  <span className='icon is-small is-left'>
                    <i className='fa fa-envelope'></i>
                  </span>
                </div>
              </div>
              <div className='field'>
                <div className='control has-icons-left'>
                  <input
                    type='password'
                    name='password'
                    value={password}
                    onChange={e => onChange(e)}
                    className='input is-medium'
                    placeholder='Enter your password'
                  />
                  <span className='icon is-small is-left'>
                    <i className='fa fa-key'></i>
                  </span>
                </div>
              </div>
              <button
                className='button is-block is-success is-medium is-fullwidth'
                style={{ marginTop: '2rem' }}
              >
                Log In
              </button>
            </form>
            <p>
              Don't have an account? <Link to='/register'>Register Here</Link>{' '}
            </p>
          </div>
        </div>
      </section>
    </Fragment>
  );
};

const mapStateToProps = state => ({
  isAuthenticated: state.auth.isAuthenticated
});

export default connect(
  mapStateToProps,
  { login }
)(Login);
