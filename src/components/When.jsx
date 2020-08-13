import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import Tilt from 'react-tilt';
import { Link } from 'react-scroll';
import { Col, Row, Container } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';

const pairUp = (iterable) => {
  var pairs = [];
  for (var i = 0; i < iterable.length - 1; i += 2) {
    if (i % 2 === 0) {
      pairs.push([iterable[i], iterable[i + 1]]);
    }
  }
  if (pairs.length % 2 !== 0) {
    pairs.push([iterable[iterable.length - 1]]);
  }
  return pairs;
};

const makeCol = (w) => {
  return (
    <React.Fragment>
      <Col className="when-wrapper__center" sm={4} lg={2}>
        <div data-tilt className="thumbnail rounded">
          <img className="when-wrapper__logo" src={w.img} alt={w.company} />
        </div>
      </Col>
      <Col sm={8} lg={4}>
        <p className="when-wrapper__text-title">
          {w.company} {w.emoji}
        </p>
        <p className="when-wrapper__text-sec">
          <i>
            <b className="when-wrapper__text-sec-pos">{w.position} </b>
            <br />
            {w.time}
          </i>{' '}
          <br />
        </p>
        <p className="when-wrapper__text">{w.desc}</p>
      </Col>
    </React.Fragment>
  );
};

const When = () => {
  const { when } = useContext(PortfolioContext);
  const whens = pairUp(Object.values(when));
  return (
    <section id="when">
      <Container>
        <Title title="When Have I Done this" />
        <Fade bottom duration={500} delay={150} distance="30px">
          <a
            target="_blank"
            rel="noopener noreferrer"
            className="cta-btn cta-btn--resume"
            href="https://linkedin.com/in/len-huang"
          >
            View more on LinkedIn
          </a>
        </Fade>
        <Fade bottom duration={500} delay={200} distance="30px">
          <div className="when-wrapper">
            <div className="blurb when-wrapper__text">
              A lot of these skills I've gathered from learning at internships, teaching classmates,
              and exploring personal projects.
            </div>
          </div>
        </Fade>
        {whens &&
          whens.map(([x, y], i) => {
            return (
              <Fade key={x.id} bottom duration={500} delay={200 + i * 50} distance="30px">
                <Row>
                  {makeCol(x)}
                  {y && makeCol(y)}
                </Row>
              </Fade>
            );
          })}{' '}
        {/* <div className="back-to-top">
          <Fade top duration={500} delay={150} distance="30px">
            <Link to="where" smooth duration={1000} offset={70}>
              <i className="fa fa-angle-down fa-2x" aria-hidden="true" />
            </Link>
          </Fade>
        </div> */}
        {/* <Row id="when-last-row"></Row> */}
      </Container>
    </section>
  );
};

export default When;
