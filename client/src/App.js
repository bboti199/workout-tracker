import React from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from './components/pages/Landing';
import LoginConnector from './components/pages/Login/LoginConnector';
import RegisterConnector from './components/pages/Register/RegisterConnector';

import Navbar from './components/layout/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <Switch>
        <Route exact path='/' component={Landing} />
        <Route exact path='/login' component={LoginConnector} />
        <Route exact path='/register' component={RegisterConnector} />
      </Switch>
    </div>
  );
}

export default App;
