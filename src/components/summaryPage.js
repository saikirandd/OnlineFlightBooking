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

export default class SummaryPage extends Component {

  constructor(props) {
    super(props);
    this.state = {
      flights: this.props.location.state
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
          <h2>Summary</h2>
          <br></br>
          <div class="row">
             <div class="col-md-5">
             <div class="row mb10">
             <div >
             <h5> Departing Flight</h5>
                      <div> {this.state.flights.departing.airlinesName}</div>
                  <div> {this.state.flights.departing.flightTime}</div>
                  <div>  {this.state.flights.departing.totalHours}</div>
                  <div>  {this.state.flights.departing.routes}</div>
             </div>
             </div>
             <br/>
             <div class="row mb10">
             <div>
             <h5> Arriving Flight</h5>
                        {this.state.flights.departing.airlinesName}
                  <div> {this.state.flights.departing.flightTime}</div>
                  <div>  {this.state.flights.departing.totalHours}</div>
                  <div>  {this.state.flights.departing.routes}</div>
             </div>
             </div>
             </div>
             <div class="col-md-3 vertical-center">
               <b> {this.state.flights.price}</b>
                <div>Free cancel within 24 hours</div>
             </div>
             <div class="col-md-2 vertical-center">
                <Button
                    block
                    bssize="large"
                    type="submit"
                    onClick={()=>this.props.history.push(
                      {pathname: '/travellerDetails'})}
                  > Proceed
                  </Button>
             </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}
