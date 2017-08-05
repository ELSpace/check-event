import React, { Component } from 'react';
import { observer, inject } from 'mobx-react';
import Form from './Form';
import formGenerator from '../../../common/formGenerator';

import './style.css';

@inject(({store}) => ({
  form: store.form
}))
@observer
class Display extends Component {

  componentWillMount() {
    window.$('body').css('background', '#ffffff');
    const { match, form } = this.props;
    const param = match.params.form;
    form.getSingle(param);
  }

  onSuccess(form) {
    const values = form.values();
    console.log(values);
  }

  onError() {
    console.log('errar');
  }

  render() {
    return <div className="container display">
      <div className="row pt-5">
        <div className="col-md-6 offset-md-3 form">
          <h2 className="text-center"><b>{this.props.form.singleForm && this.props.form.singleForm.name}</b></h2>
          <hr />
          { 
            this.props.form.singleForm && 
            <Form 
              form={formGenerator.generate(
                this.props.form.singleForm.fields,
                this.onSuccess,
                this.onError
              )}
              fields={this.props.form.singleForm.fields}
            >
            </Form>
          }
          <br />
          <br />
          <br />
        </div>
      </div>
    </div>          
  }

}

export default Display;

