import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Container from '@material-ui/core/Container';

import Navigation from './components/layout/Navigation';
import Dashboard from './components/layout/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';

function App() {
  return (
    <div className='App'>
      <Navigation />
      <Container maxWidth={false}>
        <Switch>
          <Route exact path='/' component={Dashboard} />
          <Route exact path='/login' component={Login} />
          <Route exact path='/register' component={Register} />
        </Switch>
      </Container>
    </div>
  );
}

export default App;
