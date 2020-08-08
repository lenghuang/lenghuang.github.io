import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';

import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';
import ProjectImg from './Image/ProjectImg';

const Projects = () => {
  const { projects } = useContext(PortfolioContext);

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
    <section id="where">
      <Container>
        <div className="project-wrapper">
          <Title title="Where to see" />
          <div style={{ marginTop: '-1rem', marginBottom: '5rem' }}>
            <a
              target="_blank"
              rel="noopener noreferrer"
              className="cta-btn cta-btn--hero"
              href="https://www.notion.so/My-Projects-812fbd0d64b448d2a0742703a7434deb"
            >
              VIEW ALL PROJECTS HERE
            </a>
          </div>
          {projects.map((project, i) => {
            const { title, info, info2, url, repo, img, img1, id } = project;
            const projDesc = (left, right) => (
              <Col lg={4} sm={12} key={`desc${id}`}>
                <Fade
                  left={left}
                  right={right}
                  bottom={isMobile}
                  duration={500}
                  delay={200}
                  distance="30px"
                >
                  <div className="project-wrapper__text">
                    <h3 className="project-wrapper__text-title">{title || 'Project Title'}</h3>
                    <div>
                      <p>{info}</p>
                      <p className="mb-4">{info2}</p>
                    </div>
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--hero"
                      href={url || '#!'}
                    >
                      See Live
                    </a>

                    {repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={repo}
                      >
                        Source Code
                      </a>
                    )}
                  </div>
                </Fade>
              </Col>
            );
            const projImg = (left, right) => (
              <Col lg={8} sm={12} key={`img${id}`}>
                <Fade
                  left={left}
                  right={right}
                  bottom={isMobile}
                  duration={500}
                  delay={250}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={url || '#!'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <div style={{ width: '65rem' }} data-tilt className="thumbnail rounded">
                        <ProjectImg alt={title} filename={img} />
                        {/* <img style={{ width: '65rem' }} src={img1} alt={title} /> */}
                      </div>
                    </a>
                  </div>
                </Fade>
              </Col>
            );
            return (
              <Row key={id}>
                {isDesktop
                  ? i % 2 === 0
                    ? [projDesc(isDesktop, false), projImg(false, isDesktop)]
                    : [projImg(isDesktop, false), projDesc(false, isDesktop)]
                  : [projDesc(true, false), projImg(false, true)]}
              </Row>
            );
          })}
          <div className="back-to-top-dark">
            <Link to="why" smooth duration={1000}>
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
            </Link>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
