// src/components/Footer.jsx
import React from "react";
import "./Footer.css";
import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      {/* Gradient CTA Section */}
      <div className="footer__cta">
        <div className="footer__cta-container">
          <div className="footer__cta-content">
            <h2 className="footer__cta-title">
              Ready to Transform Your Space? <span className="footer__cta-highlight">Let's Talk</span>
            </h2>
            <p className="footer__cta-subtitle">Get your free consultation and quote today</p>
          </div>
          <Link to="/contact" className="footer__cta-button">
            REQUEST A QUOTE <FaAngleDoubleRight className="footer__cta-icon" />
          </Link>
        </div>
      </div>

      {/* Main Footer Content */}
      <div className="footer__main">
        <div className="footer__main-container">
          {/* Company Info */}
          <div className="footer__company">
            <Link to="/" className="footer__logo-link">
              <img src="./green-logo.png" alt="Greenworks Logo" className="footer__logo-img" />
            </Link>
            <p className="footer__company-description">
              Premium carpet cleaning services with eco-friendly solutions for residential and commercial properties.
            </p>
            <div className="footer__social">
              <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
              <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer" className="footer__social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          {/* Navigation Links */}
          <div className="footer__nav">
            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Services</h4>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <Link to="/residential" className="footer__nav-link">
                    <span className="footer__nav-link-text">Residential Cleaning</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/commercial" className="footer__nav-link">
                    <span className="footer__nav-link-text">Commercial Cleaning</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/stain-removal" className="footer__nav-link">
                    <span className="footer__nav-link-text">Stain Removal</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/deep-cleaning" className="footer__nav-link">
                    <span className="footer__nav-link-text">Deep Cleaning</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Company</h4>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <Link to="/about" className="footer__nav-link">
                    <span className="footer__nav-link-text">About Us</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/team" className="footer__nav-link">
                    <span className="footer__nav-link-text">Our Team</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/testimonials" className="footer__nav-link">
                    <span className="footer__nav-link-text">Testimonials</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/careers" className="footer__nav-link">
                    <span className="footer__nav-link-text">Careers</span>
                  </Link>
                </li>
              </ul>
            </div>

            <div className="footer__nav-column">
              <h4 className="footer__nav-title">Support</h4>
              <ul className="footer__nav-list">
                <li className="footer__nav-item">
                  <Link to="/faq" className="footer__nav-link">
                    <span className="footer__nav-link-text">FAQ</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/contact" className="footer__nav-link">
                    <span className="footer__nav-link-text">Contact</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/privacy" className="footer__nav-link">
                    <span className="footer__nav-link-text">Privacy Policy</span>
                  </Link>
                </li>
                <li className="footer__nav-item">
                  <Link to="/terms" className="footer__nav-link">
                    <span className="footer__nav-link-text">Terms of Service</span>
                  </Link>
                </li>
              </ul>
            </div>
          </div>

          {/* Contact Information */}
          <div className="footer__contact">
            <h4 className="footer__contact-title">Contact Us</h4>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span className="footer__contact-text">123 Green Avenue, Suite 450<br />San Diego, CA 92101</span>
              </div>
              <div className="footer__contact-item">
                <FaPhoneAlt className="footer__contact-icon" />
                <span className="footer__contact-text">(672) 453-3612</span>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <span className="footer__contact-text">contact@greenworkscleaning.com</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Footer Bottom */}
      <div className="footer__bottom">
        <div className="footer__bottom-container">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Greenworks Carpet Cleaning. All rights reserved.
          </p>
          <div className="footer__legal">
            <Link to="/privacy" className="footer__legal-link">
              Privacy Policy
            </Link>
            <span className="footer__legal-separator">|</span>
            <Link to="/terms" className="footer__legal-link">
              Terms of Service
            </Link>
            <span className="footer__legal-separator">|</span>
            <Link to="/sitemap" className="footer__legal-link">
              Sitemap
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;