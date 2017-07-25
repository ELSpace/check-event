import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import { Card, CardTitle, CardSubtitle, CardBlock } from 'reactstrap';

let renderedForm;

@inject(allStores => ({form: allStores.store.form}))
@observer
class New extends Component {
  componentDidMount() {
    
    const { match, form } = this.props;
    const id = match.params.id;

    renderedForm = $('#builder').formBuilder({
      showActionButtons: false
    });

    form.getSingle(id)
      .then(fields => {
        console.log(fields);
        renderedForm.actions.setData(JSON.stringify(fields))
      });
  }

  updateForm() {
    const name = this.refs.formName.value;

    if (name === "") alert('enter form name please');
    else this.props.store.form.create(name, form.actions.getData())
      .then(() => {
        this.props.history.push('/forms');
      });    
  }

  render() {
    this.updateForm = this.updateForm.bind(this);

    return (
      <div className="container-fluid">
        <Card>
          <CardBlock>
            <CardTitle>Edit Form</CardTitle>           
            <hr/>
            <div className="row">
              <div className="col-md-2">
                <label>Form Name</label>
              </div>
              <div className="col-md-8">
                <input 
                  type="text"
                  value={this.props.form.singleForm && this.props.form.singleForm.name}
                  className="form-control" 
                  placeholder="name" 
                  ref="formName"
                />
              </div>
              <div className="col-md-1">
                <button onClick={this.updateForm} className="btn btn-success">Save Changes</button>
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