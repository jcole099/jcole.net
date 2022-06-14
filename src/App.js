//Dependencies
import React from 'react';
import { Routes, Route } from 'react-router-dom';

//Pages
import './App.css';
import Navbar from './components/Navbar.js';
import About from './pages/About.js';
import Contact from './pages/Contact.js';
import Links from './pages/Links.js';
import Projects from './pages/Projects.js';
import Skills from './pages/Skills.js';

function App() {
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

