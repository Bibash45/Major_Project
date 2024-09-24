const mongoose = require("mongoose");

const donationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  phone: {
    type: String,
    required: true,
  },
  typeOfFood: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  expirationDate: {
    type: Date,
    required: true,
  },
  address: {
    type: String,
    required: true,
  },
  dateTime: {
    type: Date,
    required: true,
  },
  message: {
    type: String,
  },
}, {
  timestamps: true,
});

const Donation = mongoose.model('Donation', donationSchema);

module.exports = Donation;
