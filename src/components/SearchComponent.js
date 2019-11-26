import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarUser from "./navbar.component"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import Footer from "./footer"
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import { connect } from "react-redux";
import classnames from "classnames";

export default class SearchComponent extends Component {

  constructor() {
    super();

    this.state = {
      from: "",
      to: "",
      departingDate: "",
      travellers: "",
      arrivingDate: "",
    };
    this.handleValueChange = this.handleValueChange.bind(this);
    this.onChangeDepartingDate = this.onChangeDepartingDate.bind(this);
    this.onChangeArrivingDate = this.onChangeArrivingDate.bind(this);
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

  onChangeDepartingDate(departingDate) {
    this.setState({
      departingDate: departingDate
    })
  }
  onChangeArrivingDate(arrivingDate) {
    this.setState({
      arrivingDate: arrivingDate
    })
  }


  handleSubmit(e) {
    e.preventDefault();
    console.log(this.state)
   
  }

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarUser />
        <div style={{'margin-bottom': '53px'}} className="signup form-wrapper">
          <h2>Search for flights</h2>
          <form onSubmit={this.handleSubmit}>
            <div className="pull-left inputBox width50">
              <label htmlFor="from">From</label>
              <input autocomplete="off"
                type="text"
                placeholder="From"
                name="from"
                value={this.state.from}
                onChange={this.handleValueChange}            
              />           
            </div>
            <div className="inputBox width50">
              <label htmlFor="to">To</label>
              <input autocomplete="off"
                type="text"
                placeholder="To"
                name="to"
                value={this.state.to}
                onChange={this.handleValueChange}
              />
            </div>
            <div className="inputBox width50 pull-left">
              <label htmlFor="departingDate">Departing date</label>
              <DatePicker 
                                selected={this.state.departingDate}
                                onChange={this.onChangeDepartingDate}
                            />
            </div>

            <div className="inputBox width50">
              <label htmlFor="arrivingDate">Arriving date</label>
              <DatePicker 
                                selected={this.state.arrivingDate}
                                onChange={this.onChangeArrivingDate}
                            />
            </div>
            <div className="inputBox width50" style={{float:'left', 'margin-right': '2%'}}>
              <label htmlFor="password">Number of travellers</label>
              <input autocomplete="off"
                type="number"
                placeholder="No of Travellers"
                name="travellers"
                value={this.state.travellers}
                onChange={this.handleValueChange}
              />
            </div>
           
            <div className="createAccount mt20">
              <Button 
                bssize="large" type="submit">Search</Button>
            </div>
          </form>
        </div>
        <Footer/>
      </div>
    );
  }
}
