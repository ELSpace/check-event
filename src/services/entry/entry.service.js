// Initializes the `entry` service on path `/entries`
const createService = require('feathers-mongoose');
const createModel = require('../../models/entry.model');
const hooks = require('./entry.hooks');
const filters = require('./entry.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'entry',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/entries', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('entries');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
