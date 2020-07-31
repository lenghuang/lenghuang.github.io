import React from 'react';
import MyHelmet from '../components/Helmet';
import Contact from '../components/Contact';
import MyNav from '../components/Nav';
import Footer from '../components/Footer';
import { heroData, contactData } from '../data/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

export default () => {
  return (
    <>
      <MyHelmet />
      <MyNav data={heroData} />
      <Contact data={contactData} />
      <Footer />
    </>
  );
};
