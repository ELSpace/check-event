import React, { Component } from 'react';
import { render } from 'react-dom';
import './style.css';
import App from './App';
import { Provider } from 'mobx-react';
import { observable, action } from 'mobx';

class Store {
  @observable x = 4;

  @action.bound incr() {
    this.x++;
  }
}

const store = new Store();

render((
  <Provider store={store}>
    <App />
  </Provider>
), document.getElementById('app'));

// check if HMR is enabled
if(module.hot) {
  // accept itself 
  module.hot.accept();
  window.addEventListener('message', e => {
    console.clear();
  });
}