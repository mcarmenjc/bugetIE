import React from 'react';
import Navbar from 'react-bootstrap/Navbar'
import Nav from 'react-bootstrap/Nav'
import Form from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'
import NavDropdown from 'react-bootstrap/NavDropdown'


function Header() {
  return (
    <Navbar bg="warning" variant="light" expand="md">
      <Navbar.Brand href="/">
        BudgetIE
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="mr-auto">
          <Nav.Link href="/expense/tracker">Expense Tracker</Nav.Link>
          <Nav.Link href="/expense/budgets">Budgets</Nav.Link>
        </Nav>
        <Nav className="justify-content-end">
          <Nav.Link href="/user/register">Register</Nav.Link>
          <Nav.Link href="/user/login">Login</Nav.Link>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default Header;
