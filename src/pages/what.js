import React from 'react';
import MyHelmet from '../components/Helmet';
import What from '../components/what';
import MyNav from '../components/Nav';
import Footer from '../components/Footer';
import { heroData, whatData } from '../data/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

export default () => {
  return (
    <>
      <MyHelmet />
      <MyNav data={heroData} />
      <What data={whatData} />
      <Footer />
    </>
  );
};
