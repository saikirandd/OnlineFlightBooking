
import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarAdmin from "./navbaradmin"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "./footer"
import classnames from "classnames";
import { th } from "date-fns/esm/locale";

export default class Routes extends Component {

  constructor() {
    super();

    this.state = {
      departplace: "",
      arrivalplace: "",
     
      
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
    const newFlight = {
      departplace: this.state.departplace,
      arrivalplace : this.state.arrivalplace
      
      
    };
   
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarAdmin />
        <div className="signup form-wrapper">
          <h2>Add/Remove Route</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="inputBox vertical-center width70">
              <label htmlFor="departplace">Depart Place</label>
              <input
                type="text"
                placeholder="Depart place"
                name="departplace"
                value={this.state.departplace}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox vertical-center width70">
              <label htmlFor="departurePlace" class="mt20">Arrival Place</label>
              <input
                type="text"
                placeholder="Departure place"
                name="arrivalplace"
                value={this.state.arrivalplace}
                onChange={this.handleValueChange}
              />
            </div>
            
           
            <div class="vertical-center " style={{width: '30%'}}>
            <div class="mt20">
              <Button block  
                bssize="large" type="submit">Add</Button>              
            </div></div>
            <div class="vertical-center" style={{width: '30%'}}>
            <div class="mt20"></div>
              <Button block
                bssize="large" type="submit">Remove</Button>
           
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
