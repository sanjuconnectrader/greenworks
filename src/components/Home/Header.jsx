import React from 'react';
import { FaArrowRight } from 'react-icons/fa';
import './Header.css';

const Header = () => {
  // ✅ Build the correct URL once, then reuse it
  const backgroundUrl = `${process.env.PUBLIC_URL}/header-image.jpg`;

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted');
  };

  return (
    <header className="header">
      {/* ─── Hero Section ─── */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${backgroundUrl})` }}   /* <— here */
      >
        {/* Optional overlay for gradient or darken effect */}
        <div className="hero-overlay" />

        <div className="container">
          <div className="hero-content">
            {/* ── Left column ── */}
            <div className="hero-text">
              <span className="hero-badge">Welcome to Greenworks Carpet Cleaning</span>
              <h1>We are the #1&nbsp;Rated Carpet&nbsp;Cleaning&nbsp;Service</h1>
              <p className="hero-description">
                At Greenworks Carpet Cleaning, a home isn't spotless until its carpets
                are. As an environmentally-conscious company, we deliver unparalleled
                upholstery and carpet-cleaning services you can trust.
              </p>

              <div className="hero-features">
                {['Eco-Friendly Products', 'Same Day Service', '100% Trust Guarantee'].map(
                  (label) => (
                    <div className="feature-item" key={label}>
                      <div className="feature-icon">✓</div>
                      <span>{label}</span>
                    </div>
                  )
                )}
              </div>

              <div className="hero-cta">
                <button className="cta-primary">
                  <span>Schedule Service</span>
                  <FaArrowRight />
                </button>
                <button className="cta-secondary">Learn More</button>
              </div>
            </div>

            {/* ── Right column ── */}
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
                  <textarea placeholder="Additional Details" />
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
