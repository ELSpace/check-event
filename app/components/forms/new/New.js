import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
let form;

@inject('store')
@observer
class New extends Component {
  componentDidMount() {  
    form = $('#builder').formBuilder({
      showActionButtons: false
    });
  }

  createForm() {
    const name = this.refs.formName.value;

    if (name === "") alert('enter form name please');
    else this.props.store.form.create(name, form.actions.getData())
      .then(() => {
        this.props.history.push('/forms');
      });    
  }

  render() {
    this.createForm = this.createForm.bind(this);

    return (
              
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
                <input type="text" className="form-control" placeholder="name" ref="formName"/>
                <br />
                <button onClick={this.createForm} className="btn btn-success">Create</button>
                <Link to='/forms'>
                <button  className="btn btn-info">Display Forms Table</button>
                </Link>
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
  
    );
  }
  

}

export default withRouter(New);