import React, { Component } from "react";
var Nav = require("react-bootstrap/lib/Nav")
var NavItem = require("react-bootstrap/lib/NavItem")
var Navbar = require("react-bootstrap/lib/Navbar")
var MenuItem = require("react-bootstrap/lib/MenuItem")
var NavDropdown = require("react-bootstrap/lib/NavDropdown")
import {Link} from "react-router-dom";

export default class Navigation extends Component{
render(){
    return(
    <Navbar inverse collapseOnSelect>
  <Navbar.Header>
    <Navbar.Brand>
      <Link to="/">Home</Link>
    </Navbar.Brand>
    <Navbar.Brand>
      <Link to="/address">Address</Link>
    </Navbar.Brand>
    <Navbar.Brand>
      <Link to="/login">Login</Link>
    </Navbar.Brand>
    <Navbar.Toggle />
  </Navbar.Header>
  <Navbar.Collapse>
    <Nav>
      <NavItem eventKey={1} href="#">
      <Link to="address">Address</Link>
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link
      </NavItem>
      <NavDropdown eventKey={3} title="Dropdown" id="basic-nav-dropdown">
        <MenuItem eventKey={3.1}>Action</MenuItem>
        <MenuItem eventKey={3.2}>Another action</MenuItem>
        <MenuItem eventKey={3.3}>Something else here</MenuItem>
        <MenuItem divider />
        <MenuItem eventKey={3.3}>Separated link</MenuItem>
      </NavDropdown>
    </Nav>
    <Nav pullRight>
      <NavItem eventKey={1} href="#">
        Link Right
      </NavItem>
      <NavItem eventKey={2} href="#">
        Link Right
      </NavItem>
    </Nav>
  </Navbar.Collapse>
</Navbar>)}
}