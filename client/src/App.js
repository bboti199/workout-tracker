import React, { useEffect, Fragment } from 'react';

import { Switch, Route } from 'react-router-dom';

import Landing from './components/pages/Landing';
import LoginConnector from './components/pages/Login/LoginConnector';
import RegisterConnector from './components/pages/Register/RegisterConnector';
import Dashboard from './components/pages/Dashboard';
import EditRoutine from './components/routines/EditRoutine';

import PrivateRoute from './components/routing/PrivateRoute';

import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

import { Provider } from 'react-redux';
import store from './redux/store';
import { loadUser } from './redux/actions/auth';

import setAuthToken from './utils/setAuthToken';

if (localStorage.token) {
  setAuthToken(localStorage.token);
}

function App() {
  useEffect(() => {
    store.dispatch(loadUser());
  }, []);
  return (
    <Provider store={store}>
      <Fragment>
        <Navbar />
        <Alert />
        <Switch>
          <Route exact path='/' component={Landing} />
          <Route exact path='/login' component={LoginConnector} />
          <Route exact path='/register' component={RegisterConnector} />
          <PrivateRoute exact path='/dashboard' component={Dashboard} />
          <PrivateRoute path='/edit/:id' component={EditRoutine} />
          <Route render={() => <h2>404 Page not Found</h2>} />
        </Switch>
      </Fragment>
    </Provider>
  );
}

export default App;
