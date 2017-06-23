import React from 'react';
import { render } from 'react-dom';

// load project assets
import './assets';

import Dashboard from './dashboard/Dashboard';
import Register from './user/register/Register';
import Login from './user/login/Login';


render(
  <Dashboard />,   
  //<Register />,
  //<Login />,
  document.getElementById('app')
);

// check if HMR is enabled
if(module.hot) {
  // accept itself 
  module.hot.accept();
}