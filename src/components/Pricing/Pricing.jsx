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
  const bookingUrl = "https://book.housecallpro.com/book/GreenWorks-Carpet-Cleaning/d68f1199665f4437a75d2123c4ec5398?v2=true&merchant_id=3e43968f-48c3-4024-983a-da9b85be73d9&hl=en-US&gei=KjSDZ7aXGfT10PEP0IWhyQo&rwg_token=AJKvS9XVlwjzoWFVeFHQOYYtHIP68qAmBQs8BNq_MAIBoLyPsx6WyqieyIp5exbM6PsJRDmt1khkQrxTUu7G0LZAb-1SbUSicQ%3D%3D";

  return (
    <section className="Pricingone-section">
      <div className="Pricingone-container">
        <div className="Pricingone-header">
          <h2 className="Pricingone-title">CARPET RESTORATION CLEANING</h2>
          <div className="Pricingone-subtitle-container">
            <p className="Pricingone-subtitle">
              Professional cleaning services tailored to your needs
            </p>
            <div className="Pricingone-underline"></div>
          </div>
        </div>

        <div className="Pricingone-grid">
          {data.map(({ id, img, title, price, bullets, popular, note }) => (
            <div 
              className={`Pricingone-card ${popular ? "popular" : ""}`} 
              key={id}
            >
              {popular && (
                <div className="popular-badge">Most Popular</div>
              )}
              
              <div className="Pricingone-card-image-container">
                <img 
                  src={img} 
                  alt={title} 
                  className="Pricingone-card-image" 
                  loading="lazy" 
                />
              </div>

              <div className="Pricingone-card-content">
                <div className="Pricingone-card-header">
                  <h3 className="Pricingone-card-title">{title}</h3>
                  <div className="Pricingone-price-container">
                    <span className="Pricingone-card-price">{price}</span>
                    {note && <span className="Pricingone-price-note">{note}</span>}
                  </div>
                </div>

                <div className="Pricingone-card-features">
                  <h4 className="Pricingone-features-title">
                    <FaInfoCircle className="Pricingone-icon" />
                    Measurements & Details
                  </h4>
                  <ul className="Pricingone-features-list">
                    {bullets.map((bullet, index) => (
                      <li key={index} className="Pricingone-feature-item">
                        <FaCheckCircle className="Pricingone-icon Pricingone-check" />
                        {bullet}
                      </li>
                    ))}
                  </ul>
                </div>

                <a 
                  href={bookingUrl} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="Pricingone-card-button"
                >
                  Book This Service
                </a>
              </div>
            </div>
          ))}
        </div>

        <div className="Pricingone-footer">
          <p className="Pricingone-disclaimer">
            * All prices are estimates. Final pricing may vary based on specific requirements.
          </p>
        </div>
      </div>
    </section>
  );
}