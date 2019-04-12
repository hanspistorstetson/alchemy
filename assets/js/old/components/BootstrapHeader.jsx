import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import NavDropdown from "react-bootstrap/NavDropdown";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

const Header = () => (
  <Navbar bg="light" expand="lg">
    <Navbar.Brand href="/">Alchemy</Navbar.Brand>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Form className="mr-auto" inline>
        <FormControl
          type="text"
          placeholder="Not functional"
          className="mr-sm-2"
        />
        <Button variant="outline-success">Search</Button>
      </Form>
      <Nav className="mr-sm-2">
        <Nav.Link href="/login">Login</Nav.Link>
        <Nav.Link href="/logout">Login</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);

export default Header;
