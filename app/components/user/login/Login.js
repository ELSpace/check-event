import toastr from 'toastr';
import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { inject, observer } from 'mobx-react';
import { withRouter } from 'react-router-dom';
import MyForm from 'mobx-react-form';
import logo from '../../../assets/img/avatars/elspacelogo.png'


import Header from './Header';
import Form from './Form';


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
    //window.$('body').attr('class', '');    
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
        <div className="app flex-row align-items-center">
          <div className="container">
            <div className="row justify-content-center">
              <div className="col-md-12">
                <div className="card-group mb-0">
                  <div className="card p-4">
                    <div className="card-block">
                      <Header />
                      <Form form={instance}/> 
                    </div>
                  </div>
                  <div className="card card-inverse card-primary py-5 d-md-down" style={{ width: 100 + '%' }}>
                    <div className="card-block text-center">
                      <div> 
                        <img src={logo} className="img-fluid" width="120" height="120"/>  
                        <hr/>                     
                        <h2>Sign up</h2>
                        <p className="text-justify">El Space Forms is a tool that lets you manage your events by creating custom forms and publish them anywhere you want ,  More importantly  it's an OPEN SOURCE tool for devs who want to play around and improve it ;)</p>
                        <Link to="/register"><button type="button" className="btn btn-primary active mt-3">Register Now!</button></Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*<div className="content">
          <Header src={logo} />
          
          <Social msg="Or Login With"/>                
          <div className="create-account">
            <p>
              <Link to ='/register' className="uppercase">
                 Create an account
              </Link>
            </p>
          </div>
        </div>*/}
      </div>
    )
  }

}

export default withRouter(Login);