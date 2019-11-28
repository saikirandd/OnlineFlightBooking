import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../static/css/App.css";
import { LinkContainer } from "react-router-bootstrap";
import logo from "../static/images/logo.png";


export default class NavBarAdmin extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">
                   <img src={logo} height="60" width="60" alt="text here" />
                    <span className="title ml2">Online Flight Ticket Booking </span></Link>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/listofflights">Manage Flights</Link>
                        <Link className="nav-link" to="/manageusers">Manage Users</Link>
                        <Link className="nav-link" to="/routes">Manage Routes</Link>
                        <Link className="nav-link" to="/searchflights">User View</Link>
                        <Link className="nav-link" to="/">Log out</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}