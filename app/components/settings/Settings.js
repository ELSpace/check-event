import React from 'react';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';

const Settings = () => 
  <div className="container-fluid">
    <Card>
      <CardBlock>
        <CardTitle>Settings</CardTitle>           
        <hr/>        
        <br />
        <div className="row">
          <div className="col-md-4">
            <nav className="nav flex-column">
              <a className="nav-link active" href="#">Active</a>
              <a className="nav-link" href="#">Link</a>
              <a className="nav-link" href="#">Link</a>
              <a className="nav-link disabled" href="#">Disabled</a>
            </nav>
          </div>
          <div className="col-md-8">
            <h2>huzzaj</h2>
          </div>
        </div>
      </CardBlock>
    </Card>
  </div>;

export default Settings;