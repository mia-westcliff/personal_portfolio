import React from 'react';
import Hero from './Hero';
import Projects from './Projects';
import './Home.css';

const Home = () => {
  return (
    <div className="home">
      <Hero />
      <section id="projects">
        <Projects />
      </section>
    </div>
  );
};

export default Home;
