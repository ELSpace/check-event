import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';
import { Route, Link, Switch, Redirect } from 'react-router-dom';

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
              <Link className="nav-link flex-column active" to="/settings/account">Account</Link>
              <Link className="nav-link" to="/settings/page">Page</Link>
            </nav>
          </div>
          <div className="col-md-10">             
            <Switch>
              <Route path="/settings/page" component={() => <h1>Page settings</h1>}></Route>
              <Route path="/settings/account" component={() => <h1>Account settings</h1>}></Route>            
              <Redirect from="/" to="/settings/account" />
            </Switch>
          </div>
        </div>
      </CardBlock>
    </Card>
  </div>;

export default Settings;
