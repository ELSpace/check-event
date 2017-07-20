import React from 'react';
import classNameNames from 'classnames';
import {Link} from 'react-router-dom';
import { observer } from 'mobx-react';
import { Button, Form, FormGroup, Label, Input, FormFeedback } from 'reactstrap';

export default observer(({form}) => (

<div data-reactroot className="app flex-row align-items-center">
  <div className="container">
    <div className="row justify-content-center">
      <div className="col-md-6">
        <div className="card mx-2">
          <div className="card-block p-2">
            <h1>Register</h1>
            <p className="text-muted">Create your account</p>
          <form onSubmit={form.onSubmit}>
            <div className={"form-group" + (form.$('fullname').hasError ? 'has-error' : '')}>
               <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('fullname').id}>
                </label>
                <div className="input-prepend input-group">
                <span className="input-group-addon">
                <i className="fa fa-user-circle" /></span>
                <input type="text" className="form-control"  {...form.$('fullname').bind()}/>
                </div>
                <span className="help-block"> {form.$('fullname').error} </span>
                </div>
                <div className={"form-group" + (form.$('address').hasError ? 'has-error' : '')}>
                 <div className="input-prepend input-group">
                 <span className="input-group-addon">
                  <i className="fa fa-map-marker"/> </span>             
                 <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('address').id}>
                 </label>
                  <input type="text" className="form-control" placeholder="Adress" {...form.$('address').bind()} />
                  </div>
                  <span className="help-block"> {form.$('address').error} </span>
                  </div>
                  <div className={"form-group" + + (form.$('phone').hasError ? 'has-error' : '')}>
                 <div className="input-prepend input-group">
                 <span className="input-group-addon">
                   <i className="fa fa-phone-square"/>
                 </span>
                  <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('phone').id}>
                   </label>
                  <input type="number" className="form-control" placeholder="Phone Number" {...form.$('phone').bind()} />
                  </div>
                  <span className="help-block"> {form.$('phone').error} </span>
                  </div>
                 <div className={"form-group"  + (form.$('email').hasError ? 'has-error' : '')}>               
                  <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('email').id}>
                  </label>
                   <div className="input-prepend input-group">
                  <span className="input-group-addon">
                    <i className="fa fa-envelope"/>
                  </span>
                  <input type="text" className="form-control" placeholder="Email" {...form.$('email').bind()} />
                  </div>
                  <span className="help-block"> {form.$('email').error} </span>
                  </div>
                  <div className={"form-group"+(form.$('password').hasError ? 'has-error' : '')}>
                  <div className="input-prepend input-group">
                   <span className="input-group-addon">
                    <i className="fa fa-key" /></span>
                  <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('password').id}>
                  </label>                  
                      <input type="password" className="form-control" placeholder="Password" {...form.$('password').bind({ type: 'password' })} />
                      </div>
                       <span className="help-block"> {form.$('password').error} </span>
                      </div>
                        <button type="submit" onClick={form.onSubmit} className="btn btn-block btn-success">Create Account</button>
                        <p>{form.error}</p>
                       </form>
                        </div>
              <div className="card-footer p-2">
              <div className="row">
                <div className="col-6">
                  <button className="btn btn-block btn-facebook" type="button">
                     <span>facebook</span>
                   </button>
                </div>
                <div className="col-6">
                <button className="btn btn-block btn-twitter" type="button">
                      <span> twitter </span>
                </button>
                </div>
                  </div>
                    </div>
                      </div>
                        </div>
                          </div>
                            </div>
                              </div>
 ));




