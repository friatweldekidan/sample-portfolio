'use client';
import React, { useState} from "react";
import { FaMoon, FaSun } from 'react-icons/fa';
import { useTheme } from 'next-themes';
import Link from 'next/link';

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const {setTheme, resolvedTheme } = useTheme();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleDarkMode = () => {
    setTheme(resolvedTheme === 'dark' ? 'light' : 'dark');
  };

  return (
    <header className="flex items-center justify-around py-8 bg-blue-600 text-white dark:bg-gray-500 dark:text-gray-200">
      <Link href="/" className="text-xl font-semibold mx-4">Friat Weldekidan</Link>

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
        <Link href="#about" className="mx-4 my-2 lg:my-0">About Me</Link>
        <Link href="#portfolio" className="mx-4 my-2 lg:my-0">Portfolio</Link>
        <Link href="#contact" className="mx-4 my-2 lg:my-0">Contact</Link>
      </nav>    

      {/* Dark mode toggle button */}
      <button onClick={toggleDarkMode}>
        {resolvedTheme === 'dark' ? <FaSun className="text-white" /> : <FaMoon className="text-white" />}
      </button>
    </header>
  );
};

export default Header;
