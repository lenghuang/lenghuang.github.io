import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import hello from '../images/hello.gif';
import { Link } from 'react-scroll';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';

const SocialStuff = ({ networks }) => {
  return (
    <div className="social-links">
      {networks &&
        networks.map((network) => {
          const { id, name, url } = network;
          return (
            <a
              key={id}
              href={url || 'https://github.com/cobidev/gatsby-simplefolio'}
              rel="noopener noreferrer"
              target="_blank"
              aria-label={name}
            >
              <i className={`fa fa-${name || 'refresh'} fa-inverse`} />
            </a>
          );
        })}
    </div>
  );
};

const Contact = () => {
  const { footer } = useContext(PortfolioContext);
  const { networks } = footer;

  return (
    <section id="why">
      <Container>
        <Fade top duration={1000} delay={100} distance="30px">
          <img style={{ width: '10rem' }} src={hello} alt="Len Huang hello reach out to me" />
        </Fade>
        <Title title="why we should connect" />
        <Fade bottom duration={1000} delay={200} distance="30px">
          <div className="contact-wrapper">
            <p className="contact-wrapper__text">
              Thanks for reading through my story and learning more about my background. This has
              been my who, what, when, and where. If any of those interested you, that's a reason
              why for us to chat!
            </p>
          </div>
          <SocialStuff networks={networks} />
          <div className="back-to-top">
            <Link to="hero" smooth duration={1000}>
              <i className="fa fa-angle-up fa-2x" aria-hidden="true" />
            </Link>
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default Contact;
