// entry-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const entry = new mongooseClient.Schema({
    formID: { type: String, required: true },
    userID: { type: String, required: true },
    data: { type: Array, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('entry', entry);
};
