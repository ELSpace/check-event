import React from 'react';

import Header from './Header';
import Social from './Social';
import Form from './Form';

import '../style.css';
import logo from '../../../assets/img/elspacelogo.png'


class Login extends React.Component {

  componentWillMount(){
    window.$('body').attr('class', 'login' );
  }

  render() { 
    return (
      <div>
        <div className="content">
          <Header src={logo} />
          <Form />
          <Social msg="Or login with"/>          
          <div className="create-account">
            <p>
              <a href="javascript:;" id="register-btn" className="uppercase">Create an account</a>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;