import React, { Fragment, useState } from 'react';
import { Link, Redirect } from 'react-router-dom';

import { connect } from 'react-redux';
import { setAlert } from '../../redux/actions/alert';
import { register } from '../../redux/actions/auth';

const Register = ({ setAlert, register, isAuthenticated }) => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    password: '',
    password2: ''
  });

  const { name, email, password, password2 } = formData;

  const onChange = e => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const onSubmit = e => {
    e.preventDefault();

    if (password !== password2) {
      setAlert('Passwords do not match', 'danger');
    } else {
      register({ name, email, password });
    }
  };

  if (isAuthenticated) {
    return <Redirect to='/dashboard'></Redirect>;
  }

  return (
    <Fragment>
      <section className='hero is-light is-fullheight-with-navbar'>
        <div className='hero-body'>
          <div className='container has-text-centered'>
            <div className='column is-4 is-offset-4 animated fadeIn'>
              <h3 className='title has-text-grey-darker'>Register</h3>
              <p className='subtitle has-text-grey-darker'>
                Just one more step...
              </p>
              <div className='box'>
                <figure className='avatar' style={{ padding: '1rem 0 2rem 0' }}>
                  <img src='https://placehold.it/128x128' alt='avatar' />
                </figure>
                <form onSubmit={e => onSubmit(e)}>
                  <div className='field'>
                    <div className='control has-icons-left'>
                      <input
                        type='text'
                        className='input is-medium'
                        placeholder='Enter your name'
                        name='name'
                        value={name}
                        onChange={e => onChange(e)}
                        autoFocus
                      />
                      <span className='icon is-small is-left'>
                        <i className='fa fa-user'></i>
                      </span>
                    </div>
                  </div>

                  <div className='field'>
                    <div className='control has-icons-left'>
                      <input
                        type='email'
                        className='input is-medium'
                        name='email'
                        value={email}
                        onChange={e => onChange(e)}
                        placeholder='Enter your email'
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
                        className='input is-medium'
                        name='password'
                        value={password}
                        onChange={e => onChange(e)}
                        placeholder='Enter your password'
                      />
                      <span className='icon is-small is-left'>
                        <i className='fa fa-key'></i>
                      </span>
                    </div>
                  </div>

                  <div className='field'>
                    <div className='control has-icons-left'>
                      <input
                        type='password'
                        name='password2'
                        value={password2}
                        onChange={e => onChange(e)}
                        className='input is-medium'
                        placeholder='Repeat the password'
                      />
                      <span className='icon is-small is-left'>
                        <i className='fa fa-lock'></i>
                      </span>
                    </div>
                  </div>
                  <button className='button is-block is-link is-medium is-fullwidth'>
                    Register
                  </button>
                </form>
                <p>
                  Already have an account? <Link to='/login'>LogIn Here</Link>{' '}
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
  { register, setAlert }
)(Register);
