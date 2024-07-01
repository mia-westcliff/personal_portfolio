import React from 'react';
import './Hero.css';

const Hero = () => {
  return (
    <div className="hero">
      <div className="hero-content">
        <p>Hi, my name is</p>
        <h1>Mia Zhou.</h1>
        <h2>I build things for the web.</h2>
        <p className="description">
          I'm a a passionate Front-End Developer with a keen eye for design and a strong background in building user-friendly, responsive web applications. I specialize in HTML, CSS, and JavaScript, with extensive experience in modern frameworks like React and Vue.js.
        </p>
        <a href="#projects" className="btn btn-primary">Check out my work!</a>
      </div>
    </div>
  );
};

export default Hero;
