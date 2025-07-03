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
        <header className="location-header">
          <h2 className="location-title">OUR SERVICE AREAS</h2>
          <p className="location-subtitle">
            We're proud to be the leading carpet cleaning company in the Pacific Northwest
          </p>
        </header>

        <div className="location-content">
          {/* Map Visualization */}
          <div className="location-map">
            <img 
              src="./dottedmap.jpg" 
              alt="Service coverage map" 
              className="map-image"
              loading="lazy"
            />
            <div className="map-highlight" aria-hidden="true">
              <div className="pulse-effect"></div>
              <div className="highlight-circle"></div>
            </div>
          </div>

          {/* Cities List */}
          <div className="location-list-container">
            <ul className="location-list">
              {CITIES.map((city) => (
                <li key={city} className="location-item">
                  <FaMapMarkerAlt className="location-icon" />
                  <span>{city}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}