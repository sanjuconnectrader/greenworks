import React, { useState, useEffect } from 'react';
import { FaBars, FaTimes, FaPhone, FaCalendarAlt } from 'react-icons/fa';
import { motion, AnimatePresence } from 'framer-motion';
import './Navbar.css';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [activeLink, setActiveLink] = useState('Home');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    
    // Set active link based on current URL
    const currentPath = window.location.pathname;
    const navLinks = [
      { name: 'Home', path: '/' },
      { name: 'About', path: '/about' },
      { name: 'Services', path: '/services' },
      { name: 'Pricing', path: '/pricing-details' },
      { name: 'Contact', path: '/contact' },
    ];
    
    const currentLink = navLinks.find(link => 
      currentPath === link.path || 
      (link.path !== '/' && currentPath.startsWith(link.path))
    );
    
    if (currentLink) {
      setActiveLink(currentLink.name);
    }

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  const handleLinkClick = (name) => {
    setActiveLink(name);
    setMenuOpen(false);
  };

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
          onClick={() => handleLinkClick('Home')}
        >
          <img
            src="https://greenworkscarpetcleaning.com/wp-content/uploads/2025/02/cropped-GW_CARPET_CLEANING_2025_LOGO-removebg-preview.png"
            alt="GreenWorks Logo"
          />
        </motion.a>

        {/* Desktop Nav links */}
        <div className="navbar__menu">
          {navLinks.map((link) => (
            <a
              key={link.name}
              href={link.path}
              className={`navbar__link ${activeLink === link.name ? 'active' : ''}`}
              onClick={() => handleLinkClick(link.name)}
            >
              <motion.span 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                className="link__content"
              >
                {link.name}
                {activeLink === link.name && (
                  <motion.span 
                    className="active-indicator"
                    layoutId="activeIndicator"
                    transition={{ type: 'spring', stiffness: 300, damping: 30 }}
                  />
                )}
              </motion.span>
            </a>
          ))}
        </div>

        {/* Desktop buttons */}
        <div className="navbar__buttons">
          <motion.a
            href="tel:+15553568888"
            className="btn btn--outline"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn__icon-wrapper">
              <FaPhone className="btn__icon" />
            </span>
            <span className="btn__text">Call Us Now</span>
          </motion.a>

          <motion.a
            href="#schedule"
            className="btn btn--primary"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            <span className="btn__icon-wrapper">
              <FaCalendarAlt className="btn__icon" />
            </span>
            <span className="btn__text">Schedule Now</span>
          </motion.a>
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

        {/* Mobile menu overlay */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="mobile-menu__overlay"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={toggleMenu}
            />
          )}
        </AnimatePresence>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div 
              className="mobile-menu"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', stiffness: 300, damping: 30 }}
            >
              <div className="mobile-menu__content">
                {navLinks.map((link) => (
                  <a
                    key={link.name}
                    href={link.path}
                    className={`mobile-menu__link ${activeLink === link.name ? 'active' : ''}`}
                    onClick={() => handleLinkClick(link.name)}
                  >
                    <motion.span
                      whileHover={{ x: 5 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      {link.name}
                      {activeLink === link.name && (
                        <span className="mobile-active-indicator" />
                      )}
                    </motion.span>
                  </a>
                ))}

                <div className="mobile-menu__buttons">
                  <motion.a
                    href="tel:+15553568888"
                    className="btn btn--outline"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="btn__icon-wrapper">
                      <FaPhone className="btn__icon" />
                    </span>
                    <span className="btn__text">Call Us Now</span>
                  </motion.a>

                  <motion.a
                    href="#schedule"
                    className="btn btn--primary"
                    whileHover={{ scale: 1.02 }}
                    whileTap={{ scale: 0.98 }}
                  >
                    <span className="btn__icon-wrapper">
                      <FaCalendarAlt className="btn__icon" />
                    </span>
                    <span className="btn__text">Schedule Now</span>
                  </motion.a>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </nav>
  );
};

export default Navbar;