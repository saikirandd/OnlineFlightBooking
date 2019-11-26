import React, { Component } from "react";
import { Link } from "react-router-dom";
import { Nav, Navbar, NavItem } from "react-bootstrap";
import "../static/css/App.css";
import { LinkContainer } from "react-router-bootstrap";
import { MDBCol, MDBContainer, MDBRow, MDBFooter } from "mdbreact";


export default class Footer extends Component {
    render() {
        return (
            <MDBFooter className="font-small pt-4 mt-4">
            <MDBContainer fluid className="text-center text-md-left">
              <MDBRow>
                <MDBCol md="6">
                  <h5 className="title">Any help</h5>
                  <p>
                   Mail to S53465@nwmissouri.edu
                  </p>
                </MDBCol>
                
              </MDBRow>
            </MDBContainer>
            <div className="footer-copyright text-center py-3">
              <MDBContainer fluid>
                &copy; {new Date().getFullYear()} Copyright
              </MDBContainer>
            </div>
          </MDBFooter>
        );
    }
}