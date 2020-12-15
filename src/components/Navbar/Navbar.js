import React from 'react';
import { Navbar, Nav } from 'react-bootstrap';
import { Link } from 'react-router-dom';

import './style.scss';

const NavbarComponent = props => {
    return (
        <Navbar bg="light" expand="lg">
            <Link to="/dashboard">
              <h1>Doctor Portal</h1>
            </Link>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="mr-auto">
                  <Link to="/dashboard">
                    <h5>Dashboard</h5>
                  </Link>
                  <Link to="/patient">
                    <h5>Patient</h5>
                  </Link>
              </Nav>
            </Navbar.Collapse>
            <Link to="/">
              <h6>Logout</h6>
            </Link>
        </Navbar>
    );
};

export default NavbarComponent;