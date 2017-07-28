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
      showActionButtons: false,
      disableFields: [
        'autocomplete',
        'file',
        'button',
        'date',
        'paragraph'
      ],
      
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
            <CardTitle>New Form</CardTitle>           
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
                <button onClick={this.createForm} className="btn btn-success">Create</button>
              </div>
            </div>
            <br />            
            <div className="row pt-5 pb-5">
              <div className="col-md-6 offset-md-3">
                <div id="builder"></div>
              </div>
            </div>
          </CardBlock>
        </Card>
      </div>
    );
  }
}

export default withRouter(New);