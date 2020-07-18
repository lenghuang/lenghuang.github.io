import React from 'react';

const Footer = () => {
  return (
    <footer className="footer navbar-static-bottom">
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
