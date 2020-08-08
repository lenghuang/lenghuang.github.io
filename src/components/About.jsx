import React, { useContext, useState, useEffect } from 'react';
import Fade from 'react-reveal/Fade';
import { Link } from 'react-scroll';
import { Container, Row, Col } from 'react-bootstrap';
import Title from './Title';
import AboutImg from './Image/AboutImg';
import PortfolioContext from '../context/context';

const About = () => {
  const { about } = useContext(PortfolioContext);
  const { img, img1, paragraphOne, paragraphTwo, paragraphThree, resume } = about;

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
    <section id="who">
      <Container>
        <Title title="Who I Am" />
        <Row className="about-wrapper">
          <Col md={6} sm={12}>
            <Fade bottom duration={500} delay={150} distance="30px">
              <div className="about-wrapper__image">
                {/* <AboutImg alt="Len Huang portrait picture" filename={img} /> */}
                <img style={{ width: '36rem' }} src={img1} alt="Len Huang profile picture" />
              </div>
            </Fade>
          </Col>
          <Col md={6} sm={12}>
            <Fade left={isDesktop} bottom={isMobile} duration={500} delay={200} distance="30px">
              <div className="about-wrapper__info" id="about-resume-btn">
                <p className="about-wrapper__info-text">{paragraphOne}</p>
                <p className="about-wrapper__info-text">{paragraphTwo}</p>
                <p className="about-wrapper__info-text">{paragraphThree}</p>
                {resume && (
                  <span className="d-flex mt-3">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      className="cta-btn cta-btn--resume"
                      href={resume}
                    >
                      Resume
                    </a>
                  </span>
                )}
              </div>
            </Fade>
          </Col>
        </Row>
        <div style={{ paddingTop: '2rem' }} className="back-to-top">
          <Fade top duration={500} delay={250} distance="30px">
            <Link to="what" smooth duration={1000}>
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
            </Link>
          </Fade>
        </div>
      </Container>
    </section>
  );
};

export default About;
