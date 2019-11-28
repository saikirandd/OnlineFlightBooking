import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarUser from "./navbar.component"
import Footer from "./footer"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";

export default class YourTrips extends Component {

  constructor() {
    super();

    this.state = {
      flights: [{
        trip: 1,
        from: 'EWR',
        to: 'MCI',
        duration: '11 hrs',
        departingDate: '01/10/2020',
        arrivalDate: '01/15/2020'
      },
      {
        trip: 2,
        from: 'EWR',
        to: 'MCI',
        duration: '11 hrs',
        departingDate: '01/10/2020',
        arrivalDate: '01/15/2020'
      }, {
        trip: 3,
        from: 'EWR',
        to: 'MCI',
        duration: '11 hrs',
        departingDate: '01/10/2020',
        arrivalDate: '01/15/2020'
      },
      {
        trip: 4,
        from: 'EWR',
        to: 'MCI',
        duration: '11 hrs',
        departingDate: '01/10/2020',
        arrivalDate: '01/15/2020'
      }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const newUser = {

    };

  }
  deleteTrip(item){
    var array = [...this.state.flights]; // make a separate copy of the array
    var index = array.indexOf(item)
    if (index !== -1) {
      array.splice(index, 1);
      this.setState({flights: array});
    }
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarUser />
        <div className="signup container yourtrips form-wrapper" style={{'margin-bottom': '122px'}}>
          <h2>Your Trips</h2>
          <br></br>
          <div class="row mb10">
            <div class="col-md-1">
            </div>
            <div class="col-md-1">
             <b> From</b>
            </div>
            <div class="col-md-1">
            <b>To</b>
            </div>
            <div class="col-md-1">
            <b>Duration</b>
            </div>
            <div class="col-md-1">
            <b> Departure date</b>
            </div>
            <div class="col-md-1">
              <b>Return date</b>
            </div>
            <div class="col-md-1">
              
            </div>
          </div>
         
          {this.state.flights.map(item => (
            <div class="row mb10">
              <div class="col-md-1">
              Trip {this.state.flights.indexOf(item)+1}
              </div>
              <div class="col-md-1">
              {item.from}
              </div>
              <div class="col-md-1">
              {item.to} 
              </div>
              <div class="col-md-1">
                {item.duration}
              </div>
              <div class="col-md-1">
                {item.departingDate}
              </div>
              <div class="col-md-1">
                {item.arrivalDate}
              </div>
              <div class="col-md-1">
              <Button
                    block
                    bssize="large"
                    type="submit"
                    onClick={e =>
                      window.confirm("Are you sure you wish to delete this item?") &&
                      this.deleteTrip(item)}
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
