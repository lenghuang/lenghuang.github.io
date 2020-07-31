import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col, ListGroup, Card } from 'react-bootstrap';
import { Link } from 'react-scroll';
import PortfolioContext from '../context/context';
import Title from './Title';

const What = () => {
  const { what } = useContext(PortfolioContext);

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

  const whats = Object.values(what);
  return (
    <section id="what">
      <Container>
        <div className="what-wrapper">
          <Title title="What I can do" />
          <Row>
            {whats &&
              whats.map((skills) => {
                const { id, title, content } = skills;
                return (
                  <Col key={id} md={4} lg={3}>
                    <Fade key={id} bottom={true} duration={1000} delay={250} distance="30px">
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
                  </Col>
                );
              })}
          </Row>
          <Row>
            <Col sm={12}></Col>
          </Row>
          <div style={{ paddingTop: '-2rem', paddingBottom: '5rem' }} className="back-to-top-dark">
            <Fade top duration={1000} delay={300} distance="30px">
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
