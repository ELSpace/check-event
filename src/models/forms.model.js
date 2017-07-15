// forms-model.js - A mongoose model
// 
// See http://mongoosejs.com/docs/models.html
// for more of what you can do here.
module.exports = function (app) {
  const mongooseClient = app.get('mongooseClient');
  const forms = new mongooseClient.Schema({
    name: { type: String, required: true, unique: true },
    fields: { type: Array, required: true },
    entries: { type: Array },
    userId: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now }
  });

  return mongooseClient.model('forms', forms);
};
