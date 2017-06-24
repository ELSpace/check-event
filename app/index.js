import React from 'react';
import { render } from 'react-dom';
import {BrowserRouter as Router,Route,Link,Switch} from 'react-router-dom';

// load project assets
import './assets';

import Dashboard from './dashboard/Dashboard';
import Register from './user/register/Register';
import Login from './user/login/Login';


render(
  <Router>
   <Switch>
        <Route exact path='/' component={Dashboard}/>
         <Route path='/login' component={Login}/>
         <Route path='/register' component={Register}/>
   </Switch>
</Router>
  ,document.getElementById('app')
);

// check if HMR is enabled
if(module.hot) {
  // accept itself 
  module.hot.accept();
}