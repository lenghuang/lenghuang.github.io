import React from 'react';
import Navbar from 'react-bootstrap/Navbar';
import Nav from 'react-bootstrap/Nav';
import { Link } from 'gatsby';

const linkStyles = {
  margin: '0.05rem',
  padding: '0.25rem',
  color: 'black',
  textDecoration: 'none',
};

const MyNav = ({ data }) => {
  const { cta } = data;
  return (
    <Navbar bg="light" sticky="top">
      <Nav className="mr-auto"> </Nav>
      <Nav>
        {cta &&
          cta.map((obj) => {
            return (
              <Link key={obj.id} to={`/${obj.to}`} style={linkStyles}>
                {obj.name}
              </Link>
            );
          })}
      </Nav>
    </Navbar>
  );
};

export default MyNav;
