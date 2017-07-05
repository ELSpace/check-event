import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';

const Input = ({type, field, inputClass}) => {
  
  const className = classNames ({
    'form-group': 'true',
    'has-error': field.hasError
  });
  
  return <div className={className}>
    <label className="control-label visible-ie8 visible-ie9" htmlFor={field.id}>
      {field.label}
    </label>
    <input 
      className={inputClass}
      type={type}
      {...field.bind()}
    /> 
    <span className="help-block"> {field.error} </span>
  </div>
}

Input.propTypes = {
  type: PropTypes.string.isRequired,
  inputClass: PropTypes.string
};

export default Input;