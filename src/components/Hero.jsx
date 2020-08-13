import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col, Alert } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import typing from '../images/typing.gif';
import PortfolioContext from '../context/context';

const Header = () => {
  const { hero } = useContext(PortfolioContext);
  const { title, name, subtitle, cta } = hero;

  const [isDesktop, setIsDesktop] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (window.innerWidth > 769) {
      setIsDesktop(true);
      setIsMobile(false);
    } else {
      setIsMobile(true);
      setIsDesktop(false);
    }
  }, []);

  const makeButtons = () => {
    return (
      <div className="hero-cta">
        {cta &&
          cta.map((c) => (
            <div key={c.name} style={{ padding: '1rem' }}>
              <span className="cta-btn cta-btn--hero">
                <Link to={c.name.toLowerCase()} smooth duration={c.duration || 1000}>
                  {c.name}
                </Link>
              </span>
            </div>
          ))}
      </div>
    );
  };

  return (
    <React.Fragment>
      {/* <Alert variant="warning" style={{ paddingBottom: '-5vh', fontSize: '1.5rem' }}>
        This website is still under construction. View on desktop for the best experience.
      </Alert> */}
      <section id="hero" className="jumbotron">
        <Container>
          <Row>
            <Col sm={12} md={8} lg={8}>
              <Fade left={isDesktop} bottom={isMobile} duration={750} delay={200} distance="30px">
                <h1 className="hero-title">
                  {title} <span className="text-color-main">{name}, </span>
                  {subtitle}
                </h1>
              </Fade>
            </Col>
            <Fade right={isDesktop} bottom={isMobile} duration={750} delay={200} distance="30px">
              <Col sm={12} md={12} lg={4}>
                <img id="typetype" src={typing} alt="Len Huang Typing" />
              </Col>
            </Fade>
          </Row>

          <Fade left={isDesktop} bottom={isMobile} duration={750} delay={450} distance="30px">
            {makeButtons()}
          </Fade>
        </Container>
      </section>
      {/* <div style={{ marginTop: '-15rem', marginBottom: '17rem' }} className="back-to-top-dark">
        <Fade top duration={750} delay={200} distance="30px">
          <Link to="who" smooth duration={1000}>
            <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
          </Link>
        </Fade>
      </div> */}
    </React.Fragment>
  );
};

export default Header;
