import React from "react";
import "./Footer.css";
import { FaAngleDoubleRight, FaMapMarkerAlt, FaPhoneAlt, FaEnvelope, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container">
        {/* Top Section - CTA */}
        <div className="footer__top">
          <div className="footer__heading">
            <h2 className="footer__title">
              Get Started Now <span className="footer__highlight">!</span>
            </h2>
            <p className="footer__subtitle">We're excited to work with you!</p>
          </div>
          <Link to="/contact" className="footer__quote-link">
            <button className="footer__quote-btn">
              REQUEST A QUOTE <FaAngleDoubleRight className="footer__btn-icon" />
            </button>
          </Link>
        </div>

        {/* Main Content */}
        <div className="footer__content">
          {/* Company Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">Company</h4>
            <ul className="footer__links">
              <li>
                <Link to="/about-us" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" /> About Us
                </Link>
              </li>
              <li>
                <Link to="/termsofservice" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" /> Terms of Service
                </Link>
              </li>
              <li>
                <Link to="/privacy-and-policy" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" /> Privacy Policy
                </Link>
              </li>
            </ul>
          </div>

          {/* Quick Links */}
          <div className="footer__column">
            <h4 className="footer__column-title">Quick Links</h4>
            <ul className="footer__links">
              <li>
                <Link to="/" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" /> Home
                </Link>
              </li>
              <li>
                <Link to="/web-design" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" /> Services
                </Link>
              </li>
              <li>
                <Link to="/contact" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" /> Pricing
                </Link>
              </li>
              <li>
                <Link to="/referrals" className="footer__link">
                  <FaAngleDoubleRight className="footer__link-icon" />Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="footer__column">
            <h4 className="footer__column-title">Connect</h4>
            <div className="footer__contact-info">
              <div className="footer__contact-item">
                <FaMapMarkerAlt className="footer__contact-icon" />
                <span>california State, USA</span>
              </div>
              <div className="footer__contact-item">
                <FaPhoneAlt className="footer__contact-icon" />
                <span>672-453-3612</span>
              </div>
              <div className="footer__contact-item">
                <FaEnvelope className="footer__contact-icon" />
                <span>greenworkscarpetcleaning@gmail.com</span>
              </div>
            </div>
            <div className="footer__social-links">
              <a href="#" className="footer__social-link" aria-label="Facebook">
                <FaFacebookF />
              </a>
              <a href="#" className="footer__social-link" aria-label="Twitter">
                <FaTwitter />
              </a>
              <a href="#" className="footer__social-link" aria-label="LinkedIn">
                <FaLinkedinIn />
              </a>
              <a href="#" className="footer__social-link" aria-label="Instagram">
                <FaInstagram />
              </a>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="footer__bottom">
          <p className="footer__copyright">
            &copy; {new Date().getFullYear()} Greenworks. All Rights Reserved
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;