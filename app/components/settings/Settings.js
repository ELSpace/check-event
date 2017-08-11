import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

import AccountSettings from './account/AccountSettings';

import './style.css';

const Settings = () => 
  <div className="container-fluid settings">
    <Card>
      <CardBlock>
        <CardTitle>Settings</CardTitle>           
        <hr />        
        <br />
        <div className="row">
          <div className="col-md-2">
            <nav className="nav">              
              <Link className="nav-link flex-column active" to="/settings/account">
                <b>Account</b> <i className="fa fa-arrow-right"></i>
              </Link>
            </nav>
          </div>
          <div className="col-md-10 content">             
            <Switch>
              <Route path="/settings/account" component={AccountSettings}></Route>            
              <Redirect from="/" to="/settings/account" />
            </Switch>
          </div>
        </div>
      </CardBlock>
    </Card>
  </div>;

export default Settings;
