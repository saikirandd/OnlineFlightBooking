const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const exerciseSchema = new Schema({
  departplace: { type: String, required: true },
  arrivalplace: { type: String, required: true },
 
}, {
  timestamps: true,
});

const FlightRoute = mongoose.model('FlightRoute', exerciseSchema);

module.exports = FlightRoute;
