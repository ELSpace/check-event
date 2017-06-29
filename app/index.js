import React from 'react';
import { render } from 'react-dom';
import {
  BrowserRouter as Router, 
  Route, 
  Link, 
  Switch
} from 'react-router-dom';
import { Provider } from 'mobx-react';

// global store
import Store from './store';

// load project assets
import './assets';

import Dashboard from './components/dashboard/Dashboard';
import Register from './components/user/register/Register';
import Login from './components/user/login/Login';

const store = new Store();

render(
  <Provider store={store}>
    <Router>
      <Switch>
        <Route path='/login' component={Login}/>
        <Route path='/register' component={Register}/>
        <Route path='/' component={Dashboard}/>
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