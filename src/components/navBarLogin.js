import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../static/css/App.css";
import { LinkContainer } from "react-router-bootstrap";


export default class NavBarLogin extends Component {
    render() {
        return (
            <Navbar bg="dark" variant="dark">
                <Link to="/" className="navbar-brand">
                <span className="title">Online Ticket Booking </span></Link>
                <Navbar.Collapse>
                    <Nav className="ml-auto">
                        <Link className="nav-link" to="/">Login</Link>
                        <Link className="nav-link" to="/signup">Signup</Link>
                    </Nav>
                </Navbar.Collapse>
            </Navbar>
        );
    }
}