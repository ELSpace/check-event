/* eslint-disable no-console */
const feathers = require('feathers');
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const path = require('path');
const configuration = require('feathers-configuration');

const api = new feathers().use('/api/v1', app).listen(port); 
const public = new feathers()
  .configure(configuration(path.join(__dirname, '..')))
  .use(feathers.static(app.get('public')))
  .listen(5000);

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

api.on('listening', () =>
  logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);
