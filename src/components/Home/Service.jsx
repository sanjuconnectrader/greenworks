import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Service.css";

const cards = [
  {
    title: "Deep Carpet Cleaning",
    image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    details: "Our professional deep cleaning removes embedded dirt, allergens, and stains to restore your carpets to like-new condition. Using eco-friendly solutions and advanced equipment.",
    button: "Learn More",
    buttonLink: "#",
  },
  {
    title: "Stain Removal",
    image: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    details: "Specialized treatment for tough stains including wine, pet accidents, coffee, and more. We use industry-leading techniques to eliminate stains without damaging fibers.",
    button: "View Services",
    buttonLink: "#",
  },
  {
    title: "Pet Odor Treatment",
    image: "https://images.unsplash.com/photo-1586671267731-da2cf3ceeb80?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    details: "Eliminate pet odors at the source with our enzymatic treatments. Safe for pets and children, our process neutralizes odors rather than just masking them.",
    button: "Pet Solutions",
    buttonLink: "#",
  },
  {
    title: "Commercial Cleaning",
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=800&q=80",
    details: "Professional cleaning for offices, hotels, and commercial spaces. We work around your schedule with fast-drying methods to minimize business disruption.",
    button: "Business Services",
    buttonLink: "#",
  },
];

const Service = () => {
  return (
    <section className="service-section">
      <div className="service-container">
        <h2 className="service-heading">OUR CARPET CLEANING SERVICES</h2>
        <p className="service-subheading">Professional cleaning solutions for homes and businesses</p>
        
        <div className="service-grid">
          {cards.map((card, index) => (
            <div className="service-card" key={index}>
              <div className="service-card-inner">
                <div 
                  className="service-card-front"
                  style={{
                    backgroundImage: `linear-gradient(
                      to bottom,
                      rgba(0, 0, 0, 0) 0%,
                      rgba(0, 0, 0, 0.3) 50%,
                      rgba(0, 0, 0, 0.7) 100%
                    ), url(${card.image})`
                  }}
                >
                  <div className="service-card-content">
                    <h3 className="service-card-title">{card.title}</h3>
                  </div>
                </div>
                
                <div className="service-card-back">
                  <div className="service-card-back-content">
                    <h3>{card.title}</h3>
                    <p>{card.details}</p>
                    <a href={card.buttonLink} className="service-card-btn">
                      {card.button}
                      <FaArrowRight className="service-card-btn-icon" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Service;