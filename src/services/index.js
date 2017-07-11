const users = require('./users/users.service.js');
const forms = require('./forms/forms.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(forms);
};
