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

    <div className="form-group" >
      <div className={checkErrClass('email')}>
        <span className="input-group-addon">
          <i className="fa fa-user"></i>
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


    <div className="row">
      <div className="col-6">
        <button type="submit" className="btn btn-primary px-4">Login</button>
      </div>
      <div className="col-6 text-right">
        <button type="button" className="btn btn-link px-0">Forgot password?</button>
      </div>
    </div>

  </form>
});