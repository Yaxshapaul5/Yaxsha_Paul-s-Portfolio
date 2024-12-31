import React from 'react';
import './style.css'; // Assuming you're adding the styles in this file

// Importing the images
import githubImage from '../assets/github.png';
import linkedinImage from '../assets/link.png';
import xImage from '../assets/x.png';
import callImage from '../assets/call.png';
import mailImage from '../assets/mail.png';
import profileImage from '../assets/image_965c0693.png';

const Content = () => {
  return (
    <div className="content-container">
      <div className="text-content">
        <h1>Hi, I'm <span className="highlighted-name">Yaxshapraba</span></h1>
        <h2 className="software-developer">Software Developer</h2>
        <p>
          A passionate Software Developer skilled in full-stack development
          with expertise in React.js, Node.js, MongoDB, and PHP. Dedicated to
          growth, teamwork, and creating impactful solutions. Let’s connect and
          build something great together!
        </p>
        {/* Images in white circles */}
        <div className="image-circles">
          <a
            href="https://github.com/Yaxshapaul5"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={githubImage} alt="GitHub" className="circle-image" />
          </a>
          <a
            href="https://www.linkedin.com/in/yaxsha-paul-587645222"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={linkedinImage} alt="LinkedIn" className="circle-image" />
          </a>
          <a
            href="https://x.com/Yaxsha_Paul?t=RyCIlcC44-OI4d89HgDclA&s=08" // Replace this with your intended URL
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={xImage} alt="X" className="circle-image1" />
          </a>

          {/* Call */}
          <a
            href="tel:+9677967091" // Replace with your phone number
            rel="noopener noreferrer"
          >
            <img src={callImage} alt="Call" className="circle-image" />
          </a>

          {/* Mail */}
          <a
            href="https://mail.google.com/mail/?view=cm&fs=1&to=yaxshapaull@gmail.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={mailImage} alt="Mail" className="circle-image" />
          </a>

        </div>
      </div>
      <div className="image-content">
        <img src={profileImage} alt="Yaxshapraba" />
      </div>
    </div>
  );
};

export default Content;
