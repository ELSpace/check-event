const users = require('./users/users.service.js');
const forms = require('./forms/forms.service.js');
const entry = require('./entry/entry.service.js');
module.exports = function () {
  const app = this; // eslint-disable-line no-unused-vars
  app.configure(users);
  app.configure(forms);
  app.configure(entry);
};
