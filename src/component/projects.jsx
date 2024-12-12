import React from 'react';
import './style.css';

const Projects = () => {
  return (
    <div className="projects-container">
      <h1 className="projects-heading">Projects</h1>
      <div className="project-box">
        <p className="project-title">E-Voting System</p>
        <p>Developed with PHP, HTML, CSS, and MySQL, enabling students to vote online for department leaders.</p>
      </div>
      <div className="project-box">
        <p className="project-title">Weaving Machinery Administration</p>
        <p>A tool to track orders, materials, and product stock, built with PHP, HTML, CSS, and MySQL.</p>
      </div>
      <div className="project-box">
        <p className="project-title">CM’s Breakfast Scheme Project</p>
        <p>A MERN stack web application hosted on AWS, supporting reliable and scalable infrastructure.</p>
      </div>
      <div className="project-box">
        <p className="project-title">MTC UAT Task Management System</p>
        <p>Built with React, Material-UI, and Hasura for company task management.</p>
      </div>
      <div className="project-box">
        <p className="project-title">Video Surveillance System</p>
        <p>Developed with React, Node.js, and PostgreSQL for real-time monitoring of live camera feeds.</p>
      </div>
      <div className="project-box">
        <p className="project-title">MTC Health Monitor</p>
        <p>A React and Node.js-based solution for real-time monitoring of MNVR kits and cameras.</p>
      </div>
    </div>
  );
};

export default Projects;
