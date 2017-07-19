import React from 'react';
import classNameNames from 'classnames';
import { Link } from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default observer(({form}) => (
  <form onSubmit={form.onSubmit} noValidate="novalidate">

    <div className={"form-group " + (form.$('email').hasError ? 'has-danger' : '')}>
      <div className="controls">
        <div className="input-prepend input-group">
          <span className="input-group-addon"><i className="fa fa-user"></i></span>
          <input 
            className="form-control" 
            size="50"
            {...form.$('email').bind()} 
          />
        </div>
        <p className="help-block">{form.$('email').error}</p>
      </div>
    </div>

    <div className={"form-group " + (form.$('password').hasError ? 'has-danger' : '')}>
      <div className="controls">
        <div className="input-prepend input-group">
          <span className="input-group-addon"><i className="fa fa-lock"></i></span>
          <input 
            className="form-control" 
            size="50"
            {...form.$('password').bind({type: 'password'})}
          />
        </div>
        <p className="help-block">{form.$('password').error}</p>
      </div>
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
));