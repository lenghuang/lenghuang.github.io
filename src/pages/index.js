import React from 'react';
import MyHelmet from '../components/Helmet';
import About from '../components/About';
import MyNav from '../components/Nav';
import Footer from '../components/Footer';
import { aboutData, heroData } from '../data/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

export default () => {
  return (
    <>
      <MyHelmet />
      <MyNav data={heroData} />
      <About data={aboutData} />
      <Footer />
    </>
  );
};
