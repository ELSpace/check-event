/* eslint-disable no-console */
const feathers = require('feathers');
const logger = require('winston');
const app = require('./app');
const port = app.get('port');
const server = 
  new feathers().use('/api/v1', app).listen(port); 

process.on('unhandledRejection', (reason, p) =>
  logger.error('Unhandled Rejection at: Promise ', p, reason)
);

server.on('listening', () =>
  logger.info(`Feathers application started on ${app.get('host')}:${port}`)
);
