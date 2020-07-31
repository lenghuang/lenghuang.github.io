import React from 'react';
import MyHelmet from '../components/Helmet';
import Where from '../components/Projects';
import MyNav from '../components/Nav';
import Footer from '../components/Footer';
import { heroData, projectsData } from '../data/data';
// import 'bootstrap/dist/css/bootstrap.min.css';
// import '../style/main.scss';

export default () => {
  return (
    <>
      <MyHelmet />
      <MyNav data={heroData} />
      <Where data={projectsData} />
      <Footer />
    </>
  );
};
