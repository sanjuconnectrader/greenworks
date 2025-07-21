import React from "react";
import { FaArrowRight } from "react-icons/fa";
import "./Service.css";

const cards = [
  {
    id: "carpet",
    title: "CARPET CLEANING",
    image: "./service1.jpg",
    details: "Our five-star Seattle carpet cleaning process ensures that your carpet is cleaned thoroughly with no details missed. The carpet cleaning solutions we use are family and pet safe and will leave your carpet soft so that it stays cleaner for longer.",
    button: "View Services",
  },
  {
    id: "upholstery",
    title: "UPHOLSTERY CLEANING",
    image: "./service1.1.jpg",
    details: "Upholstery and furniture are often the most neglected furnishing in your home or office. Carpet cleaning is very common but having the furniture maintained is a must as well.",
    button: "View Services",
  },
  {
    id: "tile",
    title: "TILE & GROUT CLEANING",
    image: "./service3.jpg",
    details: "Cleaning technology has come a long way and we now have phenomenally safe tile and grout cleaning products and tools for many different types of tile and grout flooring.",
    button: "View Services",
  },
  {
    id: "wood",
    title: "HARDWOOD FLOOR CLEANING",
    image: "./service4.jpg",
    details: "Hardwood flooring has made a comeback as a top choice for flooring in many homes. The natural colors and staining options can set off any decor.",
    button: "View Services",
  },
];

const scrollToSection = (id) => {
  const element = document.getElementById(id);
  if (element) {
    // Calculate the position to scroll to (accounting for any fixed headers)
    const offset = 100; // Adjust this value based on your header height
    const elementPosition = element.getBoundingClientRect().top + window.pageYOffset;
    const offsetPosition = elementPosition - offset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth"
    });

    // Focus the section for accessibility
    setTimeout(() => {
      element.setAttribute("tabindex", "-1");
      element.focus();
    }, 1000);
  }
};

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
                    <button 
                      onClick={() => scrollToSection(card.id)}
                      className="service-card-btn"
                      aria-label={`View ${card.title} services`}
                    >
                      {card.button}
                      <FaArrowRight className="service-card-btn-icon" />
                    </button>
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