import React from 'react';
import { FaArrowRight, FaCheck, FaPhone, FaCalendarAlt, FaMapMarkerAlt, FaClock } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const backgroundUrl = `${process.env.PUBLIC_URL}/header-image.jpg`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <header className="header">
      {/* Info Bar - Fixed at the top */}
   

      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-particles" />

        <div className="container">
          <div className="hero-content">
            {/* Left Column - Content */}
            <div className="hero-text">
              <span className="hero-badge">
                <FaCalendarAlt className="badge-icon" />
                <span>Welcome to Greenworks Carpet Cleaning</span>
              </span>
              <h1>
                <span className="highlight-text">#1 Rated</span> Carpet Cleaning Service
                <br />in Your Area
              </h1>
              <p className="hero-description">
                At Greenworks Carpet Cleaning, a home isn't spotless until its carpets
                are. As an environmentally-conscious company, we deliver unparalleled
                upholstery and carpet-cleaning services you can trust.
              </p>

              <div className="hero-features">
                {['Eco-Friendly Products', 'Same Day Service', '100% Trust Guarantee'].map(
                  (label) => (
                    <div className="feature-item" key={label}>
                      <div className="feature-icon">
                        <FaCheck />
                      </div>
                      <span>{label}</span>
                    </div>
                  )
                )}
              </div>

              <div className="hero-cta">
                <button className="cta-primary">
                  <span>Schedule Service</span>
                  <FaArrowRight className="cta-icon" />
                </button>
                <button className="cta-secondary">
                  <span>Learn More</span>
                  <div className="hover-effect" />
                </button>
              </div>
            </div>

            {/* Right Column - Form */}
            <div className="hero-form-container">
              <div className="form-decoration form-decoration-1" />
              <div className="form-decoration form-decoration-2" />
              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>Request a <span className="highlight-text">Free Quote</span></h3>
                <div className="form-group">
                  <input type="text" placeholder="Full Name" required />
                </div>
                <div className="form-group">
                  <input type="email" placeholder="Email Address" required />
                </div>
                <div className="form-group">
                  <input type="tel" placeholder="Phone Number" required />
                </div>
                <div className="form-group">
                  <select required>
                    <option value="">Service Needed</option>
                    <option value="carpet">Carpet Cleaning</option>
                    <option value="upholstery">Upholstery Cleaning</option>
                    <option value="rug">Rug Cleaning</option>
                    <option value="other">Other</option>
                  </select>
                </div>
                <div className="form-group">
                  <textarea placeholder="Additional Details" />
                </div>
                <button type="submit" className="submit-btn">
                  Get Free Estimate
                  <div className="submit-hover-effect" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;