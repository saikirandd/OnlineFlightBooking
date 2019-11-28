import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../static/css/Login.css";
import NavBarLogin from "./navBarLogin"
import Footer from "./footer"
import PropTypes from "prop-types";
import classnames from "classnames";
import FlashMessage from 'react-flash-message'

export default class AdminLogin extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: "",
      password: ""
    };
  } 

  validateForm() {
    return this.state.email.length > 0 && this.state.password.length > 0;
  }

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.email);
    console.log(this.state.password);
    const userData = {
      email: this.state.email,
      password: this.state.password
    };
    
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
         <NavBarLogin/>
      <div className="Login" style={{'margin-bottom': '122px'}}>
        <h3 className="text-center">Login</h3>
        <form onSubmit={this.handleSubmit}>
          <FormGroup controlId="email" bsssize="large">
            <FormLabel>Email</FormLabel>
            <FormControl
              autoFocus
              type="email"
              value={this.state.email}
              onChange={this.handleChange}
            />
        
          </FormGroup>
          <FormGroup controlId="password" bssize="large">
            <FormLabel>Password</FormLabel>
            <FormControl
              value={this.state.password}
              onChange={this.handleChange}
              type="password"
            />
        
          </FormGroup>
          
          <Button
            block
            bssize="large"
            disabled={!this.validateForm()}
            type="submit"
            
          >
          
            Login
          </Button>
        
          <Link to="/forgotPassword" variant="body2">
                      Forgot password?
              </Link>
        </form>
      </div>
        <Footer/>
      </div>
    );
  }
}