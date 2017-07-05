import React from 'react';
import {Link} from 'react-router-dom';
import { Button } from '../../../metronic/lib/ui';

const Form = () => 
  <form className="register-form" action="index.html" method="post" noValidate="novalidate" style={{display: 'block'}}>
    <h3 className="font-green">REGISTER</h3>
    <p className="hint"> Enter your Association/Company details below: </p>
    <div className="form-group">
        <label className="control-label visible-ie8 visible-ie9">Full Name</label>
        <input className="form-control placeholder-no-fix" type="text" placeholder="Full Name" name="fullname" /> </div>
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
      <p className="hint"> Enter your Association/Company details below: </p>
      <div className="form-group">
        <label className="control-label visible-ie8 visible-ie9">Email</label>
        <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" /> </div>
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
        <Link to='/login'>
        <button type="button" id="register-back-btn" className="btn green btn-outline">Back</button>
        </Link>
        <button type="submit" id="register-submit-btn" className="btn btn-success uppercase pull-right">Submit</button>
      </div>
  </form>

  export default Form;



