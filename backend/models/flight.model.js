const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  flightNumber: { type: String, required: true },
  departurePlace: { type: String, required: true },
  departureDate: { type: Date, required: true },
  departureTime: { type: String, required: true },
  noOfSeats:     { type: Number, required: true },
  arrivalPlace:  { type: String, required: true },
  arrivalDate:     { type: Date, required: true },
  arrivalTime:     { type: String, required: true },
}, {
  timestamps: true,
});

const Flight = mongoose.model('Flight', exerciseSchema);

module.exports = Flight;

