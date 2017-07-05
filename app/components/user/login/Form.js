import React from 'react';
import { Button } from '../../../metronic/lib/ui';
import {Link} from 'react-router-dom';


const Form = () => 
  <form className="login-form" noValidate="novalidate">    
    <h3 className="form-title font-green">LOGIN</h3>
    
    <div className="alert alert-danger display-hide">
      <button className="close" data-close="alert" />
      <span> Enter your Email and password. </span>
    </div>

    <div className="form-group">
      <label className="control-label visible-ie8 visible-ie9">Email</label>
      <input 
        className="form-control form-control-solid placeholder-no-fix" 
        type="text" 
        placeholder="Email" 
        name="email" 
      /> 
    </div>

    <div className="form-group">

    <label className="control-label visible-ie8 visible-ie9">Password</label>
    <input className="form-control form-control-solid placeholder-no-fix" type="password" autoComplete="off" placeholder="Password" name="password" /> </div>
    
    <div className="form-actions">
      <Button text="Login" color="green" />
      <label className="rememberme check mt-checkbox mt-checkbox-outline">
        <input type="checkbox" name="remember" defaultValue={1} />Remember    
        <span />
      </label>
      <Link to='/forget'>
      <a id="forget-password" className="forget-password">Forgot Password?</a></Link>
    </div>

  </form>
  
export default Form;