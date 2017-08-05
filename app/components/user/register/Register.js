import React from 'react';
import Form from './Form';
import MyForm from 'mobx-react-form';
import fields from './validation';
import plugins from '../../../common/validator';
import logo from '../../../assets/img/elspacelogo.png'
import { observer, inject } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import toastr from 'toastr';

import Header from './Header';

let instance;

@inject('store')
@observer
class Register extends React.Component {
  
  componentWillMount() {
    const { user } = this.props.store;
    const self = this;
    
    const onSubmit = {
      onSuccess(form) {
        const values = form.values();
        console.log(values);
        /*user.register(values)
          .then(() => {
            toastr.success(`Account created! welcome ${values.fullname}`);
            self.props.history.push('/');
          })
          .catch(e => {
            console.log(e);
            toastr.error(e.message);
          }); */
      },
      onError(form) {
        // get all form errors
        console.log('All form errors', form.errors());
        // invalidate the form with a custom error message
        form.invalidate('This is a generic error message!');
      }
    }

    instance = new MyForm({ fields }, { plugins, onSubmit });
    
  }

  render() { 
    return(
      <div className="app flex-row align-items-center">
        <div className="container">
          <div className="row justify-content-center">
            <div className="col-md-6">
              <div className="card mx-4">
                <div className="card-block p-4">
                  <Header />
                  <Form form={instance}/>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default withRouter(Register);