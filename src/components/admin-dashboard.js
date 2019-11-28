import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarLogin from "./navBarLogin"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import Footer from "./footer"
import classnames from "classnames";

export default class AdminDashboard extends Component {

  constructor() {
    super();

    this.state = {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
      confirmpassword: "",
      contactno: ""
      
    };
   
  }





  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarLogin />
        <div className="signup form-wrapper">
          <h2>Dashboard</h2>
          <br></br>
          <div class="row">
          <div class="col-md-1"></div>
          <div class="col-xs-2">
          <Button bssize="large" type="submit">Add Flight</Button>          
          </div>
          <div class="col-md-9"></div>
          </div>

          <br></br>
          <div class="row">
          <div class="col-md-1"></div>
          <div class="col-xs-2">
          <Button  bssize="large" type="submit" width="100px"> Routes</Button>          
          </div>
          <div class="col-md-9"></div>
          </div>

          <br></br>
          <div class="row">
          <div class="col-md-1"></div>
          <div class="col-xs-2">
          <Button bssize="large" type="submit">Add Customer</Button>          
          </div>
          <div class="col-md-9"></div>
          </div>

          <br></br>
          <div class="row">
          <div class="col-md-1"></div>
          <div class="col-xs-2">
          <Button bssize="large" type="submit">Remove Flight</Button>          
          </div>
          <div class="col-md-9"></div>
          </div>

          <br></br>
          <div class="row">
          <div class="col-md-1"></div>
          <div class="col-xs-2">
          <Button bssize="large" type="submit">Remove Customer</Button>          
          </div>
          <div class="col-md-9"></div>
          </div>

          


          
         


    
     
      
      
     
</div>
<div>
                                        
<input id="noOfRecords" type="hidden" name="noOfRecords" value="12" />
<input type="hidden" name="startPos" id="startPos" value="0"/>
<input type="hidden" name="totalResultsFound" id="totalResultsFound" value="0"/>
<input type="hidden" name="searchedKeyword" id="searchedKeyword" value=""/>
<input type="hidden" name="totalPages" id="totalPages" value="0"/>
        
        </div>
        <Footer/>
      </div>
    );
  }
}
