const path = require('path');
const favicon = require('serve-favicon');
const compress = require('compression');
const cors = require('cors');
const helmet = require('helmet');
const bodyParser = require('body-parser');

const feathers = require('feathers');
const configuration = require('feathers-configuration');
const hooks = require('feathers-hooks');
const rest = require('feathers-rest');
const socketio = require('feathers-socketio');

const middleware = require('./middleware');
const services = require('./services');
const appHooks = require('./app.hooks');

const authentication = require('./authentication');

const mongodb = require('./mongodb');

const app = feathers();

// Load app configuration
app.configure(configuration(path.join(__dirname, '..')))
  .use(cors())
  .use(helmet())
  .use(compress())
  .use(bodyParser.json())
  .use(bodyParser.urlencoded({ extended: true }))
  //app.use(favicon(path.join(app.get('public'), 'favicon.ico')))
  .use('/', feathers.static(app.get('public')))
  .configure(hooks())
  .configure(mongodb)
  .configure(rest())
  .configure(socketio())
  .configure(authentication)
  .configure(services)
  .configure(middleware)
  .hooks(appHooks);

module.exports = app;
