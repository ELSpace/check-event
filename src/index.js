/* eslint-disable no-console */
const feathers = require('feathers');
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const configuration = require('feathers-configuration');
const path = require('path');

const api = new feathers()
  .configure(configuration(path.join(__dirname, '..')))
  .use('/api/v1', app)
  .use(feathers.static(app.get('public')))
  .use('/', (req, res) => res.sendFile(path.resolve(__dirname, '../public/index.html')))
  .listen(port); 

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

api.on('listening', () =>
  logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);
