import React from 'react';

import '../style.css';
import logo from '../../../assets/img/elspacelogo.png'

class Register extends React.Component {
  componentWillMount(){
    window.$('body').attr('class', 'login' );
  }
  render() { return <div>  

       
        <div className="content">
          <div>
            <img src={logo} className="center-block img-responsive" width="100" alt />
          </div>
          {/* BEGIN REGISTRATION FORM */}
          <form className="register-form" action="index.html" method="post" noValidate="novalidate" style={{display: 'block'}}>
            <h3 className="font-green">REGISTER</h3>
            <p className="hint"> Enter your personal details below: </p>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Full Name</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Full Name" name="fullname" /> </div>
            <div className="form-group">
              {/*ie8, ie9 does not support html5 placeholder, so we just show field title for that*/}
              <label className="control-label visible-ie8 visible-ie9">Email</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Email" name="email" /> </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Address</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="Address" name="address" /> </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">City/Town</label>
              <input className="form-control placeholder-no-fix" type="text" placeholder="City/Town" name="city" /> </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Country</label>
              <select name="country" className="form-control">
                <option value>Country</option>
                <option value="FR">France</option>               
                <option value="TN">Tunisia</option>               
                <option value="GB">United Kingdom</option>
                <option value="US">United States</option>              
              </select>
            </div>
            <p className="hint"> Enter your account details below: </p>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Username</label>
              <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Username" name="username" /> </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Password</label>
              <input className="form-control placeholder-no-fix" type="password" autoComplete="off" id="register_password" placeholder="Password" name="password" /> </div>
            <div className="form-group">
              <label className="control-label visible-ie8 visible-ie9">Re-type Your Password</label>
              <input className="form-control placeholder-no-fix" type="password" autoComplete="off" placeholder="Re-type Your Password" name="rpassword" /> </div>
            <div className="form-group margin-top-20 margin-bottom-20">
              <label className="mt-checkbox mt-checkbox-outline">
                <input type="checkbox" name="tnc" /> I agree to the
                <a href="javascript:;">Terms of Service </a> &amp;
                <a href="javascript:;">Privacy Policy </a>
                <span />
              </label>
              <div id="register_tnc_error"> </div>
            </div>
            <div className="form-actions">
              <button type="button" id="register-back-btn" className="btn green btn-outline">Back</button>
              <button type="submit" id="register-submit-btn" className="btn btn-success uppercase pull-right">Submit</button>
            </div>
          </form>
          {/* END REGISTRATION FORM */}
        </div>
        <div className="copyright"> 2014 © Metronic. Admin Dashboard Template. </div>
            
      </div>

  }}


export default Register;