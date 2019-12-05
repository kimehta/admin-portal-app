import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import { Navbar, Nav } from 'react-bootstrap';

class Landing extends React.Component {
    render() {
        return (
            <Router>
                <div style={{ height: "75vh" }} className="container valign-wrapper">
                    <div className="row">
                    <div className="col s12 center-align">
                <h4>
                Admin Company Portal App
                </h4>
                <p className="flow-text grey-text text-darken-1">
                Login and manage or register
                </p>
                <br />
                <div className="col s6">
                    <Nav.Link href="/register" style={{width: "140px", borderRadius: "3px", letterSpacing: "1.5px"}} className="btn btn-large waves-effect waves-light hoverable blue accent-3">
                        Register
                    </Nav.Link>
                </div>
                <div className="col s6">
                    <Nav.Link href="/login" style={{width: "140px", borderRadius: "3px", letterSpacing: "1.5px"}} className="btn btn-large btn-flat waves-effect white black-text">
                        Log In
                    </Nav.Link>
                </div>
            </div>
            </div>
        </div>
      </Router>
 
            
        );
    }
}

export default Landing;