const router = require('express').Router();
let FlightsRoutes = require('../models/flight-routes.model');

router.route('/').get((req, res) => {
  FlightsRoutes.find()
    .then(flightroutes => res.json(flightroutes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/add').post((req, res) => {
  const departplace = req.body.departplace;
  const arrivalplace = req.body.arrivalplace;


  
  const newExercise = new FlightsRoutes({
    departplace,
    arrivalplace,
  });

  newExercise.save()
  .then(() => res.json('Route added!'))
  .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').get((req, res) => {
  FlightsRoutes.findById(req.params.id)
    .then(flightroutes => res.json(flightroutes))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/:id').delete((req, res) => {
  FlightsRoutes.findByIdAndDelete(req.params.id)
    .then(() => res.json('Route deleted.'))
    .catch(err => res.status(400).json('Error: ' + err));
});

router.route('/update/:id').post((req, res) => {
  FlightsRoutes.findById(req.params.id)
    .then(flightroutes => {
      flightroutes.departplace = req.body.departplace;
      flightroutes.arrivalplace = req.body.arrivalplace;
      flightroutes.save()
        .then(() => res.json('route updated!'))
        .catch(err => res.status(400).json('Error: ' + err));
    })
    .catch(err => res.status(400).json('Error: ' + err));
});

module.exports = router;