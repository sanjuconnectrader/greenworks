import React from "react";
import { FaMapMarkerAlt } from "react-icons/fa";
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
  { name: "Kenmore", lat: 47.7573, lng: -122.2440 },
  { name: "Tukwila", lat: 47.4626, lng: -122.2550 },
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
  borderRadius: '12px',
};

const center = {
  lat: 47.5,
  lng: -122.2
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
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY // Add your API key in .env
  });

  if (loadError) return <div>Error loading maps</div>;
  if (!isLoaded) return <div>Loading maps</div>;

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
                  ]
                }}
              >
                {CITIES.map((city) => (
                  <Marker
                    key={city.name}
                    position={{ lat: city.lat, lng: city.lng }}
                    icon={{
                      url: 'https://maps.google.com/mapfiles/ms/icons/red-dot.png'
                    }}
                  />
                ))}
              </GoogleMap>
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
                    <FaMapMarkerAlt className="location-icon" />
                    <span className="city-name">{city.name}</span>
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