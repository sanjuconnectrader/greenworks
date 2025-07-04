// src/components/Contact.jsx
import React from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaHome } from "react-icons/fa";
import "./Contact.css";

const Contact = () => {
   const backgroundUrl = `${process.env.PUBLIC_URL}/header-image.jpg`;

  return (
    <div
      className="contact-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(9, 41, 72, 0.9) 0%, rgba(2, 174, 239, 0.8) 100%), url(${backgroundUrl})`
      }}
    >
      <div className="contact-container">
        {/* LEFT SIDE - CONTACT INFO */}
        <div className="contact-info">
         
          
          <div className="contact-content">
            <h2 className="contact-title">Get In Touch</h2>
            <p className="contact-subtitle">
              Our team is ready to assist you with any questions about our premium cleaning services.
            </p>
            
            <div className="contact-details-list">
              <div className="contact-detail">
                <div className="contact-icon-wrapper">
                  <FaEnvelope className="contact-icon" />
                </div>
                <div className="contact-text">
                  <div className="contact-label">Email Us</div>
                  <div className="contact-value">contact@greenworks.com</div>
                  <a href="mailto:contact@greenworks.com" className="contact-link">Send a message →</a>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon-wrapper">
                  <FaPhoneAlt className="contact-icon" />
                </div>
                <div className="contact-text">
                  <div className="contact-label">Call Us</div>
                  <div className="contact-value">+1 (555) 356-8888</div>
                  <a href="tel:+15553568888" className="contact-link">Call now →</a>
                </div>
              </div>
              
              <div className="contact-detail">
                <div className="contact-icon-wrapper">
                  <FaMapMarkerAlt className="contact-icon" />
                </div>
                <div className="contact-text">
                  <div className="contact-label">Visit Us</div>
                  <div className="contact-value">556 Green Avenue, Seattle, WA 98101</div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contact-link"
                  >
                    Get directions →
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* RIGHT SIDE - TRANSPARENT CONTACT FORM */}
        <div className="contact-form-wrapper">
          <form className="contact-form">
            <div className="form-header">
              <h3>Send Us a Message</h3>
              <p className="form-caption">
                Fill out the form and we'll respond within 24 hours
              </p>
            </div>
            
            <div className="form-group">
              <input type="text" id="name" required />
              <label htmlFor="name">Your Name</label>
            </div>
            
            <div className="form-group">
              <input type="email" id="email" required />
              <label htmlFor="email">Email Address</label>
            </div>
            
            <div className="form-group">
              <input type="tel" id="phone" />
              <label htmlFor="phone">Phone Number</label>
            </div>
            
            <div className="form-group">
              <div className="input-with-icon">
            
                <input type="text" id="address" required />
                <label htmlFor="address">Your Address</label>
              </div>
            </div>
            
            <div className="form-group">
              <textarea id="message" rows={4} required></textarea>
              <label htmlFor="message">Your Message</label>
            </div>
            
            <button type="submit" className="submit-btn">
              <FaPaperPlane className="btn-icon" />
              Send Message
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;