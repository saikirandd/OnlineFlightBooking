import React, { Component } from "react";
import { Button, FormGroup, FormControl, FormLabel, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import "../static/css/Login.css";
import NavBarLogin from "./navBarLogin"
import Footer from "./footer"
import PropTypes from "prop-types";
import classnames from "classnames";
import FlashMessage from 'react-flash-message'

export default class RemoveUser extends Component {
  constructor(props) {
    super(props);
    this.state = {
      flightNumber: ""
     
    };
  } 

  

  handleChange = event => {
    this.setState({
      [event.target.id]: event.target.value
    });
  }

  handleSubmit = event => {
    event.preventDefault();
    console.log(this.state.flightNumber);

    const userData = {
      email: this.state.email
    
    };
    
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
         <NavBarLogin/>
      <div className="Login" style={{'margin-bottom': '122px'}}>
        <h3 className="text-center">Remove User</h3>
        <form onSubmit={this.handleSubmit}>
         
         
          <FormGroup  controlId="flightNumber" bssize="large">
            <FormLabel>User Email</FormLabel>
            <FormControl
              value={this.state.flightNumber}
              name="flightNumber"
              onChange={this.handleChange}
              type="text"
            />
        
          </FormGroup>
          <div class="">
          <Button
            block
            bssize="large"
           className="width50 "
            type="submit"
            
          >
          
            Remove
          </Button>
        </div>
         
        </form>
      </div>
        <Footer/>
      </div>
    );
  }
}