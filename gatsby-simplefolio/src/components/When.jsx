import React, { useContext } from 'react';
import Fade from 'react-reveal/Fade';
import { Container } from 'react-bootstrap';
import PortfolioContext from '../context/context';
import Title from './Title';

const When = () => {
  const { when } = useContext(PortfolioContext);
  const whens = Object.values(when);
  console.log(whens);
  return (
    <section id="when">
      <Container>
        <Title title="When Have I Done this" />
        <Fade bottom duration={1000} delay={200} distance="30px">
          <div className="when-wrapper">
            <p className="when-wrapper__text">{'Would you like to work with me? Awesome!'}</p>
            Let's Talk
          </div>
        </Fade>
      </Container>
    </section>
  );
};

export default When;
