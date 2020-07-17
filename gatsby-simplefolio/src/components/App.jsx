import React, { useState, useEffect } from 'react';
import Hero from './Hero';
import About from './About';
import What from './What';
import When from './When';
import Projects from './Projects';
import Contact from './Contact';
import Footer from './Footer';

import { PortfolioProvider } from '../context/context';

import { heroData, aboutData, whatData, whenData, projectsData, footerData } from '../mock/data';

function App() {
  const [hero, setHero] = useState({});
  const [about, setAbout] = useState({});
  const [what, setWhat] = useState([]);
  const [when, setWhen] = useState([]);
  const [projects, setProjects] = useState([]);

  const [footer, setFooter] = useState({});

  useEffect(() => {
    setHero({ ...heroData });
    setAbout({ ...aboutData });
    setWhat({ ...whatData });
    setWhen({ ...whenData });
    setProjects([...projectsData]);

    setFooter({ ...footerData });
  }, []);

  return (
    <PortfolioProvider value={{ hero, about, what, when, projects, footer }}>
      <Hero />
      <About />
      <What />
      <When />
      <Projects />
      <Contact />
      <Footer />
    </PortfolioProvider>
  );
}

export default App;
