import React from 'react';
import classNames from 'classnames';
import {Link} from 'react-router-dom';
import { Button } from '../../../metronic/lib/ui';
import { observer } from 'mobx-react';



export default observer(({form}) => (
    <form onSubmit={form.onSubmit} className="register-form" noValidate="novalidate" style={{display: 'block'}}>
    <h3 className="font-green">REGISTER</h3>
    <p className="hint"> Enter your Association/Company details below: </p>

    <div className={"form-group " + (form.$('fullname').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('fullname').id}>
          {form.$('fullname').label}
        </label>
        <input className="form-control placeholder-no-fix"
        type="text"
          {...form.$('fullname').bind()}/>
        <span className="help-block"> {form.$('fullname').error} </span>
         </div>
   
       <div className={"form-group " + (form.$('address').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('address').id}>
          {form.$('address').label}
          </label>
        <input className="form-control placeholder-no-fix"
         type="text"
           {...form.$('address').bind()} />
          <span className="help-block"> {form.$('address').error} </span>
           </div>
         
    <div className={"form-group " + (form.$('city').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('city').id}>
         {form.$('city').label}
        </label>
        <input className="form-control placeholder-no-fix" type="text" {...form.$('city').bind()} /> 
        <span className="help-block"> {form.$('city').error} </span>
        </div>
     
    <div className={"form-group " + (form.$('country').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('country').id}>
         {form.$('country').label}
         </label>
        <select name="country" className="form-control" {...form.$('country').bind()}>
          <option value>Country</option>
          <option value="FR">France</option>               
          <option value="TN">Tunisia</option>               
          <option value="GB">United Kingdom</option>
          <option value="US">United States</option>              
        </select>
        <span className="help-block"> {form.$('country').error} </span>     
     </div> 
          
      <p className="hint"> Enter your Association/Company details below: </p>
      <div className={"form-group " + (form.$('email').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('email').id}>
        {form.$('email').label}
        </label>
        <input className="form-control placeholder-no-fix" type="text" {...form.$('email').bind()} />
        <span className="help-block"> {form.$('email').error} </span>
         </div>

      <div className={"form-group " + (form.$('password').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('password').id}>
         {form.$('password').label}
        </label>
        <input className="form-control placeholder-no-fix" type="password" {...form.$('password').bind()} />
         <span className="help-block"> {form.$('password').error} </span>
         </div>
      <div className={"form-group " + (form.$('rpassword').hasError ? 'has-error' : '')}>
        <label className="control-label visible-ie8 visible-ie9" htmlFor={form.$('rpassword').id}>
         {form.$('rpassword').label}
         </label>
        <input className="form-control placeholder-no-fix" type="password" {...form.$('rpassword').bind()} />
         <span className="help-block"> {form.$('rpassword').error} </span>
         </div>
         
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
        <button type="submit" onClick={form.onSubmit} className="btn btn-success uppercase pull-right">Submit</button>
      </div>
    <p>{form.error}</p>
  </form>
));




