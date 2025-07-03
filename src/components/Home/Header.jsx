import React from 'react';
import { FaArrowRight, FaPhone, FaEnvelope, FaMapMarkerAlt } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log('Form submitted');
  };

  return (
    <header className="header">
      {/* Top Info Bar */}
     
 

      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(https://greenworkscarpetcleaning.com/wp-content/uploads/2025/01/top-carpet-cleaners-in-Upland-CA-1.jpg)` }}
      >
        <div className="hero-overlay"></div>
        <div className="container">
          <div className="hero-content">
            <div className="hero-text">
              <span className="hero-badge">Welcome to Greenworks Carpet Cleaning</span>
              <h1>We are the #1&nbsp;Rated Carpet&nbsp;Cleaning&nbsp;Service</h1>
              <p className="hero-description">
                At Greenworks Carpet Cleaning, a home isn't spotless until its carpets
                are. As an environmentally-conscious company, we deliver unparalleled
                upholstery and carpet-cleaning services you can trust.
              </p>

              <div className="hero-features">
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Eco-Friendly Products</span>
                </div>
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>Same Day Service</span>
                </div>
               
                <div className="feature-item">
                  <div className="feature-icon">✓</div>
                  <span>100% Trust Guarantee</span>
                </div>
              </div>

              <div className="hero-cta">
                <button className="cta-primary">
                  <span>Schedule Service</span>
                  <FaArrowRight />
                </button>
                <button className="cta-secondary">
                  Learn More
                </button>
              </div>
            </div>

            <div className="hero-form-container">
              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>Request a Free Quote</h3>
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
                  <textarea placeholder="Additional Details"></textarea>
                </div>
                <button type="submit" className="submit-btn">
                  Get Free Estimate
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