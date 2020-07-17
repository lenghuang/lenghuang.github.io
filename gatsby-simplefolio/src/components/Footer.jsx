import React, { useContext } from 'react';
import { Container } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
      <span className="back-to-top">
        <Link to="hero" smooth duration={1000}>
          <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
        </Link>
      </span>
      <p className="footer__text">
        “Look back at your life. It’s always the hardest times that made you who you are.”
        <br /> - Casey Neistat
      </p>
      <hr />
      <p className="footer__text">© {new Date().getFullYear()} - Website by Len Huang</p>
    </footer>
  );
};

export default Footer;
