import React from 'react';
import './style.css';

const About = () => {
  return (
    <>
      <div className="about-container">
        <h1 className="about-heading">About</h1>
        <p className="about-description">
          I am Yaxshapraba P, a passionate and dedicated Software Developer with expertise in full-stack development. 
          With proficiency in React.js, Node.js, MongoDB, PHP, and more, I specialize in building efficient, scalable, 
          and user-friendly applications. Currently based in Chennai, I have over a year of professional experience at 
          Lookman Electroplast Industries Pvt Ltd, where I’ve designed and implemented impactful software solutions. 
          Driven by a commitment to continuous learning and innovation, I aim to deliver value through technology.
        </p>
        <div className="skill-container">
          <h2 className="skill-heading">Skills</h2>
          <div className='skill-boxex'>
          <div className="skill-box">
    <img src="/assets/html.png" alt="Skill" className="skill-image" />
    <p>HTML5</p>
  </div>
  <div className="skill-box">
    <img src="/assets/css.png" alt="Skill" className="skill-image" />
    <p>CSS</p>
  </div>
  <div className="skill-box">
    <img src="/assets/js.png" alt="Skill" className="skill-image" />
    <p>JS</p>
  </div>
  <div className="skill-box">
    <img src="/assets/react.png" alt="Skill" className="skill-image" />
    <p>REACT JS</p>
  </div>
  <div className="skill-box">
    <img src="/assets/node.png" alt="Skill" className="skill-image" />
    <p>NODE JS</p>
  </div>
  <div className="skill-box">
    <img src="/assets/express.png" alt="Skill" className="skill-image" />
    <p>EXPRESS JS</p>
  </div>
  <div className="skill-box">
    <img src="/assets/php.png" alt="Skill" className="skill-image" />
    <p>PHP</p>
  </div>
  <div className="skill-box">
    <img src="/assets/sql.png" alt="Skill" className="skill-image" />
    <p>MYSQL</p>
  </div>
  <div className="skill-box">
    <img src="/assets/mongo.png" alt="Skill" className="skill-image" />
    <p>MONGODB</p>
  </div>
  <div className="skill-box">
    <img src="/assets/pg.png" alt="Skill" className="skill-image" />
    <p>POSTGRESQL</p>
  </div>
  <div className="skill-box">
    <img src="/assets/office.png" alt="Skill" className="skill-image" />
    <p>MS OFFICE</p>
  </div>
  </div>
        </div>
      </div>
    </>
  );
};

export default About;
