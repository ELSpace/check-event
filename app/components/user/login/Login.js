import React from 'react';
import {Link} from 'react-router-dom';
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
              <Link to ='/register'>
              <a href="javascript:;" id="register-btn" className="uppercase">Create an account</a>
              </Link>
            </p>
          </div>
        </div>
      </div>
    )
  }
}

export default Login;