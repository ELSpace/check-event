const { authenticate } = require('feathers-authentication').hooks;
const { restrictToOwner } = require('feathers-authentication-hooks');

const restrict = [
  authenticate('jwt'),
  restrictToOwner({
    idField: '_id',
    ownerField: 'userID'
  })
];

module.exports = {
  before: {
    all: [  ],
    find: [],
    get: [],
    create: [],
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
