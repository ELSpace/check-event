import React from 'react';
import { render } from 'react-dom';

// load project assets
import './assets';

import Dashboard from './dashboard/Dashboard';
import Register from './user/register/Register';

render(
  //<Dashboard />,   
  <Register />,
  document.getElementById('app')
);

// check if HMR is enabled
if(module.hot) {
  // accept itself 
  module.hot.accept();
  window.addEventListener('message', e => {
    console.clear();
  });
}