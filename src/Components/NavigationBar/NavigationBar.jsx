import React from "react";
import "./NavigationBar.css";
import { Nav, Navbar, Container, Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import AirplaneLogo from "../../Assets/Icons/airplane.svg";

function NavigationBar() {
  return (
    <Navbar expand="lg" className="w-100 z-2" style={{ position: 'fixed', top: 0, left: 0, right: 0 }}>
      <Container>
        <Navbar.Brand className="text-light">
          <Link to="/" className="text-decoration-none text-light d-flex">
            <img className="me-2" src={AirplaneLogo} alt="logo" />
            Travel Website
          </Link>
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar" className="text-light" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto w-100 justify-content-center">
            <Nav.Link href="/" className="text-light">
              Home
            </Nav.Link>
            <Nav.Link href="/about" className="text-light text-capitalize">
              About
            </Nav.Link>
            <Nav.Link href="/ReviewDetail" className="text-light">
              Review
            </Nav.Link>
          </Nav>
          <Button variant="light">
            <Link to="../Login" className="text-decoration-none text-capitalize text-dark text-nowrap">Sign in</Link>
          </Button>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavigationBar;
