import React, { useState, useEffect } from 'react';
import { Button } from '@/components/ui/button';
import { Moon, Sun, Menu, X } from 'lucide-react';
import 'tailwindcss/tailwind.css';
import { motion } from 'framer-motion';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import Home from './pages/Home';
import About from './pages/About';
import Projects from './pages/Projects';
import Contact from './pages/Contact';
import CaseStudyMyFlix from './pages/CaseStudyMyFlix';

export default function Portfolio() {
  const [darkMode, setDarkMode] = useState(false);
  // const [activePage, setActivePage] = useState('home');
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const savedMode = localStorage.getItem('darkMode');
    if (savedMode) {
      setDarkMode(savedMode === 'true');
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('darkMode', darkMode);
    if (darkMode) {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [darkMode]);

  return (
    <Router basename='/portfolio'>
      <div
        className={`min-h-screen px-6 py-12 ${
          darkMode ? 'bg-gray-900 text-white' : 'bg-[#f8f8f8] text-grey'
        }`}
      >
        {/* Dark Mode Toggle Button */}
        <div className="flex justify-between items-center mb-6">
          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button onClick={() => setIsMenuOpen(!isMenuOpen)}>
              {isMenuOpen ? <X size={32} /> : <Menu size={32} />}
            </button>
          </div>

          {/* Navigation Menu */}
          <nav className="hidden md:flex space-x-4">
            <Link to="/">
              <Button
                className="bg-[#B56357] text-primary-foreground hover:bg-primary-500 rounded-md px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-medium transition duration-300 w-auto sm:w-auto"
                // onClick={() => setActivePage('home')}
              >
                Home
              </Button>
            </Link>
            <Link to="/about">
              <Button
                className="bg-[#B56357] text-primary-foreground hover:bg-primary-500 rounded-md px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-medium transition duration-300 w-auto sm:w-auto"
                // onClick={() => setActivePage('about')}
              >
                About
              </Button>
            </Link>
            <Link to="/projects">
              <Button
                className="bg-[#B56357] text-primary-foreground hover:bg-primary-500 rounded-md px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-medium transition duration-300 w-auto sm:w-auto"
                // onClick={() => setActivePage('projects')}
              >
                Projects
              </Button>
            </Link>
            <Link to="/contact">
              <Button
                className="bg-[#B56357] text-primary-foreground hover:bg-primary-500 rounded-md px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-medium transition duration-300 w-auto sm:w-auto"
                // onClick={() => setActivePage('contact')}
              >
                Contact
              </Button>
            </Link>
            <Button
              className="bg-[#90b7b7] text-primary-foreground hover:bg-primary-500 rounded-md px-3 py-2 text-sm sm:px-4 sm:py-2 sm:text-base font-medium transition duration-300 w-auto sm:w-auto"
              onClick={() =>
                window.open('/Corinne-Haggerty-Resume.pdf', '_blank')
              }
            >
              Resume
            </Button>
          </nav>

          {/* Mobile Dropdown Menu */}
          {isMenuOpen && (
            <div className="absolute top-16 left-0 w-full bg-white dark:bg-gray-800 shadow-lg md:hidden">
              <Link to="/">
              <button
                className="block w-full text-left px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => {
                  // setActivePage('home');
                  setIsMenuOpen(false);
                }}
              >
                Home
              </button>
              </Link>
              <Link to="/about">
              <button
                className="block w-full text-left px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => {
                  // setActivePage('about');
                  setIsMenuOpen(false);
                }}
              >
                About
              </button>
              </Link>
              <Link to="/projects">
              <button
                className="block w-full text-left px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => {
                  // setActivePage('work');
                  setIsMenuOpen(false);
                }}
              >
                Projects
              </button>
              </Link>
              <Link to="/contact">
              <button
                className="block w-full text-left px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => {
                  // setActivePage('contact');
                  setIsMenuOpen(false);
                }}
              >
                Contact
              </button>
              </Link>
              <button
                className="block w-full text-left px-6 py-3 hover:bg-gray-200 dark:hover:bg-gray-700"
                onClick={() => {
                  window.open('/Corinne-Haggerty-Resume.pdf', '_blank');
                  setIsMenuOpen(false);
                }}
              >
                Resume
              </button>
            </div>
          )}

          {/* Dark Mode Toggle */}
          <Button
            onClick={() => setDarkMode(!darkMode)}
            className="p-2 rounded-full bg-gray-200 dark:bg-gray-700 hover:bg-gray-300 dark:hover:bg-gray-600"
          >
            {darkMode ? (
              <Sun className="w-5 h-5 text-yellow-400" />
            ) : (
              <Moon className="w-5 h-5 text-gray-800" />
            )}
          </Button>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        ></motion.div>

         {/* Page Content */}
         <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/case-study/myflix" element={<CaseStudyMyFlix />} />
        </Routes>
        </div>
    </Router>
  );
}
