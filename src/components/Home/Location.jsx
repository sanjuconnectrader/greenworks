import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
import "./Location.css";

const CITIES = [
  "Seattle", "Bellevue", "Kirkland", "Issaquah", "Lynnwood", "Factoria", "Bothell",
  "Brier", "Edmonds", "Mukilteo", "Renton", "Tacoma", "Medina", "Everett",
  "Auburn", "Federal Way", "Kent", "Kenmore", "Tukwila", "Mill Creek",
  "Seatac", "Burien", "Des Moines", "Normandy Park", "Mercer Island", "Snohomish"
];

export default function Location() {
  return (
    <section className="location-section" id="locations">
      <div className="location-container">
        {/* Decorative elements */}
        <div className="location-decoration location-decoration-1"></div>
        <div className="location-decoration location-decoration-2"></div>
        
        <header className="location-header">
          <h2 className="location-title">
            <span className="title-text">OUR SERVICE AREAS</span>
          </h2>
          <p className="location-subtitle">
            We're proud to be the leading carpet cleaning company in the Pacific Northwest
          </p>
        </header>

        <div className="location-content">
          {/* Map Visualization */}
          <div className="location-map">
            <div className="map-wrapper">
              <img 
                src="dottedmap.jpg" 
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
          </div>

          {/* Cities List */}
          <div className="location-list-container">
            <div className="location-list-header">
              <h3 className="list-title">Cities We Serve</h3>
              <div className="list-divider"></div>
            </div>
            <ul className="location-list">
              {CITIES.map((city) => (
                <li key={city} className="location-item">
                  <div className="item-content">
                    <FaMapMarkerAlt className="location-icon" />
                    <span className="city-name">{city}</span>
                  </div>
                  <div className="item-hover-effect"></div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}