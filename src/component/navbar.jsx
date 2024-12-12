import React, { useState, useRef, useEffect } from "react";
import Content from "./content";
import About from "./about";
import Projects from "./projects";
import ContactUs from "./contact";
import "./style.css"; // Include CSS for styling

const Navbar = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const [isNotificationVisible, setIsNotificationVisible] = useState(true); // State to manage notification visibility

  // Refs for each section
  const contentRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);

  // Check if the device is mobile
  const isMobile = window.innerWidth <= 768;

  // Toggle sidebar
  const toggleSidebar = () => {
    setSidebarOpen(!sidebarOpen);
  };

  // Function to scroll to a specific section
  const scrollToSection = (ref) => {
    ref.current.scrollIntoView({ behavior: "smooth", block: "start" });
    setSidebarOpen(false); // Close sidebar after click (for mobile view)
  };

  // Close the desktop notification when clicked
  const closeNotification = () => {
    setIsNotificationVisible(false);
    localStorage.setItem("desktop-notification-dismissed", "true"); // Save to localStorage
  };

  useEffect(() => {
    // Check if the user has already dismissed the notification
    if (localStorage.getItem("desktop-notification-dismissed")) {
      setIsNotificationVisible(false);
    }
  }, []);

  return (
    <>
      {/* Desktop Notification */}
      {isNotificationVisible && isMobile && (
        <div className="desktop-notification">
          <p>
            For a better experience, please view this site in{" "}
            <strong>Desktop Mode</strong>.
          </p>
          <button onClick={closeNotification} className="close-btn">
            &times;
          </button>
        </div>
      )}

      <nav className="navbar">
        <div className="navbar-left">
          <span
            className="logo"
            onClick={() => scrollToSection(contentRef)}
            style={{ cursor: "pointer" }} // Make the text look clickable
          >
            Yaxsha...
          </span>
        </div>

        {/* Navbar Center (hidden on mobile and tablet views) */}
        <div className="navbar-center">
          <ul className="nav-links">
            {/* <li onClick={() => scrollToSection(contentRef)}>Home</li> */}
            <li onClick={() => scrollToSection(aboutRef)}>About</li>
            <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
            <li onClick={() => scrollToSection(contactRef)}>Contact Me</li>
          </ul>
        </div>

        {/* Navbar Right - Button */}
        <div className="navbar-right">
          <button
            className="talk-button"
            onClick={() => scrollToSection(contactRef)}
          >
            Let's Talk
          </button>
        </div>

        {/* Sidebar toggle for mobile view */}
        <div className="navbar-mobile">
          <span onClick={toggleSidebar} className="sidebar-icon">
            &#9776; {/* Three-line icon */}
          </span>
        </div>
      </nav>

      {/* Sidebar - visible when sidebarOpen is true */}
      <div className={`sidebar ${sidebarOpen ? "open" : ""}`}>
        <ul className="sidebar-links">
          <li onClick={() => scrollToSection(contentRef)}>Home</li>
          <li onClick={() => scrollToSection(aboutRef)}>About</li>
          <li onClick={() => scrollToSection(projectsRef)}>Projects</li>
          <li onClick={() => scrollToSection(contactRef)}>Contact Me</li>
        </ul>
      </div>

      {/* Content */}
      <div ref={contentRef}>
        <Content />
      </div>
      <div ref={aboutRef}>
        <About />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={contactRef}>
        <ContactUs />
      </div>
    </>
  );
};

export default Navbar;
