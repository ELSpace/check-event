const handler = require('feathers-errors/handler');
const notFound = require('feathers-errors/not-found');
const path = require('path');

module.exports = function () {
  // Add your custom middleware here. Remember, that
  // in Express the order matters, `notFound` and
  // the error handler have to go last.
  const app = this;

   app.use((req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../../public/index.html')
    )
  });


  app.use(notFound());
  app.use(handler());

  
};
