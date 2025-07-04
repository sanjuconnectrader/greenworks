import React from "react";
import "./PricingThird.css";
import { FaChair, FaShower, FaCheckCircle, FaLeaf } from "react-icons/fa";

const upholstery = [
  {
    id: "chairs-couch",
    img: `${process.env.PUBLIC_URL}/chair.jpg`,
    title: "UPHOLSTERY CLEANING",
    price: "$229",
    bullets: [
      "Microfiber or polyester fabrics",
      "Stain protection included",
      "Pet-friendly treatment available",
      "Eco-friendly cleaning solutions"
    ],
    icon: <FaChair className="PricingThird-icon" />,
    popular: true
  }
];

const hardSurface = [
  {
    id: "hard-surface",
    img: `${process.env.PUBLIC_URL}/floor.jpg`,
    title: "HARD SURFACE CLEANING",
    price: "$249",
    bullets: [
      "Wood, concrete or LVP floors",
      "Up to 140 sqft included",
      "Sealant application available",
      "Non-toxic cleaning agents"
    ],
    icon: <FaShower className="PricingThird-icon" />,
    note: "$0.60/sqft for additional area"
  }
];

function Card({ img, title, price, bullets, icon, popular, note }) {
  return (
    <article className={`PricingThird-card ${popular ? "PricingThird-popular" : ""}`}>
   
      
      <div className="PricingThird-cardImageContainer">
        <img src={img} alt={title} className="PricingThird-cardImage" loading="lazy" />
        <div className="PricingThird-imageOverlay"></div>
        <div className="PricingThird-cardIcon">{icon}</div>
      </div>
      
      <div className="PricingThird-cardContent">
        <header className="PricingThird-cardHeader">
          <h3 className="PricingThird-cardTitle">{title}</h3>
          <div className="PricingThird-priceContainer">
            <span className="PricingThird-cardPrice">{price}</span>
            {note && <span className="PricingThird-priceNote">{note}</span>}
          </div>
        </header>
        
        <div className="PricingThird-cardFeatures">
          <ul className="PricingThird-featuresList">
            {bullets.map((bullet, index) => (
              <li key={index} className="PricingThird-featureItem">
                <FaCheckCircle className="PricingThird-checkIcon" />
                <span>{bullet}</span>
              </li>
            ))}
          </ul>
        </div>
        
        <button className="PricingThird-cardButton">
          <span>Book Service</span>
          <div className="PricingThird-buttonArrow"></div>
        </button>
      </div>
    </article>
  );
}

export default function PricingThird() {
  return (
    <section className="PricingThird-section">
      <div className="PricingThird-container">
        {/* Upholstery Section */}
        <div className="PricingThird-sectionHeader">
          <div className="PricingThird-sectionTitleContainer">
            <span className="PricingThird-sectionPretitle">Fabric Care</span>
            <h2 className="PricingThird-sectionTitle">UPHOLSTERY CLEANING</h2>
            <div className="PricingThird-titleUnderline"></div>
          </div>
          <p className="PricingThird-sectionDescription">
            Professional cleaning that revitalizes your furniture while being gentle on fabrics
          </p>
        </div>
        
        <div className="PricingThird-cardsGrid">
          {upholstery.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>

        {/* Spacer between sections */}
        <div className="PricingThird-sectionSpacer"></div>

        {/* Hard Surface Section */}
        <div className="PricingThird-sectionHeader">
          <div className="PricingThird-sectionTitleContainer">
            <span className="PricingThird-sectionPretitle">Floor Care</span>
            <h2 className="PricingThird-sectionTitle">HARD SURFACE CLEANING</h2>
            <div className="PricingThird-titleUnderline"></div>
          </div>
          <p className="PricingThird-sectionDescription">
            Deep cleaning that restores shine and protects your floors from daily wear
          </p>
        </div>
        
        <div className="PricingThird-cardsGrid">
          {hardSurface.map((item) => (
            <Card key={item.id} {...item} />
          ))}
        </div>
        
        <div className="PricingThird-sectionFooter">
          <div className="PricingThird-guaranteeBadge">
            <FaLeaf className="PricingThird-guaranteeIcon" />
            <span>Eco-Friendly Guarantee</span>
          </div>
          <p className="PricingThird-disclaimer">
            * All prices include complimentary stain protection and deodorizing
          </p>
        </div>
      </div>
    </section>
  );
}