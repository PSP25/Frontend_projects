import React from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="bg-gray-700 p-4 text-white">
      <ul className="flex space-x-4">
        <li><Link to="/">About</Link></li>
        <li><Link to="/education">Education</Link></li>
        <li><Link to="/profile">Profile</Link></li>
        <li><Link to="/resume">Resume</Link></li>
        <li><Link to="/technologies">Technologies</Link></li>
        <li><Link to="/projects">Projects</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
};

export default Navbar;
