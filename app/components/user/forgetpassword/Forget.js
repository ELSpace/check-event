import React from 'react';
import Header from '../login/Header';
import Form from './Form';
import {Link} from 'react-router-dom';
import '../style.css';
import logo from '../../../assets/img/elspacelogo.png'

class Forget extends React.Component {

  componentWillMount(){
    window.$('body').attr('class', 'login' );
  }

  render() { 
    return (
      <div>
        <div className="content">
          <Header src={logo} />
          <Form />
           <div className="form-actions">
          <Link to ='./login'>
          <button type="button" id="back-btn" className="btn green btn-outline">Back</button>
          </Link>
          <button type="submit" className="btn btn-success uppercase pull-right">Submit</button>
        </div>                
         </div>
       </div>     
    )
  }
}
export default Forget;
