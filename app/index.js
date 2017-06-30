import React from 'react';
import { render } from 'react-dom';
import { Provider } from 'mobx-react';
import { PrivateRoute } from './common';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';

// global store
import Store from './store';

// load project assets
import './assets';

// Importing main components

import Dashboard from './components/dashboard/Dashboard';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';
import Forget from './components/user/forgetpassword/Forget';

const store = new Store();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/forget' component={Forget}/>
        <PrivateRoute 
          path='/' 
          component={Dashboard} 
          isAuthenticated={false} 
          redirectTo='/login'
        />
      </Switch>
    </Router>
  </Provider>,
   
  document.getElementById('app')
);

// check if HMR is enabled
if(module.hot) {
  // accept itself 
  module.hot.accept();
}