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

export default class SearchResults extends Component {

  constructor() {
    super();

    this.state = {
      flights: [{
        departing: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "EWR - MSP - DEN - MCI"
        },
        arriving: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "MCI - DEN - MSP - EWR"
        },
        price: '200$'
      },
      {
        departing: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "EWR - MSP - DEN - MCI"
        },
        arriving: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "MCI - DEN - MSP - EWR"
        },
        price: '200$'
      },
      {
        departing: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "EWR - MSP - DEN - MCI"
        },
        arriving: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "MCI - DEN - MSP - EWR"
        },
        price: '200$'
      },
      {
        departing: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "EWR - MSP - DEN - MCI"
        },
        arriving: {
          airlinesName: "American airlines",
          flightTime: "9:45 PM - 10:44 AM +1",
          totalHours: "13h 59m(2 stops)",
          routes: "MCI - DEN - MSP - EWR"
        },
        price: '200$'
      }
      ]
    };

    this.handleSubmit = this.handleSubmit.bind(this);
  }


  handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      password2: this.state.confirmpassword,
      contactNo: this.state.contactno,
    };

  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarUser />
        <div className="signup container form-wrapper">
          <h2>Search results</h2>
          <br></br>
          <div>

            {this.state.flights.map(item => (

              <div className="row mb10">
                <div className="col-md-4">
                  <h5> Departing Flight</h5>
                  {item.departing.airlinesName}
                  <div> {item.departing.flightTime}</div>
                  <div>  {item.departing.totalHours}</div>
                  <div>  {item.departing.routes}</div>
                </div>
                <div className="col-md-3">
                  <h5> Arriving Flight</h5>
                    {item.arriving.airlinesName}
                  <div> {item.arriving.flightTime}</div>
                  <div>  {item.arriving.totalHours}</div>
                  <div>  {item.arriving.routes}</div>
                </div>
                <div className="col-md-3 vertical-center">
                  <div><b>{item.price}</b></div>
                  <div>Free cancel within 24 hours</div>
                </div>
                <div className="col-md-2 vertical-center">
                  <Button
                    block
                    bssize="large"
                    type="submit"
                    onClick={()=>this.props.history.push(
                      {pathname: '/summaryPage',
                      state:item})}
                  > Select
                  </Button>
                </div>

              </div>


            ))}

          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
