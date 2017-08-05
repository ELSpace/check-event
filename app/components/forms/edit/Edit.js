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
      showActionButtons: false,
      disableFields: [
        'autocomplete',
        'file',
        'button',
        'date',
        'paragraph'
      ],
    });

    form.getSingle(id)
      .then(fields => {
        console.log(fields);
        renderedForm.actions.setData(JSON.stringify(fields))
      });
  }

  updateForm() {
    const name = this.props.form.singleForm.name;
    const id = this.props.form.singleForm._id;
    const data = renderedForm.actions.getData()
    
    if (data.length == 0) {
      alert('please create the form fields');
      return;
    }
    

    if (name === "") alert('enter form name please');
    else this.props.form.update(
      id,
      name, 
      renderedForm.actions.getData()
    ).then(() => {
      this.props.history.push('/forms');
    });
  }

  change(event) {
    this.props.form.singleForm.name = event.target.value;
  }

  render() {
    this.updateForm = this.updateForm.bind(this);
    this.change = this.change.bind(this);

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
                  onChange={this.change}
                  className="form-control" 
                  placeholder="name"
                />
              </div>
              <div className="col-md-1">
                <button onClick={this.updateForm} className="btn btn-success">Save Changes</button>
              </div>
            </div>
            <br />
            <div className="row pt-5 pb-5">
              <div className="col-md-8 offset-md-2">
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