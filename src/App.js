import React from 'react';
import "bootstrap/dist/css/bootstrap.min.css"
import { BrowserRouter as Router, Route} from "react-router-dom";

import Navbar from "./components/navbar.component"
import ExercisesList from "./components/exercises-list.component";
import Login from "./components/loginComponent";
import Signup from "./components/Signup";
import SearchComponent from "./components/SearchComponent";
import EditExercise from "./components/edit-exercise.component";
import CreateExercise from "./components/create-exercise.component";
import CreateUser from "./components/create-user.component";
import TravellerDetails from "./components/travellerDetails";

function App() {
  return (
    <Router>
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/travellerDetails" exact component={TravellerDetails} />
      <Route path="/searchFlights" exact component={SearchComponent} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      </div>
    </Router>
  );
  
}

export default App;
