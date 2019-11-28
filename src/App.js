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
import SearchResults from "./components/searchResults";
import SummaryPage from "./components/summaryPage";
import PaymentPage from "./components/paymentPage";
import YourTrips from "./components/yourTrips";
import AdminDashboard from './components/admin-dashboard';
import AddFlight from './components/add-flight';
import RemoveFlight from './components/removeFlight';
import AddUser from './components/add-user';
import RemoveUser from './components/removeUser';
import Routes from './components/routes';
import ListofFlights from './components/listofFlights';
import ReactNotification from 'react-notifications-component';
import ManageUsers from './components/manageusers';
import 'react-notifications-component/dist/theme.css'
function App() {
  return (
    
    <Router>
        <ReactNotification />
    <div>
      <Route path="/" exact component={Login} />
      <Route path="/summaryPage" exact component={SummaryPage} />
      <Route path="/searchResults" exact component={SearchResults} />
      <Route path="/signup" exact component={Signup} />
      <Route path="/travellerDetails" exact component={TravellerDetails} />
      <Route path="/searchFlights" exact component={SearchComponent} />
      <Route path="/edit/:id" component={EditExercise} />
      <Route path="/create" component={CreateExercise} />
      <Route path="/user" component={CreateUser} />
      <Route path="/payment" component={PaymentPage} />
      <Route path="/yourTrips" component={YourTrips} />
      <Route path="/admindashboard" component={AdminDashboard} />
      <Route path="/addflight" component={AddFlight} />
      <Route path="/removeflight" component={RemoveFlight} />
      <Route path="/adduser" component={AddUser} />
      <Route path="/removeuser" component={RemoveUser} />
      <Route path="/routes" component={Routes} />
      <Route path="/listofflights" component={ListofFlights} />
      <Route path="/manageusers" component={ManageUsers} />
      </div>
    </Router>
  );
  
}

export default App;
