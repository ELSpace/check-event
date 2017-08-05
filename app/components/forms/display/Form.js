import React from 'react';
import classNames from 'classnames';
import { observer } from 'mobx-react';
import formGenerator from '../../../common/formGenerator';
console.log('generate input', formGenerator);

export default observer(({form, fields}) => {
  
  return <form onSubmit={form.onSubmit} noValidate="novalidate">

    
    {formGenerator.generateInputs(form, fields)}
    <button className="pull-right btn btn-success">Submit</button>
    

  </form>
});