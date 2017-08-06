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

  const checkInputErrClass = (name, className) => {
    return classNames({
      'form-control-danger': form.$(name).error
    }, className || 'form-control ');
  }

  return <form onSubmit={form.onSubmit} noValidate="novalidate">

    <div className="form-group">
      <div className={checkErrClass('fullname')}>
        <span className="input-group-addon">
          <i className="fa fa-user"></i>
        </span>
        <input 
          className={checkInputErrClass('fullname')} 
          {...form.$('fullname').bind()}
          size="50"
        />      
      </div>
      <span className="help-block"> {form.$('fullname').error} </span>
    </div>

    <div className="form-group">
      <div className={checkErrClass('email')}>
        <span className="input-group-addon">
          <i className="fa fa-envelope"></i>
        </span>
        <input 
          className={checkInputErrClass('email')} 
          {...form.$('email').bind()}
          size="50"
        />      
      </div>
      <span className="help-block"> {form.$('email').error} </span>
    </div>
    
    <div className="form-group">
      <div className={checkErrClass('password')}>
        <span className="input-group-addon">
          <i className="fa fa-lock"></i>
        </span>
        <input 
          className={checkInputErrClass('password')} 
          {...form.$('password').bind({type: 'password'})}
          size="50"
        />      
      </div>
      <span className="help-block"> {form.$('password').error} </span>
    </div>
    
    <hr />

    <div className="form-group">
    <label className="text-muted">Type</label>
    <div className={checkErrClass('type')}>
      <label className="custom-control custom-radio">
        <input 
          className={checkInputErrClass('type', 'custom-control-input')}
          {...form.select('type').bind({
            value: 0,
            checked: parseInt(form.select('type').value) == 0
          })}
        />        
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">Company</span>
      </label> <br />
      <label className="custom-control custom-radio">
        <input 
          className={checkInputErrClass('type', 'custom-control-input')}
          {...form.select('type').bind({ 
            value: 1,
            checked: parseInt(form.select('type').value) == 1
          })}
        />        
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">Organisation</span>
      </label>
      </div>
      <span className="help-block"> {form.$('type').error} </span>
    </div>

    <div className="form-group">
      <div className={checkErrClass('address')}>
        <span className="input-group-addon">
          <i className="fa fa-home"></i>
        </span>
        <input 
          className={checkInputErrClass('address')} 
          {...form.$('address').bind()}
          size="50"
        />      
      </div>
      <span className="help-block"> {form.$('address').error} </span>
    </div>

    <div className="form-group">
      <div className={checkErrClass('phone')}>
        <span className="input-group-addon">
          <i className="fa fa-phone"></i>
        </span>
        <input 
          className={checkInputErrClass('phone')} 
          {...form.$('phone').bind()}
          size="50"
        />      
      </div>
      <span className="help-block"> {form.$('phone').error} </span>
    </div>

     <div className="form-group">
      <div className={checkErrClass('city')}>
        <span className="input-group-addon">
          <i className="fa fa-map-marker"></i>
        </span>
        <input 
          className={checkInputErrClass('city')} 
          {...form.$('city').bind()}
          size="50"
        />      
      </div>
      <span className="help-block"> {form.$('city').error} </span>
    </div> 

    <div className="form-group">
      <div className={checkErrClass('country')}>
        <span className="input-group-addon"><i className="fa fa-globe"></i></span>
        <select 
          name="country" 
          className="form-control" 
          {...form.$('country').bind()}
        >
          <option value>Country</option>
          <option value="FR">France</option>               
          <option value="TN">Tunisia</option>               
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>              
        </select>
      </div>
      <span className="help-block"> {form.$('country').error} </span>     
    </div>

    <div className="form-group">
    <div className={checkErrClass('terms')}>
      <label className="custom-control custom-checkbox">
        <input 
          className={checkInputErrClass('terms', 'custom-control-input')}
          {...form.$('terms').bind()}
        />        
        <span className="custom-control-indicator"></span>
        <span className="custom-control-description">Accept the terms</span>
      </label>
      </div>
      <span className="help-block"> {form.$('terms').error} </span>
    </div>

    <button type="submit" className="btn btn-block btn-success">Create Account</button>
    <br/>
    <Link to='/login'>
      <button type="button" className="btn btn-block btn-info">Back To Login</button>
    </Link>
  </form>

});