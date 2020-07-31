import React, { useContext, useState, useEffect } from 'react';
import Navbar from 'react-bootstrap/Navbar';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const MyNav = () => {
  const { hero } = useContext(PortfolioContext);
  const { cta } = hero;
  return (
    <Navbar bg="light" sticky="top">
      <Navbar.Brand>
        <Link to="hero" smooth duration={500}>
          Len Huang
        </Link>
      </Navbar.Brand>
      <Nav className="mr-auto"></Nav>
      <Nav>
        <Nav.Link href="#deets">More deets</Nav.Link>
        <Nav.Link eventKey={2} href="#memes">
          Dank memes
        </Nav.Link>
      </Nav>
    </Navbar>
  );
};

export default MyNav;
