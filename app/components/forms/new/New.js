import React, { Component } from 'react';
import { Content } from '../../../metronic/layout';
import {Link} from 'react-router-dom';

let form;

class New extends Component {
  componentDidMount() {  
    form = $('#builder').formBuilder({
      showActionButtons: false
    });
  }



  render() {
    return (
      <Content.Item title="New Form" description="create a new form">        
        <div className="portlet light portlet-fit">
          <div className="portlet-title">
            <div className="caption">
              <span className="caption-subject font-red sbold uppercase">New Form</span>
            </div>
          </div>
          <div className="portlet-body">
            <div className="form-group row">
              <label className="col-sm-2 col-form-label">Form Name</label>
              <div className="col-sm-10">
                <input type="text" className="form-control" placeholder="name" />
                <br />
                <button className="btn btn-success">Create</button>
              </div>  
            </div>
            <hr />
            <div className="row">
              <div className="col-sm-6 col-md-offset-3">
                <div id="builder"></div>
              </div>
            </div>
          </div>
        </div>
      </Content.Item>
    );
  }
  


}

export default New;