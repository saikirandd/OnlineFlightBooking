const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const flightUserSchema = new Schema({
  firstName: {    type: String,    required: true,    unique: true,    trim: true,    minlength: 3  },
  lastName:  {    type: String,    required: true,    unique: true,    trim: true,    minlength: 3  }, 
  email:     {    type: String,    required: true,    unique: true,    trim: true },
  password:   {    type: String,    required: true,    unique: true},
  contact:    {    type:String,  required:false},
   
}, {
  timestamps: true,
});

const FlightUser = mongoose.model('FlightUser', flightUserSchema);

module.exports = FlightUser;

