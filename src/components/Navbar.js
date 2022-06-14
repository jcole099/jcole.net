import React from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  return (
    <div className="navbar">
      <h1>Navbar</h1>

      <Link to='/'><span>About</span></Link>
      <Link to='/skills'><span>Skills</span></Link>
      <Link to='/projects'><span>Projects</span></Link>
      <Link to='/links'><span>Links</span></Link>
      <Link to='/contact'><span>Contact</span></Link>

    </div>
  );
}

export default Navbar;
