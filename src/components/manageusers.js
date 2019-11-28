import React, { Component } from "react";
import "../static/css/Signup.css";
import NavBarAdmin from "./navbaradmin"
import Footer from "./footer"
import { Link, withRouter } from "react-router-dom";
import { Button } from "react-bootstrap";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import classnames from "classnames";
import DatePicker from 'react-datepicker';
import "react-datepicker/dist/react-datepicker.css";
import axios from 'axios';
import moment from "moment";
import { store } from 'react-notifications-component';

export default class ManageUsers extends Component {

  constructor(props) {
    super(props);

    this.state = {
        users: []
    };
    this.deleteUser = this.deleteUser.bind(this);
  }

  componentDidMount() {
    axios.get('http://localhost:5000/users/')
        .then(response => {
            this.setState({ users: response.data })
            console.log(response.data)
        })
        .catch((error) => {
            console.log(error);
        })
}


 
  deleteUser(id) {
    axios.delete('http://localhost:5000/users/'+id)
      .then(response => { 
        console.log(response.data)
        store.addNotification({
          title: "User deleted!",
          message: "User is deleted!!!",
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
      }
      );
    this.setState({
        users: this.state.users.filter(el => el._id !== id)
    })
  }  

  render() {
    const { errors } = this.state;
    return (
      <div>
        <NavBarAdmin />
        <div className="signup container yourtrips form-wrapper" style={{'margin-bottom': '122px'}}>
        <div class="row">
          <div class="col-md-10"><h2>Users</h2></div>
          <div class="col-md-2">
          <Button block  bssize="large"
                    type="submit"
                    onClick={()=>this.props.history.push(
                      {pathname: '/adduser'})}
                  > Add User
                  </Button></div>
          </div>
          <br></br>
          <div class="row mb10">
            <div class="col-md-3">
              <b> First Name</b>
            </div>
            <div class="col-md-2">
             <b> Last Name</b>
            </div>
            <div class="col-md-3">
            <b>Email</b>
            </div>
            <div class="col-md-2">
            <b> Contact</b>
            </div>
            <div class="col-md-2">
            
            </div>
          </div>
         
           {this.state.users.map(item => (
            <div class="row mb10">
              <div class="col-md-3">
                {item.firstName}
              </div>
              <div class="col-md-2">
              {item.lastName}
              </div>              
              <div class="col-md-3">
              {item.email}
              </div>
              <div class="col-md-2">              
               {item.contact}
              </div>
             
              <div class="col-md-2">
              <Button
                    block
                    bssize="large"
                    type="submit"
                    onClick={e =>
                      window.confirm("Are you sure you wish to delete this item?") &&
                      this.deleteUser(item._id)}
                  > Delete
                  </Button>
              </div>
            </div>
          ))} 
        </div>
        <Footer />
      </div>
    );
  }
}
