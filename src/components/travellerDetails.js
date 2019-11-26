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

export default class TravellerDetails extends Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      gender:"",
      contactno: "",
      dob:""
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.onChangeDOB = this.onChangeDOB.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
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
        <div className="signup form-wrapper">
          <h2>Traveller Details</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBox pull-left width50">
              <label htmlFor="firstName">First Name</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox width50">
              <label htmlFor="lastName">Last Name</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width70">
              <label htmlFor="email">Email</label>
              <input
                type="text"
                placeholder="Email"
                name="email"
                value={this.state.email}
                onChange={this.handleValueChange}               
              />
            </div>

            <div className="inputBox width70">
              <label htmlFor="contactno">Contact number</label>
              <input
                type="number"
                className="contactnoInput"
                placeholder="Enter contact number"
                name="contactno"
                value={this.state.contactno}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width50" style={{float:'left', 'margin-right': '2%'}}>
              <label htmlFor="dob">Date of Birth</label>
              <DatePicker 
                                selected={this.state.dob}
                                onChange={this.onChangeDOB}
                            />
            </div>
            <div className="inputBox width50 ml2">
              <label htmlFor="gender">Gender</label>
              <select style={{padding: '5%'}} name="gender" value={this.state.gender} 
                                    onChange={this.handleValueChange}
                                    placeholder="Select Gender">  
                                    <option value="">Select impact level</option>                                  
                                    <option value="male">Male</option>
                                    <option value="female">Female</option>
                                    
                                </select>
            </div>
            <div className="createAccount mt20">
              <Button 
                bssize="large" type="submit">Proceed</Button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
