import React from 'react';
import classNames from 'classnames';
import { Button } from '../../../metronic/lib/ui';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';




export default observer(({form}) => (
  <form onSubmit={form.onSubmit} className="login-form" noValidate="novalidate">    
    <h3 className="form-title font-green">LOGIN</h3>
      <div className="alert alert-danger display-hide">
      <button className="close" data-close="alert" />
      <span> Enter your Email and password. </span>
    </div>

    <div className={"form-group " + (form.$('email').hasError ? 'has-error' : '')}>
      <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('email').id}>
        {form.$('email').label}
      </label>
      <input 
        className="form-control form-control-solid placeholder-no-fix" 
        type="text"
        {...form.$('email').bind()}
      />
      <span className="help-block"> {form.$('email').error} </span>

    </div>

    <div className={"form-group " + (form.$('password').hasError ? 'has-error' : '')}>
      <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('password').id}>
        {form.$('password').label}
      </label>
      <input 
        className="form-control form-control-solid placeholder-no-fix" 
        type="password" 
        {...form.$('password').bind()}
      /> 

      <span className="help-block"> {form.$('password').error} </span>
    </div>
    
    <div className="form-actions">
      <Button text="Login" color="green"/>
      <label className="rememberme check mt-checkbox mt-checkbox-outline">
        <input type="checkbox" name="remember" defaultValue={1} />Remember    
        <span />
      </label>
      <Link to='/forget' className="forget-password">
        Forgot Password?
      </Link>

    </div>

  </form>
));