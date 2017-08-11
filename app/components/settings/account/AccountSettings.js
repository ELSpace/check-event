import React, { Component } from 'react';
import { FormGroup, Label, Input } from 'reactstrap';
import { observer, inject } from 'mobx-react';
import MyForm from 'mobx-react-form';
import Form from './Form';
import plugins from '../../../common/validator';
import fields from './validation';

let instance = null;

@inject(allStores => ({user: allStores.store.user}))
@observer
class AccountSettings extends Component {
  componentWillMount() {
    this.props.user.profile();
  }

  componentDidMount() {    
    const { user } = this.props.user;
    const self = this;
    
    const onSubmit = {
      onSuccess(form) {
        const values = form.values();
        console.log(values);
        /*user.patch(values)
          .then(() => {
            toastr.success(`Account created! welcome ${values.fullname}`);
            self.props.history.push('/');
          })
          .catch(e => {
            console.log(e);
            toastr.error(e.message);
          });*/
      },
      onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
        // invalidate the form with a custom error message
        form.invalidate('This is a generic error message!');
      }
    }

    instance = this.props.user.user && new MyForm({ fields: fields(this.props.user.user) }, { plugins, onSubmit });
  }

  onChange(event) {
    const value = event.target.value;
    const name = event.target.name;
    this.props.user.user[name] = value;
  }

  render() {
    const user = this.props.user.user || {};

    this.onChange = this.onChange.bind(this);    
    return (
      <div>
        <h5>Account Settings</h5>
        <hr />
        <br />
        {instance && <Form form={instance} />}
      </div>
    );
  }
}

export default AccountSettings;