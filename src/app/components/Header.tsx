'use client';
import React, { useState } from "react";
import { FaMoon, FaSun } from 'react-icons/fa';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isDarkMode, setIsDarkMode] = useState(true);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setIsDarkMode(!isDarkMode);
    if (!isDarkMode) {
      document.body.classList.add('dark-mode');  
    } else {
      document.body.classList.remove('dark-mode');  
    }
  };

  return (
    <header className="flex items-center justify-around py-8 bg-blue-600 text-white">
      <a href="/" className="text-xl font-semibold mx-4">Friat Weldekidan</a>

      {/* Mobile menu button */}
      <button
        className="lg:hidden p-2 bg-blue-700 rounded-full"
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white mb-1"></span>
        <span className="block w-6 h-0.5 bg-white"></span>
      </button>
      
      <nav className={`lg:flex lg:block ${isMenuOpen ? 'block' : 'hidden'}`}>
        <a href="#about" className="mx-4 my-2 lg:my-0">About Me</a>
        <a href="#portfolio" className="mx-4 my-2 lg:my-0">Portfolio</a>
        <a href="#contact" className="mx-4 my-2 lg:my-0">Contact</a>
      </nav>    

      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode}>
        {isDarkMode ? <FaSun className="text-white" /> : <FaMoon className="text-white" />}
      </button>
    </header>
  );
};

export default Header;
