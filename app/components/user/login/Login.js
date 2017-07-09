import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import Header from './Header';
import Social from './Social';
import MyForm from './MyForm';
import Form from './Form';
import toastr from 'toastr';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';

import '../style.css';
import logo from '../../../assets/img/elspacelogo.png';
import plugins from '../../../common/validator';
const fields = [{
  name: 'email',
  label: 'Email',
  placeholder: 'Email',
  rules: 'required|email|string|between:5,50',
}, {
  name: 'password',
  label: 'Password',
  placeholder: 'Password',
  rules: 'required|string|between:8,64',
}];

let instance;

@inject('store')
@observer
class Login extends Component {

  componentWillMount(){
    window.$('body').attr('class', 'login');    
    const { user } = this.props.store;
    const self = this;
    
    const onSubmit = {
      onSuccess(form) {
        const values = form.values();
        user.login(values)
          .then(() => {
            self.props.history.push('/');
          })
          .catch(e => {
            toastr.error(e.message);
          }); 
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
    return (
      <div>
        <div className="content">
          <Header src={logo} />
          <Form form={instance}/> 
          <Social msg="Or Login With"/>                
          <div className="create-account">
            <p>
              <Link to ='/register' className="uppercase">
                 Create an account
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }

}

export default withRouter(Login);