import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class Navigation extends React.Component {
    render() {
        return (
          <Router>
          <div>
            <Navbar bg="dark" variant="dark" expand="lg">
              <Navbar.Brand>Admin Portal</Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="mr-auto">
 
                </Nav>
              </Navbar.Collapse>
            </Navbar>
          </div>
      </Router>
        )
    }
}

export default Navigation;