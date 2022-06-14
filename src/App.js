//Dependencies
import React from 'react';
import { useState, useEffect } from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import './App.css';
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Links from './pages/Links.js';
import Projects from './pages/Projects.js';
import Skills from './pages/Skills.js';

//JS
import polyDraw from './js/polyDraw.js';

// window.addEventListener('resize', polyDraw());

function App() {
  useEffect(() => {
    polyDraw(3);
  });
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" exact element={<About />} />
        <Route path="contact" element={<Contact />} />
        <Route path="links" element={<Links />} />
        <Route path="projects" element={<Projects />} />
        <Route path="skills" element={<Skills />} />
      </Routes>
    </div>
  );
}

export default App;
