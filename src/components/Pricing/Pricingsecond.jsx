import React from "react";
import "./Pricingsecond.css";
import { FaArrowRight, FaBath, FaCheck, FaRunning, FaUtensils } from "react-icons/fa";

const tileAndGrout = [
  {
    id: "bathroom",
    img: `${process.env.PUBLIC_URL}/bathroom.jpg`,
    title: "BATHROOM TILE CLEANING",
    price: "$249",
    bullets: [
      "Up to 130 square feet", 
      "Deep grout cleaning & sanitization",
      "Mold & mildew treatment",
      "Eco-friendly solutions"
    ],
    icon: <FaBath className="Pricing-page-second-service-icon" />,
    popular: true
  },
  {
    id: "kitchen",
    img: `${process.env.PUBLIC_URL}/kitchen.jpg`,
    title: "KITCHEN TILE CLEANING",
    price: "$249",
    bullets: [
      "Up to 130 square feet",
      "Grease & grime removal",
      "Food-safe disinfectants",
      "Sealant application available"
    ],
    icon: <FaUtensils className="Pricing-page-second-service-icon" />
  }
];

const areaRug = [
  {
    id: "rug",
    img: `${process.env.PUBLIC_URL}/rug.jpg`,
    title: "AREA RUG CLEANING",
    price: "$1.50/sqft",
    bullets: [
      "Non-delicate rugs only",
      "Pet-friendly enzymatic treatment",
      "Stain protection included",
      "Dries in 4-6 hours"
    ],
    icon: <FaRunning className="Pricing-page-second-service-icon" />,
    note: "Minimum $75 charge"
  },
  {
    id: "rug2",
    img: `${process.env.PUBLIC_URL}/rug2.jpg`,
    title: "AREA RUGS DELICATE",
    price: "$2/sqft",
    bullets: [
      "Non-delicate rugs only",
      "Pet-friendly enzymatic treatment",
      "Stain protection included",
      "Dries in 4-6 hours"
    ],
    icon: <FaRunning className="Pricing-page-second-service-icon" />,
    note: "Minimum $75 charge"
  }
];

function Card({ img, title, price, bullets, icon, popular, note }) {
  const bookingUrl = "https://book.housecallpro.com/book/GreenWorks-Carpet-Cleaning/d68f1199665f4437a75d2123c4ec5398?v2=true&merchant_id=3e43968f-48c3-4024-983a-da9b85be73d9&hl=en-US&gei=KjSDZ7aXGfT10PEP0IWhyQo&rwg_token=AJKvS9XVlwjzoWFVeFHQOYYtHIP68qAmBQs8BNq_MAIBoLyPsx6WyqieyIp5exbM6PsJRDmt1khkQrxTUu7G0LZAb-1SbUSicQ%3D%3D";

  return (
    <div className={`Pricing-page-second-service-card ${popular ? "Pricing-page-second-popular" : ""}`}>
      <div className="Pricing-page-second-card-image-container">
        <img src={img} alt={title} className="Pricing-page-second-card-image" loading="lazy" />
        <div className="Pricing-page-second-card-overlay"></div>
        <div className="Pricing-page-second-card-icon">{icon}</div>
      </div>
      
      <div className="Pricing-page-second-card-content">
        <div className="Pricing-page-second-card-header">
          <h3 className="Pricing-page-second-card-title">{title}</h3>
          <div className="Pricing-page-second-price-container">
            <span className="Pricing-page-second-card-price">{price}</span>
            {note && <span className="Pricing-page-second-price-note">{note}</span>}
          </div>
        </div>
        
        <div className="Pricing-page-second-card-features">
          <ul className="Pricing-page-second-features-list">
            {bullets.map((bullet, index) => (
              <li key={index} className="Pricing-page-second-feature-item">
                <div className="Pricing-page-second-check-container">
                  <FaCheck className="Pricing-page-second-check-icon" />
                </div>
                <span className="Pricing-page-second-feature-text">{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <a 
          href={bookingUrl} 
          target="_blank" 
          rel="noopener noreferrer"
          className="Pricing-page-second-card-button"
        >
          <span>Book Now</span>
          <FaArrowRight className="Pricing-page-second-button-icon" />
        </a>
      </div>
    </div>
  );
}

export default function Pricingsecond() {
  return (
    <section className="Pricing-page-second">
      <div className="Pricing-page-second-container">
        {/* Tile & Grout Section */}
        <div className="Pricing-page-second-service-section Pricing-page-second-tile-section">
          <div className="Pricing-page-second-section-header">
            <div className="Pricing-page-second-section-title-container">
              <span className="Pricing-page-second-section-pretitle">Premium Service</span>
              <h2 className="Pricing-page-second-section-title">
                TILE & GROUT CLEANING
              </h2>
              <div className="Pricing-page-second-title-underline"></div>
            </div>
            <p className="Pricing-page-second-section-description">
              Professional deep cleaning that restores your tile's original luster and extends its lifespan
            </p>
          </div>
          
          <div className="Pricing-page-second-services-grid">
            {tileAndGrout.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
        
        {/* Area Rug Section */}
        <div className="Pricing-page-second-service-section Pricing-page-second-rug-section">
          <div className="Pricing-page-second-section-header">
            <div className="Pricing-page-second-section-title-container">
              <span className="Pricing-page-second-section-pretitle">Specialized Care</span>
              <h2 className="Pricing-page-second-section-title">
                AREA RUG CLEANING
              </h2>
              <div className="Pricing-page-second-title-underline"></div>
            </div>
            <p className="Pricing-page-second-section-description">
              Gentle yet effective cleaning that preserves your valuable rugs without harsh chemicals
            </p>
          </div>
          
          <div className="Pricing-page-second-services-grid">
            {areaRug.map((item) => (
              <Card key={item.id} {...item} />
            ))}
          </div>
        </div>
        
        <div className="Pricing-page-second-service-footer">
          <div className="Pricing-page-second-guarantee-badge">
            <div className="Pricing-page-second-guarantee-icon">✓</div>
            <div className="Pricing-page-second-guarantee-text">100% Satisfaction Guarantee</div>
          </div>
          <p className="Pricing-page-second-disclaimer">
            * All services include complimentary stain protection and deodorizing
          </p>
        </div>
      </div>
    </section>
  );
}