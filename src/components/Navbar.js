import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <div className="polyBorder" id="polyBorder"></div>

      <div className="poly" id="poly">
        <div className="introName">
          <span>Hi, my name is</span>
          <h1>James Cole</h1>
        </div>
        <div className="linkComponents">
          <Link to="/">
            <span>About</span>
          </Link>
          <Link to="/skills">
            <span>Skills</span>
          </Link>
          <Link to="/projects">
            <span>Projects</span>
          </Link>
          <Link to="/links">
            <span>Links</span>
          </Link>
          <Link to="/contact">
            <span>Contact</span>
          </Link>
        </div>
      </div>

      <div className="navbarBackground"></div>
    </div>
  );
}

export default Navbar;
