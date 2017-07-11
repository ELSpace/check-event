// Initializes the `forms` service on path `/forms`
const createService = require('feathers-mongoose');
const createModel = require('../../models/forms.model');
const hooks = require('./forms.hooks');
const filters = require('./forms.filters');

module.exports = function () {
  const app = this;
  const Model = createModel(app);
  const paginate = app.get('paginate');

  const options = {
    name: 'forms',
    Model,
    paginate
  };

  // Initialize our service with any options it requires
  app.use('/forms', createService(options));

  // Get our initialized service so that we can register hooks and filters
  const service = app.service('forms');

  service.hooks(hooks);

  if (service.filter) {
    service.filter(filters);
  }
};
