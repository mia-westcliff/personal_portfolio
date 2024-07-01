import React from 'react';
import './Resume.css';
import resumePDF from '../resume/Xue_Zhou_Resume_Employment.pdf';

const Resume = () => {
  return (
    <div className="resume">
      <h2>Resume</h2>
      <iframe src={resumePDF} title="Resume" width="100%" height="600px"></iframe>
      <a href={resumePDF} download="Mia_Zhou_Resume.pdf" className="download-link">Download PDF</a>
    </div>
  );
};

export default Resume;
