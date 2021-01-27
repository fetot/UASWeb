import React from 'react';
import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";

class HeaderNav extends React.Component {
  render(){
    return (
      <Navbar bg="secondary" expand="lg" variant="light" className="font-weight-bold container-fluid py-2">
        <Navbar.Brand className="mr-5 text-light" as={Link} to="/">
            Films (UAS 172113641)
        </Navbar.Brand>
        <Navbar.Toggle />
        <Navbar.Collapse>
          <Nav className="font-weight-normal">
              <Nav.Link className="mx-2 text-light" as={Link} to="/">List</Nav.Link>
              <Nav.Link className="mx-2 text-light" as={Link} to="/addfilm">Add Film</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    )
  }
}

export default HeaderNav;
