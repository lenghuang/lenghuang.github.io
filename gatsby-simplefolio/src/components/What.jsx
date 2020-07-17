import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import { Container, Row, Col } from 'react-bootstrap';
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
                  <Col
                    sm={16 / whats.length}
                    md={14 / whats.length}
                    lg={12 / whats.length}
                    key={id}
                  >
                    <Fade bottom={true} duration={1000} delay={250} distance="30px">
                      <h3 align="center" className="what-wrapper__text-title">
                        {title.toUpperCase()}
                      </h3>
                      <ul>
                        {content.map((s) => (
                          <li key={s}>
                            <p className="what-wrapper__text">{s}</p>
                          </li>
                        ))}
                      </ul>
                    </Fade>
                  </Col>
                );
              })}
          </Row>
        </div>
      </Container>
    </section>
  );
};

export default What;
