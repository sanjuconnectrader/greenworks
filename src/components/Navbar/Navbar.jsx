// src/components/Navbar.jsx
import React, { useState, useEffect } from 'react';
import {
  FaBars,
  FaTimes,
  FaPhone,
  FaCalendarAlt
} from 'react-icons/fa';
import { motion } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
    { name: 'Services', path: '/services' },
    { name: 'Pricing', path: '/pricing-details' },
    { name: 'Contact', path: '/contact' },
  ];

  return (
    <nav className={`navbar ${scrolled ? 'scrolled' : ''}`}>
      <div className="navbar__container">
        {/* Logo */}
        <motion.a
          href="/"
          className="navbar__logo"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <img
            src="./green-logo.png"
            alt="LushLandscapes"
          />
        </motion.a>

        {/* Nav links */}
        <div className={`navbar__menu${menuOpen ? ' active' : ''}`}>
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className="navbar__link"
              onClick={() => setMenuOpen(false)}
            >
              <motion.span whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
                {link.name}
              </motion.span>
            </a>
          ))}

          {/* Mobile buttons */}
          <div className="navbar__mobile-buttons">
            <motion.button
              className="btn btn--outline"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
         
              Call-Us-Now
            </motion.button>

            <motion.button
              className="btn btn--primary"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
             
              Schedule Now
            </motion.button>
          </div>
        </div>

        {/* Desktop buttons */}
        <div className="navbar__buttons">
          <motion.button
            className="btn btn--outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaPhone className="btn__icon--left" />
            Call Us Now
          </motion.button>

          <motion.button
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <FaCalendarAlt className="btn__icon--left" />
            Schedule Now
          </motion.button>
        </div>

        {/* Mobile menu toggle */}
        <motion.button
          className="navbar__toggle"
          onClick={toggleMenu}
          aria-label="Toggle menu"
          whileTap={{ scale: 0.9 }}
        >
          {menuOpen ? (
            <motion.div
              initial={{ rotate: 0 }}
              animate={{ rotate: 180 }}
              transition={{ duration: 0.3 }}
            >
              <FaTimes />
            </motion.div>
          ) : (
            <FaBars />
          )}
        </motion.button>
      </div>
    </nav>
  );
};

export default Navbar;
