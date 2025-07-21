import React from "react";
import { FaMapMarkerAlt, FaChevronRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { GoogleMap, Marker, useLoadScript } from "@react-google-maps/api";
import "./Location.css";

const CITIES = [
  { name: "Seattle", lat: 47.6062, lng: -122.3321 },
  { name: "Bellevue", lat: 47.6101, lng: -122.2015 },
  { name: "Kirkland", lat: 47.6815, lng: -122.2087 },
  { name: "Issaquah", lat: 47.5301, lng: -122.0326 },
  { name: "Lynnwood", lat: 47.8279, lng: -122.3053 },
  { name: "Factoria", lat: 47.5706, lng: -122.1536 },
  { name: "Bothell", lat: 47.7601, lng: -122.2054 },
  { name: "Brier", lat: 47.7845, lng: -122.2743 },
  { name: "Edmonds", lat: 47.8107, lng: -122.3776 },
  { name: "Mukilteo", lat: 47.9445, lng: -122.3046 },
  { name: "Renton", lat: 47.4829, lng: -122.2171 },
  { name: "Tacoma", lat: 47.2529, lng: -122.4443 },
  { name: "Medina", lat: 47.6209, lng: -122.2276 },
  { name: "Everett", lat: 47.9789, lng: -122.2021 },
  { name: "Auburn", lat: 47.3073, lng: -122.2285 },
  { name: "Federal Way", lat: 47.3223, lng: -122.3126 },
  { name: "Kent", lat: 47.3809, lng: -122.2348 },
  { name: "Kenmore", lat: 47.7573, lng: -122.244 },
  { name: "Tukwila", lat: 47.4626, lng: -122.255 },
  { name: "Mill Creek", lat: 47.8579, lng: -122.2043 },
  { name: "Seatac", lat: 47.4447, lng: -122.3137 },
  { name: "Burien", lat: 47.4698, lng: -122.3487 },
  { name: "Des Moines", lat: 47.4018, lng: -122.3243 },
  { name: "Normandy Park", lat: 47.4362, lng: -122.3407 },
  { name: "Mercer Island", lat: 47.5707, lng: -122.2221 },
  { name: "Snohomish", lat: 47.9126, lng: -122.0982 }
];

const mapContainerStyle = {
  width: '100%',
  height: '100%',
  borderRadius: '16px',
};

const center = {
  lat: 47.5,
  lng: -122.2
};

const bounds = {
  north: 48.0,
  south: 47.2,
  west: -122.5,
  east: -121.8
};

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
  const { isLoaded, loadError } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

  return (
    <section className="location-section" id="locations">
      <div className="location-container">
        {/* Decorative elements */}
        <div className="location-decoration location-decoration-1"></div>
        <div className="location-decoration location-decoration-2"></div>
        <div className="location-decoration location-decoration-3"></div>
        
        <motion.header 
          className="location-header"
          initial="hidden"
          whileInView="visible"
          variants={fadeIn}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="location-title">
            <span className="title-text">Service Areas</span>
            <span className="title-accent">Across the Pacific Northwest</span>
          </h2>
          <p className="location-subtitle">
            Premium carpet cleaning services serving the entire Seattle metropolitan area and surrounding communities
          </p>
        </motion.header>

        <div className="location-content">
          {/* Google Map Visualization */}
          <motion.div 
            className="location-map"
            initial="hidden"
            whileInView="visible"
            variants={fadeIn}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <div className="map-wrapper">
              <GoogleMap
                mapContainerStyle={mapContainerStyle}
                zoom={10}
                center={center}
                options={{
                  styles: [
                    {
                      featureType: "poi",
                      stylers: [{ visibility: "off" }]
                    },
                    {
                      featureType: "transit",
                      elementType: "labels.icon",
                      stylers: [{ visibility: "off" }]
                    }
                  ],
                  restriction: {
                    latLngBounds: bounds,
                    strictBounds: false
                  },
                  disableDefaultUI: true,
                  zoomControl: true,
                  gestureHandling: "greedy"
                }}
              >
                {CITIES.map((city) => (
                  <Marker
                    key={city.name}
                    position={{ lat: city.lat, lng: city.lng }}
                    icon={{
                      url: 'data:image/svg+xml;charset=UTF-8;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCI+PHBhdGggZD0iTTEyLDJBMTAsMTAgMCAwLDAgMiwxMkExMCwxMCAwIDAsMCAxMiwyMkExMCwxMCAwIDAsMCAyMiwxMkExMCwxMCAwIDAsMCAxMiwyTTEyLDQuMjlDMTUuODksNC4yOSAxOS4wMSw3LjQxIDE5LjAxLDExLjNDMTkuMDEsMTQuMTkgMTYuNjQsMTcuNDMgMTIsMTkuNTVDNy4zNiwxNy40MyA0Ljk5LDE0LjE5IDQuOTksMTEuM0M0Ljk5LDcuNDEgOC4xMSw0LjI5IDEyLDQuMjlNMTIsNkE1LjMxLDUuMzEgMCAwLDAgNi42OSwxMS4zMUE1LjMxLDUuMzEgMCAwLDAgMTIsMTYuNjJBNS4zMSw1LjMxIDAgMCwwIDE3LjMxLDExLjMxQTUuMzEsNS4zMSAwIDAsMCAxMiw2WiIgZmlsbD0iI0Y5NDAyQyIvPjwvc3ZnPg==',
                      scaledSize: new window.google.maps.Size(32, 32),
                      origin: new window.google.maps.Point(0, 0),
                      anchor: new window.google.maps.Point(16, 32)
                    }}
                    title={city.name}
                  />
                ))}
              </GoogleMap>
              <div className="map-label">
                <span>Seattle Metro Area</span>
                <div className="map-label-glow"></div>
              </div>
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
              <p className="list-subtitle">Over 25 communities across King and Snohomish counties</p>
            </div>
            <motion.ul className="location-list">
              {CITIES.map((city) => (
                <motion.li 
                  key={city.name} 
                  className="location-item"
                  variants={itemAnimation}
                  whileHover={{ 
                    y: -5,
                    boxShadow: "0 15px 30px rgba(15, 113, 180, 0.15)"
                  }}
                >
                  <div className="item-content">
                    <div className="marker-wrapper">
                      <FaMapMarkerAlt className="location-icon" />
                      <div className="marker-glow"></div>
                    </div>
                    <span className="city-name">{city.name}</span>
                    <FaChevronRight className="location-chevron" />
                  </div>
                  <div className="item-hover-effect"></div>
                </motion.li>
              ))}
            </motion.ul>
            
            <motion.div 
              className="location-cta"
              initial="hidden"
              whileInView="visible"
              variants={fadeIn}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
            >
              <p className="cta-text">Don't see your location? We may still serve your area!</p>
              <a href="#contact" className="cta-button">
                <span>Contact Us</span>
                <div className="button-hover"></div>
              </a>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}