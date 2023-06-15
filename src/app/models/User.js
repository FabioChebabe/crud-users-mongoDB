const { model, Schema } = require('mongoose');

const User = model(
  'User',
  new Schema({
    firstName: { type: String, required: true },
    lastName: { type: String, required: true },
    email: { type: String, required: true },
    phone: { type: String },
  })
);

module.exports = { User };
