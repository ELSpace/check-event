import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';

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
      <div className="container-fluid">
        <Card>
          <CardBlock>
            <CardTitle>Edit Form</CardTitle>           
            <hr/>
            <div className="row">
              <div className="col-md-1">
                <label>Form Name</label>
              </div>
              <div className="col-md-10">
                <input 
                  type="text" 
                  className="form-control" 
                  placeholder="name" 
                  ref="formName"
                />
              </div>
              <div className="col-md-1">
                <button onClick={this.createForm} className="btn btn-success">Save Changes</button>
              </div>
            </div>
            <br />
            <div id="builder"></div>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default withRouter(New);