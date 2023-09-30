const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const CustomerSchema = new Schema({
  firstName: {
    type: String,
    required: true
  },
  lastName: {
    type: String,
    required: true
  },
  telephone: {
    type: String,
    required: true
  },
  emailBusiness: {
    type: String,
    required: true
  },
  idNumber: {
    type: String,
    required: true
  },
  companyName: {
    type: String,
    required: true
  },
  userDestination: {
    type: String,
    required: true
  },
  purposeOfVisit: {
    type: String,
    required: true
  },
  startDate: {
    type: String,
    required: true
  },
  endDate: {
    type: String,
    required: true
  },
  details: {
    type: String,
    required: true
  },
  createdAt: {
    type: Date,
    default: Date.now()
  },
  updatedAt: {
    type: Date,
    default: Date.now()
  }
});

module.exports = mongoose.model('Customer', CustomerSchema);