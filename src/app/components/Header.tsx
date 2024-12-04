'use client'
import React, { useState, useEffect } from 'react';

const Header: React.FC = () => {
  const [darkMode, setDarkMode] = useState(false);

  const toggleDarkMode = () => {
    const newDarkMode = !darkMode;
    setDarkMode(newDarkMode);
    document.documentElement.classList.toggle('dark', newDarkMode);
    localStorage.setItem('darkMode', JSON.stringify(newDarkMode));
  };

  useEffect(() => {
    const savedDarkMode = JSON.parse(localStorage.getItem('darkMode') || 'false');
    setDarkMode(savedDarkMode);
    document.documentElement.classList.toggle('dark', savedDarkMode);
  }, []);

  return (
    <header className="flex items-center justify-around p-6 bg-blue-600 dark:bg-blue-900 text-white">
      <a href="/" className="mx-4">Friat Weldekidan</a>
      <nav>
        <a href="#about" className="mx-4">About Me</a>
        <a href="#portfolio" className="mx-4">Portfolio</a>
        <a href="#contact" className="mx-4">Contact</a>
      </nav>
      <button onClick={toggleDarkMode} className="p-2 bg-blue-700 rounded-full">
        {darkMode ? '🌙' : '☀️'}
      </button>
    </header>
  );
};

export default Header;
