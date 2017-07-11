const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: 'userId'
  })
];

module.exports = {
  before: {
    all: [],
    find: [ ...restrict ],
    get: [],
    create: [  ],
    update: [ ...restrict ],
    patch: [ ...restrict ],
    remove: [ ...restrict ]
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
