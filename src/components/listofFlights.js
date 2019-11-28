import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarAdmin from "./navbaradmin"
import Footer from "./footer"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from "moment";
import { store } from 'react-notifications-component';

export default class ListofFlights extends Component {

  constructor(props) {
    super(props);

    this.state = {
        flights: []
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.deleteFlight = this.deleteFlight.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/flights/')
        .then(response => {
            this.setState({ flights: response.data })
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
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
  onChangeDOB(dob) {
    this.setState({
      dob: dob
    })
  }
  deleteFlight(id) {
    axios.delete('http://localhost:5000/flights/'+id)
      .then(response => { 
        console.log(response.data)
        store.addNotification({
          title: "Flight deleted!",
          message: "Flight is deleted!!!",
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
      }
      );
    this.setState({
      flights: this.state.flights.filter(el => el._id !== id)
    })
  }  

  handleSubmit(e) {
    e.preventDefault();
   
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarAdmin />
        <div className="signup container yourtrips form-wrapper" style={{'margin-bottom': '122px'}}>
        <div class="row">
          <div class="col-md-10"><h2>Flights</h2></div>
          <div class="col-md-2">
          <Button block  bssize="large"
                    type="submit"
                    onClick={()=>this.props.history.push(
                      {pathname: '/addflight'})}
                  > Add flight
                  </Button></div>
          </div>
          <br></br>
          <div class="row mb10">
            <div class="col-md-1">
              <b> Flight No</b>
            </div>
            <div class="col-md-1">
             <b> From</b>
            </div>
            <div class="col-md-1">
            <b>To</b>
            </div>
            <div class="col-md-2">
            <b> Departure date and time</b>
            </div>
            <div class="col-md-2">
              <b>Arrival date and time</b>
            </div>
            <div class="col-md-1">
              <b>Seats</b>
            </div>
          </div>
         
           {this.state.flights.map(item => (
            <div class="row mb10">
              <div class="col-md-1">
                {item.flightNumber}
              </div>
              <div class="col-md-1">
              {item.departurePlace}
              </div>
              <div class="col-md-1">
              {item.arrivalPlace} 
              </div>
              <div class="col-md-2">
              {moment(item.departureDate).format("MM/DD/YYYY")} {item.departureTime}
              </div>
              <div class="col-md-2">              
              {moment(item.arrivalDate).format("MM/DD/YYYY")} {item.arrivalTime}
              </div>
              <div class="col-md-1">
                 {item.noOfSeats}
              </div>
              <div class="col-md-1">
              <Button
                    block
                    bssize="large"
                    type="submit"
                    onClick={e =>
                      window.confirm("Are you sure you wish to delete this item?") &&
                      this.deleteFlight(item._id)}
                  > Delete
                  </Button>
              </div>
            </div>
          ))} 
        </div>
        <Footer />
      </div>
    );
  }
}
