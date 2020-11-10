const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const mareSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  camera: {
    type: String,
    required: true
  },
  dueDate: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true
  }
});

module.exports = mongoose.model('Mare', mareSchema);