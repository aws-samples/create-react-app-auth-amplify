const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const MareSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  camera: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  time: {
    type: String,
    required: true
  },
  stat: {
    type: String, 
    required: true
  }
});

module.exports = mongoose.model('mare', MareSchema);