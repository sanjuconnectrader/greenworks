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
          <a
            href="https://book.housecallpro.com/book/GreenWorks-Carpet-Cleaning/d68f1199665f4437a75d2123c4ec5398?v2=true&merchant_id=3e43968f-48c3-4024-983a-da9b85be73d9&hl=en-US&gei=KjSDZ7aXGfT10PEP0IWhyQo&rwg_token=AJKvS9XVlwjzoWFVeFHQOYYtHIP68qAmBQs8BNq_MAIBoLyPsx6WyqieyIp5exbM6PsJRDmt1khkQrxTUu7G0LZAb-1SbUSicQ%3D%3D"
            className="footer__cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            Book Now <FaAngleDoubleRight className="footer__cta-icon" />
          </a>
        </div>
      </div>

      {/* Main Footer Content - Single Row Layout */}
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

          {/* All Navigation in Single Row */}
          <div className="footer__row-sections">
            {/* Services */}
            <div className="footer__section">
              <h4 className="footer__section-title">Services</h4>
              <ul className="footer__section-list">
                <li className="footer__section-item">
                  <Link to="/residential" className="footer__section-link">
                    Residential Cleaning
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/commercial" className="footer__section-link">
                    Commercial Cleaning
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/stain-removal" className="footer__section-link">
                    Stain Removal
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/deep-cleaning" className="footer__section-link">
                    Deep Cleaning
                  </Link>
                </li>
              </ul>
            </div>

            {/* Company */}
            <div className="footer__section">
              <h4 className="footer__section-title">Company</h4>
              <ul className="footer__section-list">
                <li className="footer__section-item">
                  <Link to="/about" className="footer__section-link">
                    About Us
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/team" className="footer__section-link">
                    Our Team
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/testimonials" className="footer__section-link">
                    Testimonials
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/careers" className="footer__section-link">
                    Careers
                  </Link>
                </li>
              </ul>
            </div>

            {/* Support */}
            <div className="footer__section">
              <h4 className="footer__section-title">Support</h4>
              <ul className="footer__section-list">
                <li className="footer__section-item">
                  <Link to="/faq" className="footer__section-link">
                    FAQ
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/contact" className="footer__section-link">
                    Contact
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/privacy" className="footer__section-link">
                    Privacy Policy
                  </Link>
                </li>
                <li className="footer__section-item">
                  <Link to="/terms" className="footer__section-link">
                    Terms of Service
                  </Link>
                </li>
              </ul>
            </div>

            {/* Contact Us */}
            <div className="footer__section">
              <h4 className="footer__section-title">Contact Us</h4>
              <ul className="footer__section-list">
                <li className="footer__section-item">
                  <FaMapMarkerAlt className="footer__contact-icon" />
                  <span>16824 44th Ave W Unit-170<br />Lynnwood, WA 98037</span>
                </li>
                <li className="footer__section-item">
                  <FaPhoneAlt className="footer__contact-icon" />
                  <span>(206) 899-6862</span>
                </li>
                <li className="footer__section-item">
                  <FaEnvelope className="footer__contact-icon" />
                  <span>info@greenworkscarpetcleaning.com</span>
                </li>
              </ul>
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
