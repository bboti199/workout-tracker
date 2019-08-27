import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';

import Cover from '../../assets/cover.jpg';

const style = {
  backgroundImage: `url(${Cover})`,
  backgroundSize: 'cover'
};

const subheadingStyle = {
  marginTop: '1rem',
  marginBottom: '3rem'
};

const Landing = () => {
  return (
    <Fragment>
      <div className='hero is-fullheight-with-navbar'>
        <div className='hero-body' style={style}>
          <div className='container has-text-centered '>
            <h1 className='is-size-1-tablet has-text-white has-background-black animated fadeInLeft slow'>
              Tired of completing sheets for tracking your Gym Progress?
            </h1>
            <h2
              style={subheadingStyle}
              className='is-size-3-tablet has-text-white has-background-black is-inline-block animated fadeInRight delay-1s'
            >
              Use our app to speed up the process!
            </h2>
            <div className='has-text-centered animated fadeInUp delay-2s'>
              <Link
                to='/login'
                className='button is-light is-large has-text-black animated pulse delay-3s'
              >
                Get Started!
              </Link>
            </div>
          </div>
        </div>
      </div>
    </Fragment>
  );
};

export default Landing;
