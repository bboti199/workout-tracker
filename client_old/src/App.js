import React, { Fragment, useEffect } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';

import Landing from './components/pages/Landing';
import Dashboard from './components/pages/Dashboard';
import Login from './components/auth/Login';
import Register from './components/auth/Register';
import Navbar from './components/layout/Navbar';
import Alert from './components/layout/Alert';

import PrivateRoute from './components/routing/PrivateRoute';

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
      <Router>
        <Fragment>
          <Navbar />
          <Alert />
          <Switch>
            <Route exact path='/' component={Landing} />
            <Route exact path='/register' component={Register} />
            <Route exact path='/login' component={Login} />
            <PrivateRoute
              exact
              path='/dashboard'
              component={Dashboard}
            ></PrivateRoute>
          </Switch>
        </Fragment>
      </Router>
    </Provider>
  );
}

export default App;
