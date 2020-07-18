import React, { useContext, useEffect, useState } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
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
          {projects.map((project, i) => {
            const { title, info, info2, url, repo, img, id } = project;
            const projDesc = (left, right) => (
              <Col lg={4} sm={12} key={`desc${id}`}>
                <Fade
                  left={left}
                  right={right}
                  bottom={isMobile}
                  duration={1000}
                  delay={250}
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
                  duration={1000}
                  delay={500}
                  distance="30px"
                >
                  <div className="project-wrapper__image">
                    <a
                      href={url || '#!'}
                      target="_blank"
                      aria-label="Project Link"
                      rel="noopener noreferrer"
                    >
                      <Tilt
                        options={{
                          reverse: false,
                          max: 5,
                          perspective: 1000,
                          scale: 1,
                          speed: 300,
                          transition: true,
                          axis: null,
                          reset: true,
                          easing: 'cubic-bezier(.03,.98,.52,.99)',
                        }}
                      >
                        <div data-tilt className="thumbnail rounded">
                          <ProjectImg alt={title} filename={img} />
                        </div>
                      </Tilt>
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
            <Fade top duration={1000} delay={200} distance="30px">
              <Link to="why" smooth duration={1000}>
                <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
              </Link>
            </Fade>
          </div>
        </div>
      </Container>
    </section>
  );
};

export default Projects;
