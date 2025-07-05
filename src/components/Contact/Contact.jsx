import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Contact.css";

const Contact = () => {
  const backgroundUrl = `${process.env.PUBLIC_URL}/header-image.jpg`;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const formRef = useRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitted(true);
    formRef.current.reset();
    
    // Reset submission status after 3 seconds
    setTimeout(() => {
      setIsSubmitted(false);
    }, 3000);
  };

  return (
    <div
      className="contactpage-section"
      style={{
        backgroundImage: `linear-gradient(135deg, rgba(9, 41, 72, 0.9) 0%, rgba(2, 174, 239, 0.8) 100%), url(${backgroundUrl})`
      }}
    >
      <div className="contactpage-container">
        {/* LEFT SIDE - CONTACT INFO */}
        <motion.div 
          className="contactpage-info"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <div className="contactpage-content">
            <h2 className="contactpage-title">
              <span className="contactpage-title-gradient">Get In Touch</span>
              <span className="contactpage-title-underline" />
            </h2>
            <p className="contactpage-subtitle">
              Our team is ready to assist you with any questions about our premium cleaning services.
            </p>
            
            <div className="contactpage-details-list">
              <motion.div 
                className="contactpage-detail"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contactpage-icon-wrapper">
                  <FaEnvelope className="contactpage-icon" />
                </div>
                <div className="contactpage-text">
                  <div className="contactpage-label">Email Us</div>
                  <div className="contactpage-value">contact@greenworks.com</div>
                  <a href="mailto:contact@greenworks.com" className="contactpage-link">
                    <span>Send a message</span>
                    <span className="contactpage-link-arrow">→</span>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="contactpage-detail"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contactpage-icon-wrapper">
                  <FaPhoneAlt className="contactpage-icon" />
                </div>
                <div className="contactpage-text">
                  <div className="contactpage-label">Call Us</div>
                  <div className="contactpage-value">+1 (555) 356-8888</div>
                  <a href="tel:+15553568888" className="contactpage-link">
                    <span>Call now</span>
                    <span className="contactpage-link-arrow">→</span>
                  </a>
                </div>
              </motion.div>
              
              <motion.div 
                className="contactpage-detail"
                whileHover={{ y: -5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <div className="contactpage-icon-wrapper">
                  <FaMapMarkerAlt className="contactpage-icon" />
                </div>
                <div className="contactpage-text">
                  <div className="contactpage-label">Visit Us</div>
                  <div className="contactpage-value">556 Green Avenue, Seattle, WA 98101</div>
                  <a 
                    href="https://maps.google.com" 
                    target="_blank" 
                    rel="noopener noreferrer" 
                    className="contactpage-link"
                  >
                    <span>Get directions</span>
                    <span className="contactpage-link-arrow">→</span>
                  </a>
                </div>
              </motion.div>
            </div>
          </div>
        </motion.div>
        
        {/* RIGHT SIDE - CONTACT FORM */}
        <motion.div 
          className="contactpage-form-wrapper"
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <form 
            className="contactpage-form"
            onSubmit={handleSubmit}
            ref={formRef}
          >
            <div className="contactpage-form-decoration contactpage-form-decoration-1" />
            <div className="contactpage-form-decoration contactpage-form-decoration-2" />
            
            <div className="contactpage-form-header">
              <h3>Send Us a Message</h3>
              <p className="contactpage-form-caption">
                Fill out the form and we'll respond within 24 hours
              </p>
            </div>
            
            <div className="contactpage-form-group">
              <input 
                type="text" 
                id="name" 
                placeholder=" "
                required 
              />
              <label htmlFor="name">Your Name</label>
              <div className="contactpage-input-highlight" />
            </div>
            
            <div className="contactpage-form-group">
              <input 
                type="email" 
                id="email" 
                placeholder=" "
                required 
              />
              <label htmlFor="email">Email Address</label>
              <div className="contactpage-input-highlight" />
            </div>
            
            <div className="contactpage-form-group">
              <input 
                type="tel" 
                id="phone" 
                placeholder=" "
              />
              <label htmlFor="phone">Phone Number</label>
              <div className="contactpage-input-highlight" />
            </div>
            
            <div className="contactpage-form-group">
              <div className="contactpage-input-with-icon">
                <FaHome className="contactpage-input-icon" />
                <input 
                  type="text" 
                  id="address" 
                  placeholder=" "
                  required 
                />
                <label htmlFor="address">Your Address</label>
                <div className="contactpage-input-highlight" />
              </div>
            </div>
            
            <div className="contactpage-form-group">
              <textarea 
                id="message" 
                rows={4} 
                placeholder=" "
                required
              ></textarea>
              <label htmlFor="message">Your Message</label>
              <div className="contactpage-input-highlight" />
            </div>
            
            <motion.button 
              type="submit" 
              className="contactpage-submit-btn"
              whileHover={{ y: -3 }}
              whileTap={{ scale: 0.98 }}
            >
              <FaPaperPlane className="contactpage-btn-icon" />
              <span>Send Message</span>
              <div className="contactpage-btn-hover-effect" />
            </motion.button>

            {isSubmitted && (
              <motion.div 
                className="contactpage-form-success-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
              >
                Message sent successfully!
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;