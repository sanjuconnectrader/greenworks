import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import { motion } from "framer-motion";
import "./Location.css";

const CITIES = [
  "Seattle", "Bellevue", "Kirkland", "Issaquah", "Lynnwood", "Factoria", "Bothell",
  "Brier", "Edmonds", "Mukilteo", "Renton", "Tacoma", "Medina", "Everett",
  "Auburn", "Federal Way", "Kent", "Kenmore", "Tukwila", "Mill Creek",
  "Seatac", "Burien", "Des Moines", "Normandy Park", "Mercer Island", "Snohomish"
];

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

const staggerContainer = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.05,
    },
  },
};

const itemAnimation = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

export default function Location() {
  return (
    <section className="location-section" id="locations">
      <div className="location-container">
        {/* Decorative elements */}
        <div className="location-decoration location-decoration-1"></div>
        <div className="location-decoration location-decoration-2"></div>
        
        <motion.header 
          className="location-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="location-title">
            <span className="title-text">OUR SERVICE AREAS</span>
          </h2>
          <p className="location-subtitle">
            Premium carpet cleaning services across the Pacific Northwest
          </p>
        </motion.header>

        <div className="location-content">
          {/* Map Visualization */}
          <motion.div 
            className="location-map"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="map-wrapper">
              <img 
                src="./map.jpg" 
                alt="Service coverage map" 
                className="map-image"
                loading="lazy"
              />
              <div className="map-overlay"></div>
              <div className="map-highlight">
                <div className="highlight-circle"></div>
                <div className="highlight-glow"></div>
                <div className="pulse-effect"></div>
              </div>
              <div className="map-label">Seattle Metro Area</div>
            </div>
          </motion.div>

          {/* Cities List */}
          <motion.div 
            className="location-list-container"
            initial="hidden"
            whileInView="visible"
            variants={staggerContainer}
            viewport={{ once: true, margin: "-100px" }}
          >
            <div className="location-list-header">
              <h3 className="list-title">Cities We Serve</h3>
              <div className="list-divider"></div>
            </div>
            <motion.ul className="location-list">
              {CITIES.map((city, index) => (
                <motion.li 
                  key={city} 
                  className="location-item"
                  variants={itemAnimation}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(15, 113, 180, 0.15)"
                  }}
                >
                  <div className="item-content">
                    <FaMapMarkerAlt className="location-icon" />
                    <span className="city-name">{city}</span>
                  </div>
                  <div className="item-hover-effect"></div>
                </motion.li>
              ))}
            </motion.ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
}