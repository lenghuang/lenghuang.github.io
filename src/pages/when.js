import React from 'react';
import MyHelmet from '../components/Helmet';
import When from '../components/when';
import MyNav from '../components/Nav';
import Footer from '../components/Footer';
import { heroData, whenData } from '../data/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

export default () => {
  return (
    <>
      <MyHelmet />
      <MyNav data={heroData} />
      <When data={whenData} />
      <Footer />
    </>
  );
};
