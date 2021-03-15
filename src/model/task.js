
const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const TaskSchema = Schema({
  title: String,
  description: String,
  title2: String,
  title3: String,
  Hin: String,
  Hout: String
});

module.exports = mongoose.model('tasks', TaskSchema);
