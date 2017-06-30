import React from 'react';
import { Button } from '../../../metronic/lib/ui';

const Form = () => 
<form className="forget-form" action="index.html" method="post" noValidate="novalidate" style={{display: 'block'}}>
        <h3 className="font-green">Forget Password ?</h3>
        <p> Enter your e-mail address below to reset your password. </p>
        <div className="form-group">
          <input className="form-control placeholder-no-fix" type="text" autoComplete="off" placeholder="Email" name="email" /> </div>
     
      </form>

export default Form;
