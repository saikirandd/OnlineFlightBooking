const router = require('express').Router();
let Flight = require('../models/flight.model');

router.route('/').get((req, res) => {
  Flight.find()
    .then(flights => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const flightNumber = req.body.flightNumber;
  const departurePlace = req.body.departurePlace;
  const departureDate = req.body.departureDate;
  const departureTime = req.body.departureTime;
  const noOfSeats = Number(req.body.noOfSeats);
  const arrivalPlace = req.body.arrivalPlace;
  const arrivalDate = req.body.arrivalDate;
  const arrivalTime = req.body.arrivalTime;
  const newFlight= new Flight({
     flightNumber,
     departurePlace,
     departureDate,
     departureTime ,
     noOfSeats ,
     arrivalPlace,
     arrivalDate ,
     arrivalTime,
  });
  newFlight.save()
  .then(() => res.json('flight added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  Flight.findById(req.params.id)
    .then(flights => res.json(flights))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  Flight.findByIdAndDelete(req.params.id)
    .then(() => res.json('flight deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  Flight.findById(req.params.id)
    .then(flights => {
        flights.flightNumber = req.body.flightNumber;
        flights.departurePlace = req.body.departurePlace;
        flights.departureDate = Date.parse(req.body.email);
        flights.departureTime = req.body.departureTime;
        flights.noOfSeats = Number(req.body.noOfSeats);
        flights.arrivalPlace = req.body.arrivalPlace;
        flights.arrivalDate = Date.parse(req.body.arrivalDate);
        flights.arrivalTime =req.body.arrivalTime;

      flights.save()
        .then(() => res.json('flights updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;