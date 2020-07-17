import React, { useContext, useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Fade from 'react-reveal/Fade';
import typing from '../images/typing.gif';
import { Link } from 'react-scroll';
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

  return (
    <section id="hero" className="jumbotron">
      <Container>
        <Row>
          <Col sm={12} md={8} lg={8}>
            <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={250} distance="30px">
              <h1 className="hero-title">
                {title} <span className="text-color-main">{name}, </span>
                {subtitle}
              </h1>
            </Fade>
          </Col>
          <Fade right={isDesktop} bottom={isMobile} duration={1000} delay={250} distance="30px">
            <Col sm={0} md={0} lg={4}>
              <img src={typing} alt="Len Huang Typing" />
            </Col>
          </Fade>
        </Row>

        <Fade left={isDesktop} bottom={isMobile} duration={1000} delay={500} distance="30px">
          <div className="hero-cta">
            {cta &&
              cta.map((c) => (
                <div key={c} style={{ paddingRight: '2rem' }}>
                  <span className="cta-btn cta-btn--hero">
                    <Link to={c.toLowerCase()} smooth duration={1000}>
                      {c}
                    </Link>
                  </span>
                </div>
              ))}
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Header;
