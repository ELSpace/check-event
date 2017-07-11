const { authenticate } = require('feathers-authentication').hooks;
const commonHooks = require('feathers-hooks-common');
const { restrictToOwner } = require('feathers-authentication-hooks');
const { hashPassword } = require('feathers-authentication-local').hooks;
const Joi = require('joi');
const validate = require('feathers-hooks-validate-joi');


const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: '_id'
  })
];

const schema = {
  email: Joi.string().email().required(),
  password: Joi.string().min(8).max(32).required(),
  fullname: Joi.string().trim().min(5).max(30).required(),
  address: Joi.string().required(),
  city: Joi.string().required(),
  country: Joi.string().required()
};

const joiOptions = { convert: true, abortEarly: false };

module.exports = {
  before: {
    all: [],
    find: [ authenticate('jwt') ],
    get: [ ...restrict ],
    create: [ validate.form(schema, joiOptions), hashPassword() ],
    update: [ validate.form(schema, joiOptions), ...restrict, hashPassword() ],
    patch: [ validate.form(schema, joiOptions), ...restrict, hashPassword() ],
    remove: [ ...restrict ]
  },

  after: {
    all: [
      commonHooks.when(
        hook => hook.params.provider,
        commonHooks.discard('password')
      )
    ],
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
