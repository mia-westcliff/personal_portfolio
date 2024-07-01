import React from 'react';
import './Projects.css';
import project1 from '../images/project1.png';
import project2 from '../images/project2.png';
import project3 from '../images/project3.png';
import project4 from '../images/project4.png';
import project5 from '../images/project5.png';

const projects = [
  {
    name: 'Project 1',
    image: project1,
    demoLink: 'https://github.com/mia-westcliff/final-project-team4/tree/main/Final%20Project%20Screenshots',
    githubLink: 'https://github.com/mia-westcliff/final-project-team4'
  },
  {
    name: 'Project 2',
    image: project2,
    demoLink: 'https://jobquest-client-jdr6.onrender.com',
    githubLink: 'https://github.com/fehms1864/JobQuest'
  },
  {
    name: 'Project 3',
    image: project3,
    demoLink: 'https://great-cliffs-of-california.netlify.app/',
    githubLink: 'https://github.com/mia-westcliff/homework_w7d2'
  },
  {
    name: 'Project 4',
    image: project4,
    demoLink: 'https://strong-blancmange-d9fd21.netlify.app/',
    githubLink: 'https://github.com/mia-westcliff/m4-w4-d2-exercise'
  },
  {
    name: 'Project 5',
    image: project5,
    demoLink: 'https://vl26qc.csb.app/',
    githubLink: 'https://codesandbox.io/p/sandbox/w2-d1-homework-vl26qc'
  },
];

const Projects = () => {
  return (
    <div className="projects-container">
      <h2>Projects</h2>
      <p>Check out some of my work</p>
      <div className="projects">
        {projects.map((project, index) => (
          <div className="project" key={index}>
            <img src={project.image} alt={project.name} />
            <h3>{project.name}</h3>
            <p>
              <a href={project.demoLink} target="_blank" rel="noopener noreferrer">Live Demo</a>
              <a href={project.githubLink} target="_blank" rel="noopener noreferrer">GitHub</a>
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Projects;
