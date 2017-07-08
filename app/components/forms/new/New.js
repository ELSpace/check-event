import React, { Component } from 'react';
import { Content } from '../../../metronic/layout';
import {Link} from 'react-router-dom';

class New extends Component {
  
  render() {
    return (
      <Content.Item title="New Form" description="create a new form">
        <div className="row">
          <div className="col-md-6 col-md-offset-3">
            <div id="builder" ></div>
          </div>
        </div>
      </Content.Item>
    );
  }
  
  componentDidMount() {  
    $('#builder').formBuilder();
  }

}

export default New;