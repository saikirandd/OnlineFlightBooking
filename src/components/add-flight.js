
import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarLogin from "./navBarLogin"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import Footer from "./footer"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import { store } from 'react-notifications-component';


export default class AddFlight extends Component {

  constructor() {
    super();

    this.state = {
      flightNumber: "",
      departurePlace : "",
      departureDate: "",
      departureTime: "",
      noOfSeats: "",
      arrivalPlace:"",
      arrivalDate: "",
      arrivalTime:""
      
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.onChangeDepartingDate = this.onChangeDepartingDate.bind(this);
    this.onChangeArrivingDate = this.onChangeArrivingDate.bind(this);
  }


  handleValueChange(e) {
    let target = e.target;
    let value = target.value;
    let name = target.name;
    this.setState({
      [name]: value
    });
  }

  handleChange(event) {
    console.log(event.target.name)
    this.setState({
      [event.target.name]: event.target.value
    });
  }
  onChangeDepartingDate(departingDate) {
    this.setState({
      departureDate: departingDate
    })
  }
  onChangeArrivingDate(arrivingDate) {
    this.setState({
      arrivalDate: arrivingDate
    })
  }

  handleSubmit(e) {
    e.preventDefault();
    const newFlight = {
      flightNumber: this.state.flightNumber,
      departurePlace : this.state.departurePlace,
      departureDate: this.state.departureDate,
      departureTime: this.state.departureTime,
      noOfSeats: this.state.noOfSeats,
      arrivalPlace:this.state.arrivalPlace,
      arrivalDate: this.state.arrivalDate,
      arrivalTime:this.state.arrivalTime
    };
    console.log(newFlight)
    axios.post('http://localhost:5000/flights/add', newFlight)
    .then(res => {
          console.log(res.data)
          store.addNotification({
            title: "Flight added!",
            message: "Flight is added!!!",
            type: "success",
            insert: "top",
            container: "top-right",
            animationIn: ["animated", "fadeIn"],
            animationOut: ["animated", "fadeOut"],
            width: 300,
            dismiss: {
              duration: 5000,
              onScreen: true
            }
          });
          this.props.history.push({pathname: '/listofflights'})
    });
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarLogin />
        <div className="signup form-wrapper">
          <h2>Add Flight</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBox vertical-center width70">
              <label htmlFor="flightNumber">Flight Number</label>
              <input
                type="text"
                placeholder="Flight number"
                name="flightNumber"
                class=""
                value={this.state.flightNumber}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="departurePlace" class="mt20">Departure Place</label>
              <input
                type="text"
                placeholder="Departure place"
                name="departurePlace"
                value={this.state.departurePlace}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="departureDate" class="mt20">Depature Date</label>
              <DatePicker placeholderText="MM/DD/YYYY"
                                selected={this.state.departureDate}
                                onChange={this.onChangeDepartingDate}
                            />
            </div>

            <div className="inputBox vertical-center width70">
              <label htmlFor="departureTime" class="mt20">Departure Time</label>
              <input
                type="text"
               
                placeholder="Departure time"
                name="departureTime"
                value={this.state.departureTime}
                onChange={this.handleValueChange}
              />
            </div>

            <div className="inputBox vertical-center width70">
              <label htmlFor="noOfSeats" class="mt20">Seats Available</label>
              <input
                type="number"
               
                placeholder="Available seats"
                name="noOfSeats"
                value={this.state.noOfSeats}
                onChange={this.handleValueChange}
              />
            </div>

            <div className="inputBox vertical-center width70">
              <label htmlFor="noOfSeats" class="mt20">Arrival place</label>
              <input
                type="text"               
                placeholder="Arrival place"
                name="arrivalPlace"
                value={this.state.arrivalPlace}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="arrivalDate" class="mt20">Arrival Date</label>
              <DatePicker  placeholderText="MM/DD/YYYY"
                                selected={this.state.arrivalDate}
                                onChange={this.onChangeArrivingDate}
                            />
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="dep" class="mt20">Arrival Time</label>
              <input
                type="text"
                placeholder="Time of arrival"
                name="arrivalTime"
                value={this.state.arrivalTime}
                onChange={this.handleValueChange}
              />
            </div>
            
            <div class="text-center mt20">
              <Button 
                bssize="large" type="submit">Add flight</Button>
              
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
