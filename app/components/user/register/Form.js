import React from 'react';
import classNames from 'classnames';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';

  

export default observer(({form}) => {
  
  const checkErrClass = name => {
    return classNames({
      'has-danger': form.$(name).error
    }, 'input-group', 'mb-3');
  }

  const checkInputErrClass = name => {
    return classNames({
      'form-control-danger': form.$(name).error
    }, 'form-control ');
  }

  return <form onSubmit={form.onSubmit} noValidate="novalidate">

    <div className="form-group">
      <div className={checkErrClass('email')}>
        <span className="input-group-addon">
          <i className="icon-envelope"></i>
        </span>
        <input 
          className={checkInputErrClass('email')} 
          {...form.$('email').bind()}
        />      
      </div>
      <span className="help-block"> {form.$('email').error} </span>
    </div>
    
    <div className="form-group">
      <div className={checkErrClass('password')}>
        <span className="input-group-addon">
          <i className="icon-lock"></i>
        </span>
        <input 
          className={checkInputErrClass('password')} 
          {...form.$('password').bind({type: 'password'})}
        />      
      </div>
      <span className="help-block"> {form.$('password').error} </span>
    </div>


    <hr />

    <div className="form-group">
      <div className={checkErrClass('fullname')}>
        <span className="input-group-addon">
          <i className="icon-user"></i>
        </span>
        <input 
          className={checkInputErrClass('fullname')} 
          {...form.$('fullname').bind()}
        />      
      </div>
      <span className="help-block"> {form.$('fullname').error} </span>
    </div>

    <div className="form-group">
      <div className={checkErrClass('address')}>
        <span className="input-group-addon">
          <i className="icon-home"></i>
        </span>
        <input 
          className={checkInputErrClass('address')} 
          {...form.$('address').bind()}
        />      
      </div>
      <span className="help-block"> {form.$('address').error} </span>
    </div>

     <div className="form-group">
      <div className={checkErrClass('city')}>
        <span className="input-group-addon">
          <i className="icon-location-pin"></i>
        </span>
        <input 
          className={checkInputErrClass('city')} 
          {...form.$('city').bind()}
        />      
      </div>
      <span className="help-block"> {form.$('city').error} </span>
    </div> 

    <div className="form-group">
      <div className={checkErrClass('country')}>
        <span className="input-group-addon"><i className="icon-flag"></i></span>
        <select name="country" className="form-control" {...form.$('country').bind()}>
          <option value>Country</option>
          <option value="FR">France</option>               
          <option value="TN">Tunisia</option>               
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>              
        </select>
      </div>
      <span className="help-block"> {form.$('country').error} </span>     
    </div>

    <button type="submit" className="btn btn-block btn-success">Create Account</button>
  </form>

});