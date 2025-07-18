import React, { useState } from 'react';
import {
  FaArrowRight,
  FaCheck,
  FaCalendarAlt
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './Header.css';

const API_BASE =
  process.env.REACT_APP_API_BASE || 'https://greenwork-booking-form.onrender.com';

const Header = () => {
  const backgroundUrl = `${process.env.PUBLIC_URL}/header-image.jpg`;

  /* ──────────── STATE ──────────── */
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: '',
    details: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);
  const [error, setError] = useState('');

  /* ─────────── HANDLERS ────────── */
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    setError('');
    try {
      const res = await fetch(`${API_BASE}/api/bookings`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(formData)
      });
      if (!res.ok) {
        const { message } = await res.json();
        throw new Error(message || 'Something went wrong');
      }
      setSubmitSuccess(true);
      setFormData({
        fullName: '',
        email: '',
        phone: '',
        address: '',
        details: ''
      });
      setTimeout(() => setSubmitSuccess(false), 3000);
    } catch (err) {
      setError(err.message);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <header className="header">
      {/* Hero Section */}
      <div
        className="hero"
        style={{ backgroundImage: `url(${backgroundUrl})` }}
      >
        <div className="hero-overlay" />
        <div className="hero-particles" />

        <div className="container">
          <div className="hero-content">
            {/* Left Column - Text */}
            <div className="hero-text">
              <span className="hero-badge">
                <FaCalendarAlt className="badge-icon" />
                <span>Welcome to Greenworks Carpet Cleaning</span>
              </span>

              <h1>
                <span className="highlight-text">#1 Rated</span> Carpet
                Cleaning Service
                <br />
                in Your Area
              </h1>

              <p className="hero-description">
                At Greenworks Carpet Cleaning, a home isn&apos;t spotless until
                its carpets are. As an environmentally‑conscious company, we
                deliver unparalleled upholstery and carpet‑cleaning services you
                can trust.
              </p>

              <div className="hero-features">
                {[
                  'Eco‑Friendly Products',
                  'Same Day Service',
                  '100% Trust Guarantee'
                ].map((label) => (
                  <div className="feature-item" key={label}>
                    <div className="feature-icon">
                      <FaCheck />
                    </div>
                    <span>{label}</span>
                  </div>
                ))}
              </div>

              <div className="hero-cta">
                <a href="/contact" className="cta-primary">
                  <span>Schedule Service</span>
                  <FaArrowRight className="cta-icon" />
                </a>
                <Link to="/about" className="cta-secondary">
                  <span>Learn More</span>
                  <div className="hover-effect" />
                </Link>
              </div>
            </div>

            {/* Right Column - Booking Form */}
            <div className="hero-form-container">
              <div className="form-decoration form-decoration-1" />
              <div className="form-decoration form-decoration-2" />

              <form className="booking-form" onSubmit={handleSubmit}>
                <h3>
                  Request a <span className="highlight-text">Free Quote</span>
                </h3>

                <div className="form-group">
                  <input
                    name="fullName"
                    type="text"
                    placeholder="Full Name"
                    value={formData.fullName}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    name="email"
                    type="email"
                    placeholder="Email Address"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    name="phone"
                    type="tel"
                    placeholder="Phone Number"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <input
                    name="address"
                    type="text"
                    placeholder="Address"
                    value={formData.address}
                    onChange={handleChange}
                    required
                  />
                </div>

                <div className="form-group">
                  <textarea
                    name="details"
                    placeholder="Additional Details"
                    value={formData.details}
                    onChange={handleChange}
                  />
                </div>

                <button
                  type="submit"
                  className="submit-btn"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? 'Submitting…' : 'Get Free Estimate'}
                  <div className="submit-hover-effect" />
                </button>

                {/* feedback */}
                {submitSuccess && (
                  <p className="form-success">Thank you! Weʼll be in touch.</p>
                )}
                {error && <p className="form-error">{error}</p>}
              </form>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
