const mongoose = require('mongoose');
const Schema = mongoose.Schema;
mongoose.connect(process.env.MONGODB_URI);

const memberSchema = mongoose.Schema({
  firstName: {
    type: String,
    required: true,
  },
  lastName: {
    type: String,
    required: true,
  },
  photo: {
    type: String,
    required: true,
  },
  hometown: {
    type: String,
    required: true,
  },
  major: {
    type: String,
    required: true,
  },
  year: {
    type: String,
    required: true,
  },
  role: {
    type: String,
    required: false,
  }
});

module.exports = {
  Member: mongoose.model('Member', memberSchema)
};
