import React from 'react';
import Header from '../login/Header';
import Form from './Form';
import MyForm from './MyForm';
import '../style.css';
import logo from '../../../assets/img/elspacelogo.png'

class Register extends React.Component {
  componentWillMount(){
    window.$('body').attr('class', 'login' );
  }
  render() { 
    return(
      <div>
        <div className="content">
          <Header src={logo} />
          <Form form={MyForm}/>                  
        </div>
      </div>
    )
  }
}

export default Register;