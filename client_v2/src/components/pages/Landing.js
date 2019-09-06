import React from 'react';

import Cover from '../../assets/cover.jpg';

const style = {
  backgroundImage: `url (${Cover})`,
  backgroundSize: 'cover'
};

const Landing = () => {
  return (
    <div style={style}>
      <p>Landing page</p>
      <img src={Cover} alt='vg' />
    </div>
  );
};

export default Landing;
