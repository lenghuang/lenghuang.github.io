import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';
import Title from './Title';

const What = () => {
  const { what } = useContext(PortfolioContext);
  const { resume, tables } = what;

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
  const whats = tables;
  return (
    <section id="what">
      <Container>
        <div className="what-wrapper">
          <Title title="What I can do" />
          <Fade bottom duration={500} delay={250} distance="30px">
            <div style={{ marginTop: '-1rem', marginBottom: '5rem' }}>
              <a
                target="_blank"
                rel="noopener noreferrer"
                className="cta-btn cta-btn--hero"
                href="https://www.notion.so/My-Projects-812fbd0d64b448d2a0742703a7434deb"
              >
                See where I apply these skills
              </a>
            </div>
          </Fade>
          <div className="tables-row">
            {whats &&
              whats.map((skills) => {
                const { id, title, content } = skills;
                return (
                  <div key={id} className="card-spacing">
                    <Fade bottom={true} duration={500} delay={250} distance="30px">
                      <Card>
                        <Card.Header>
                          <h3 align="center" className="what-wrapper__text-title">
                            {title.toUpperCase()}
                          </h3>
                        </Card.Header>
                        <ListGroup variant="flush">
                          {content.map((s) => (
                            <ListGroup.Item key={s}>
                              <p className="what-wrapper__text">{s}</p>
                            </ListGroup.Item>
                          ))}
                        </ListGroup>
                      </Card>
                    </Fade>
                  </div>
                );
              })}
          </div>
          <div style={{ paddingTop: '-2rem', paddingBottom: '5rem' }} className="back-to-top-dark">
            <Fade top duration={500} delay={300} distance="30px">
              <Link to="when" smooth duration={1000} offset={100}>
                <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
              </Link>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default What;
