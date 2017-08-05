import React from 'react';
import MyForm from 'mobx-react-form';
import plugins from './validator';
import classNames from 'classnames';
import { observable } from 'mobx';

// generates a form with validation and on submit callback
const generate = (fields, onSuccess, onError) => {

  let checkboxValidations = [];

  let generatedFields = fields.map(field => {
    let validation = {
      name: field.name, 
      label: field.label,
      placeholder: field.placeholder,
      type: field.subtype || field.type,
      rules: '',
      value: field.value
    };    

    // generate rules
    if (field.required) validation.rules += "required|";
    if (field.type === 'number') validation.rules += "integer|";
    if (field.max) validation.rules += `max:${field.max}|`;
    if (field.maxLength) validation.rules += `max:${field.maxLength}|`;
    if (field.min) validation.rules += `min:${field.min}|`;
    if (field.subtype === 'email') validation.rules += `email|`;
    
    // remove last pipe from rules
    validation.rules = validation.rules.substring(
      0, validation.rules.length - 1
    );

    if (validation.type === 'radio-group') {
      validation.type = 'radio';
      field.values.map(value => {
        if(value.selected) validation.value = value.value;
      })
    }

    if (validation.type === 'select') {
      field.values.map(value => {
        if(value.selected) validation.value = value.value;
      })
    }

    if (validation.type === 'checkbox-group') {
      checkboxValidations = [
        ...checkboxValidations, 
        ...field.values.map(value => ({
          name: field.name + value.label + value.value, 
          label: value.lablel,
          type: 'checkbox',
          rules: field.required ? 'boolean|accepted' : '',
          initial: value.selected
        }))
      ];

      return undefined;
    }

    
    return validation;
  });

  generatedFields = generatedFields.filter(gf => gf !== undefined);

  generatedFields = [...generatedFields, ...checkboxValidations];
  console.log(generatedFields);

  const form = new MyForm(
    { fields: generatedFields },
    { 
      plugins, 
      onSubmit: {
        onSuccess, 
        onError
      }
    }
  );

  return form;
}

const generateInputs = (form, fields) => {
  return fields.map(field => {
    const f = inputs(form, field);
    return f;
  });
};

const inputs = (form, field) => {

  const checkErrClass = name => {
    return classNames({
      'has-danger': form.$(name).error
    }, 'input-group', 'mb-3');
  }

  const checkInputErrClass = (name, className) => {
    return classNames({
      'form-control-danger': form.$(name).error
    }, className || 'form-control ');
  };

  const generators = {
    header: () => {
       switch(field.subtype) {
        case 'h1': return <h1>{field.label}</h1>;
        case 'h2': return <h2>{field.label}</h2>;
        case 'h3': return <h3>{field.label}</h3>;
      }
    },

    select: () => 
      <div className="form-group">
        <div className={checkErrClass(field.name)}>
          <label>{form.$(field.name).label}</label>
          <select
            {...form.$(field.name).bind()}
            className={checkInputErrClass(field.name)}
            defaultValue={field.values[1].value}
          >
            {field.values.map(value => 
              <option value={value.value}>{value.label}</option>
            )}
          </select>
        </div>
        <span className="help-block"> {form.$(field.name).error}</span>
      </div>,
    
    text: () => 
      <div className="form-group">
        <div className={checkErrClass(field.name)}>
          <label>{form.$(field.name).label}</label>
          <input 
            className={checkInputErrClass(field.name)}
            {...form.$(field.name).bind()}
          />      
        </div>
        <span className="help-block"> {form.$(field.name).error}</span>
      </div>,
    
    textarea: () => 
      <div className="form-group">
        <div className={checkErrClass(field.name)}>
          <label>{form.$(field.name).label}</label>
          <textarea
            className={checkInputErrClass(field.name)}
            {...form.$(field.name).bind()}
          ></textarea>
        </div>
        <span className="help-block"> {form.$(field.name).error}</span>
      </div>,

    number: () => 
      <div className="form-group">
        <div className={checkErrClass(field.name)}>
          <label>{form.$(field.name).label}</label>
          <input 
            className={checkInputErrClass(field.name)}
            {...form.$(field.name).bind()}
          />
        </div>
        <span className="help-block"> {form.$(field.name).error}</span>
      </div>,

    'radio-group': () => 
      <div className="form-group">
        <div className={checkErrClass(field.name)}>          
          {field.label}
          {field.values.map(value => <div>
            <label className="custom-control custom-radio">
              <input 
                className={checkInputErrClass(field.name, 'custom-control-input')}
                {...form.select(field.name).bind({
                  value: value.value,
                  checked: form.select(field.name).value == value.value
                })}
              />        
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">{value.label}</span>
            </label> <br />
          </div>
          )}
        </div>
      </div>,
    
    'checkbox-group': () => 
     <div className="form-group">
        {field.label}
        {field.values.map(value => <div className="form-check">
          <div className={checkErrClass(field.name + value.label + value.value)}>
            <label className="custom-control custom-checkbox">
              <input 
                className={checkInputErrClass(field.name + value.label + value.value, 'custom-control-input')}
                {...form.$(field.name + value.label + value.value).bind()}
              />
              <span className="custom-control-indicator"></span>
              <span className="custom-control-description">{value.label}</span>
            </label>
            </div>
            <span className="help-block"> {form.$(field.name + value.label + value.value).error} </span>
        </div>
        )}
      </div>
  }
  

  return generators[field.type]() || null;
};

export default {
  generate,
  generateInputs
};