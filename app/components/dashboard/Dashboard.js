import React, { Component } from 'react';
import { Route } from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import Header from '../../ui/Header/Header';
import Sidebar from '../../ui/Sidebar/Sidebar';
import Breadcrumb from '../../ui/Breadcrumb/Breadcrumb';
//import Breadcrumb from '../../ui/Breadcrumb/Breadcrumb'
import {Main} from 'reactstrap';

// components
//import Main from '../main/Main';
import Forms from '../forms/Forms';
import Settings from '../settings/Settings';
import New from '../forms/new/New';
import Edit from '../forms/edit/Edit';
import Entries from '../forms/entries/Entries';


import { routes, actions, profileItems } from '../../common';

@inject('store')
@observer
class Dashboard extends Component {
  
  componentWillMount() {
    this.props.store.user.profile();
  }
  
  render() {
    return (
      <div className="app">
        <Header />
        <div className="app-body">
          <Sidebar {...this.props}/>
          <div className="main">
            <Breadcrumb />
            <Route path='/home' component={() => <h1>Home</h1>}/>
            <Route exact path='/forms' component={Forms}/>
            <Route path='/forms/new' component={New}/>
            <Route path='/forms/:id/edit' component={Edit}/>
            <Route path='/entries/:form' component={Entries}/>
            <Route path='/settings' component={Settings}/>
          </div>
        </div>
      </div>
    );
  }
}

export default Dashboard;
