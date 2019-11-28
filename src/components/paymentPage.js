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

export default class PaymentPage extends Component {

  constructor() {
    super();

    this.state = {
      fullName: "",
      address: "",
      city: "",
      zipcode:"",
      country: "",
      cardnumber:"",
      cardHolderName: "",
      expiryDate:"",
      cvv:""
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
   
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarUser />
        <div className="signup form-wrapper">
          <h2>Card Details</h2>
          <form>
            <div className="inputBox pull-left width70">
              <label htmlFor="cardnumber">Card number</label>
              <input
                type="text"
                placeholder="Card number"
                name="cardnumber"
                value={this.state.cardnumber}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox width70">
              <label htmlFor="cardHolderName">Card Holder Name</label>
              <input
                type="text"
                placeholder="Card Holder Name"
                name="cardHolderName"
                value={this.state.cardHolderName}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width50 pull-left">
              <label htmlFor="expiryDate">Expiry Date</label>
              <input
                type="number"
                placeholder="MM-YY"
                name="expiryDate"
                className="contactnoInput"
                value={this.state.expiryDate}
                onChange={this.handleValueChange}               
              />
            </div>

            <div className="inputBox width50">
              <label htmlFor="cvv">CVV</label>
              <input
                type="number"
                className="contactnoInput"
                placeholder="CVV"
                name="cvv"
                value={this.state.cvv}
                onChange={this.handleValueChange}
              />
            </div>
          </form>
          <br/>
          <h2>Billing Address</h2>
          <form>
            <div className="inputBox pull-left width70">
              <label htmlFor="fullName">Full Name</label>
              <input
                type="text"
                placeholder="Full Name"
                name="fullName"
                value={this.state.fullName}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox width70">
              <label htmlFor="address">Address</label>
              <input
                type="text"
                placeholder="Address"
                name="address"
                value={this.state.address}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width50 pull-left">
              <label htmlFor="city">City</label>
              <input
                type="text"
                placeholder="City"
                name="city"
                value={this.state.city}
                onChange={this.handleValueChange}               
              />
            </div>

            <div className="inputBox width50">
              <label htmlFor="zipcode">Zipcode</label>
              <input
                type="number"
                className="contactnoInput"
                placeholder="Zipcode"
                name="zipcode"
                value={this.state.zipcode}
                onChange={this.handleValueChange}
              />
            </div>
           
            <div className="createAccount mt20">
              <Button 
                bssize="large" onClick={()=>this.props.history.push(
                  {pathname: '/travellerDetails'})}>Proceed</Button>
            </div>
          </form>
        </div>
        <Footer />
      </div>
    );
  }
}
