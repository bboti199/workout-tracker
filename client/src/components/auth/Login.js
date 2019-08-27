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
      <section className='hero is-light is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='column is-4 is-offset-4'>
              <h3 className='title has-text-grey'>Login</h3>
              <p className='subtitle has-text-gre'>Please login to proceed.</p>
              <div className='box'>
                <figure className='avatar'>
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
                  <button className='button is-block is-success is-medium is-fullwidth'>
                    Log In
                  </button>
                </form>
                <p>
                  Don't have an account?{' '}
                  <Link to='/register'>Register Here</Link>{' '}
                </p>
              </div>
            </div>
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
