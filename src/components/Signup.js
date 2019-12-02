import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarLogin from "./navBarLogin"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "./footer"
import classnames from "classnames";
import axios from 'axios';
import { store } from 'react-notifications-component';

export default class Signup extends Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
      contactno: "",
      errors:""
      
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.handleChange = this.handleChange.bind(this);
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


  handleSubmit(e) {
    e.preventDefault();
    const newUser = {
      firstName: this.state.firstName,
      lastName: this.state.lastName,
      email: this.state.email,
      password: this.state.password,
      contactNo: this.state.contactno
    };
    var regularExpression = /^(?=.*[0-9])(?=.*[!@#$%^&*])[a-zA-Z0-9!@#$%^&*]{6,16}$/;
        if(regularExpression.test(this.state.password)){
        if (this.state.password == this.state.confirmpassword) {
          axios.post('http://localhost:5000/users/add', newUser)
          .then(res => {
                console.log(res.data)
                store.addNotification({
                  title: "Account created !",
                  message: "Your account is created, now you can login",
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
                this.props.history.push({pathname: '/'})
          });
        }
        else {
            this.setState({
                errors: "Passwords should match"
            });
        }
    }
    else{
        this.setState({
            errors: "Password must be atlease 6 characters and should contain atleast one number and one special character"
        });
    }
   
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarLogin />
        <div className="signup form-wrapper">
          <h2>Create Account</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBox width70">
              <label htmlFor="firstName">First Name*</label>
              <input
                type="text"
                placeholder="First Name"
                name="firstName"
                value={this.state.firstName}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox width70">
              <label htmlFor="lastName">Last Name*</label>
              <input
                type="text"
                placeholder="Last Name"
                name="lastName"
                value={this.state.lastName}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width70">
              <label htmlFor="email">Email*</label>
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
              <label htmlFor="password">Password*</label>
              <input
                type="password"
                className="password"
                placeholder="Password"
                name="password"
                value={this.state.password}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width50 ml2">
              <label htmlFor="password">Confirm Password*</label>
              <input
                type="password"
                className="password"
                placeholder="Password"
                name="confirmpassword"
                value={this.state.confirmpassword}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="createAccount mt20">
              <Button 
                bssize="large" type="submit">Create Account</Button>
              <Link to="/" variant="body2">
                      Already have an account?
              </Link>
            </div>
            <span className="text-danger">
                            {this.state.errors}
            </span>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
