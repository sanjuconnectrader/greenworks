import React from "react";
import { FaCheckCircle, FaInfoCircle } from "react-icons/fa";
import "./Pricing.css";

const data = [
  {
    id: 1,
    img: `${process.env.PUBLIC_URL}/room1.jpg`,
    title: "1 - 3 ROOMS",
    price: "$299",
    bullets: [
      "12x12 ft or ~150 sqft per room",
      "Add $50 for additional room/area",
    ],
    popular: true,
  },
  {
    id: 2,
    img: `${process.env.PUBLIC_URL}/stain.jpg`,
    title: "STAIN TREATMENT",
    price: "$79",
    bullets: ["2x2 ft area coverage", "Professional-grade solutions"],
  },
  {
    id: 3,
    img: `${process.env.PUBLIC_URL}/deodorize.jpg`,
    title: "DEODORIZING TREATMENT",
    price: "FREE",
    bullets: ["All areas included", "Eliminates tough odors"],
    note: "With any cleaning service",
  },
];

export default function Pricing() {
  return (
    <section className="pricing-section">
      <div className="pricing-container">
        <div className="pricing-header">
          <h2 className="pricing-title">CARPET RESTORATION CLEANING</h2>
          <div className="pricing-subtitle-container">
            <p className="pricing-subtitle">
              Professional cleaning services tailored to your needs
            </p>
            <div className="pricing-underline"></div>
          </div>
        </div>

        <div className="pricing-grid">
          {data.map(({ id, img, title, price, bullets, popular, note }) => (
            <div 
              className={`pricing-card ${popular ? "popular" : ""}`} 
              key={id}
            >
              {popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="card-image-container">
                <img 
                  src={img} 
                  alt={title} 
                  className="card-image" 
                  loading="lazy" 
                />
              </div>

              <div className="card-content">
                <div className="card-header">
                  <h3 className="card-title">{title}</h3>
                  <div className="price-container">
                    <span className="card-price">{price}</span>
                    {note && <span className="price-note">{note}</span>}
                  </div>
                </div>

                <div className="card-features">
                  <h4 className="features-title">
                    <FaInfoCircle className="icon" />
                    Measurements & Details
                  </h4>
                  <ul className="features-list">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="feature-item">
                        <FaCheckCircle className="icon check" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <button className="card-button">
                  Book This Service
                </button>
              </div>
            </div>
          ))}
        </div>

        <div className="pricing-footer">
          <p className="disclaimer">
            * All prices are estimates. Final pricing may vary based on specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}