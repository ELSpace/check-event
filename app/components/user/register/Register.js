import React from 'react';
import Header from '../login/Header';
import Form from './Form';
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
          <Form />      
                  
        </div>
      </div>
    
    )
  }
}

export default Register;