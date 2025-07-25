import React, { useRef, useState } from "react";
import { FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaPaperPlane, FaHome } from "react-icons/fa";
import { motion } from "framer-motion";
import axios from "axios";
import "./Contact.css";

const Contact = () => {
  const backgroundUrl = `${process.env.PUBLIC_URL}/header-image.jpg`;
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);
  const formRef = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setError(null);

    const formData = {
      name: e.target.name.value,
      email: e.target.email.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
      message: e.target.message.value
    };

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_API_BASE_URL}/api/contact`,
        formData
      );

      if (response.status === 201) {
        setIsSubmitted(true);
        formRef.current.reset();
        setTimeout(() => setIsSubmitted(false), 3000);
      }
    } catch (err) {
      setError(
        err.response?.data?.message || 
        "Failed to send message. Please try again later."
      );
    } finally {
      setIsLoading(false);
    }
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
                  <div className="contactpage-value">info@greenworkscarpetcleaning.com</div>
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
                  <div className="contactpage-value">+1 (206) 899-6862</div>
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
                  <div className="contactpage-value">16824 44th Ave W Unit-170
Lynnwood, WA 98037</div>
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
                name="name"
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
                name="email"
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
                name="phone"
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
                  name="address"
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
                name="message"
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
              disabled={isLoading}
            >
              {isLoading ? (
                <span>Sending...</span>
              ) : (
                <>
                  <FaPaperPlane className="contactpage-btn-icon" />
                  <span>Send Message</span>
                  <div className="contactpage-btn-hover-effect" />
                </>
              )}
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

            {error && (
              <motion.div 
                className="contactpage-form-error-message"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
              >
                {error}
              </motion.div>
            )}
          </form>
        </motion.div>
      </div>
    </div>
  );
};

export default Contact;