const { authenticate } = require('feathers-authentication').hooks;
const errors = require('feathers-errors');
const Joi = require('joi');
const validate = require('feathers-hooks-validate-joi');

const createSchema = fields => {  
  let keys = {};

  fields.map(field => {
    let key = Joi;
    console.log(field);

    // types
    if (field.type === 'number') key = key.number();
    if (field.type === 'text' || field.type === 'textarea') key = key.string();
    if (field.subtype === 'email') key = key.email();
    if (
        field.type === 'radio-group' ||
        field.type === 'select'
    ) {
      key = key.string();
      const allowedValues = field.values.map(value => value.value);
      key = key.valid(...allowedValues);
    }
    
    // validations
    if (field.max) key = key.max(parseInt(field.max));
    if (field.maxlength) key = key.max(parseInt(field.maxlength));
    if (field.min) key = key.min(parseInt(field.min));
    
    if (field.required) key = key.required(); 
    else key = key.allow('');

    if (field.type === 'checkbox-group') {
      const boxes = field.values.map(value => field.name + value.label + value.value);
      boxes.map(box => {
        keys[box] = Joi.boolean();
        keys[box] = keys[box].required();
        if (field.required) {          
          keys[box] = keys[box].invalid(false);          
        }
      });
    } else keys[field.name] = key;
  });
  
  return Joi.object().keys(keys);
};

module.exports = {
  before: {
    all: [  ],
    find: [
      authenticate('jwt'),
      async function(hook) {
        const formID = hook.params.query.formID;

        // grab form
        const form = await hook.app.service('forms').get(formID);
        
        // restrict to current user's forms
        if (form.userId !== hook.params.payload.userId) 
          throw new errors.Forbidden();
        
        return;
      }
    ],
    get: [],
    create: [ 
      async function(hook) {
        const formID = hook.data.formID;
        const form = await hook.app.service('forms').get(formID);

        const fields = form.fields;
        const data = hook.data.data;

        const schema = createSchema(fields);
        const result = Joi.validate(data,  schema);
        
        if (result.error) 
          throw new errors.BadRequest('Bad Request', result.error);
        
        return;
      } 
    ],
    update: [],
    patch: [  ],
    remove: [  ]
  },

  after: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  },

  error: {
    all: [],
    find: [],
    get: [],
    create: [],
    update: [],
    patch: [],
    remove: []
  }
};
