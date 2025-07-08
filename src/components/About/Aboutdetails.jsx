import React from 'react';
import './Aboutdetails.css';
import { FaPaw, FaCouch, FaShower, FaCaravan, FaLeaf, FaShieldAlt, FaStar, FaHome } from 'react-icons/fa';

const services = [
  {
    icon: <FaPaw className="aboutdetails-icon" />,
    title: 'Pet-Friendly Cleaning Solutions',
    description: 'Our specially formulated cleaning products are completely safe for all pets. We use non-toxic, biodegradable solutions that eliminate odors and stains without harmful chemicals.',
    benefits: [
   
    ]
  },
  {
    icon: <FaCouch className="aboutdetails-icon" />,
    title: 'Premium Upholstery Care',
    description: 'Professional deep cleaning for all fabric furniture including sofas, chairs, and mattresses. Our advanced cleaning techniques restore your upholstery to like-new condition while protecting the fabric integrity.',
    benefits: [
   
    ]
  },
  {
    icon: <FaShower className="aboutdetails-icon" />,
    title: 'Tile & Grout Restoration',
    description: 'Revitalize your tile surfaces with our intensive grout cleaning and sealing service. We remove years of built-up grime and apply protective sealants to keep your tiles looking cleaner longer.',
    benefits: [
  
    ]
  },
  {
    icon: <FaCaravan className="aboutdetails-icon" />,
    title: 'RV & Camper Deep Cleaning',
    description: 'Specialized mobile cleaning service for RVs, campers, and travel trailers. We tackle the unique challenges of small spaces with our compact equipment and attention to detail.',
    benefits: [

    ]
  },
];

const Aboutdetails = () => {
  return (
    <section className="aboutdetails-section">
      <div className="aboutdetails-header">
        <h2 className="aboutdetails-title">Our Premium Cleaning Services</h2>
        <p className="aboutdetails-subtitle">Experience the difference with our specialized cleaning solutions tailored to your unique needs</p>
      </div>
      
      <div className="aboutdetails-grid">
        {services.map((service, index) => (
          <div className="aboutdetails-card" key={index}>
            <div className="aboutdetails-icon-container">
              {service.icon}
            </div>
            <h3 className="aboutdetails-card-title">{service.title}</h3>
            <p className="aboutdetails-card-description">{service.description}</p>
            
            <ul className="aboutdetails-benefits">
              {service.benefits.map((benefit, i) => (
                <li key={i} className="aboutdetails-benefit-item">
                  <FaStar className="aboutdetails-benefit-icon" />
                  <span>{benefit}</span>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Aboutdetails;