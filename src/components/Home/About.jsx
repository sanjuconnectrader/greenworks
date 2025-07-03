import React, { useEffect, useRef } from "react";
import "./About.css";

const About = () => {
  const imageRef = useRef(null);
  const contentRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("in-view");
          }
        });
      },
      { threshold: 0.1 }
    );

    if (imageRef.current) observer.observe(imageRef.current);
    if (contentRef.current) observer.observe(contentRef.current);

    return () => {
      if (imageRef.current) observer.unobserve(imageRef.current);
      if (contentRef.current) observer.unobserve(contentRef.current);
    };
  }, []);

  return (
    <section className="about-section" id="about">
      <div className="about-container">
        <div className="about-inner">
          {/* Image Section */}
          <div className="about-image-container" ref={imageRef}>
            <div className="about-image-wrapper">
              <img 
                src="./team.jpeg" 
                alt="Professional carpet cleaning service" 
                className="about-image"
                loading="lazy"
              />
              <div className="image-overlay"></div>
              <div className="image-shapes">
                <div className="shape-circle"></div>
                <div className="shape-triangle"></div>
                <div className="shape-square"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="about-content" ref={contentRef}>
            <div className="content-wrapper">
              <div className="section-header">
               
                <h2 className="about-title">
                  <span className="title-text">About Us</span>
                  <span className="title-underline"></span>
                </h2>
              </div>
              
              <div className="about-description">
                <p className="description-paragraph">
                  As a family-owned and locally operated carpet cleaning business in Seattle,
                  we are committed to delivering the highest quality service to every customer.
                  We believe in using only safe, non-toxic products that are gentle for both your loved ones and your pets,
                  ensuring a healthy home environment with every visit.
                </p>
                <p className="description-paragraph">
                  Our expertise goes beyond just carpets—we specialize in upholstery, tile and grout, and even provide thorough cleaning for RVs and campers.
                  Booking your next Seattle carpet cleaning is hassle-free: simply give us a call or fill out our quick online form for an instant quote and convenient scheduling.
                </p>
              </div>

              <div className="stats-container">
                <div className="stat-item">
                  <div className="stat-value">12+</div>
                  <div className="stat-label">Years Experience</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">5,000+</div>
                  <div className="stat-label">Happy Clients</div>
                </div>
                <div className="stat-item">
                  <div className="stat-value">98%</div>
                  <div className="stat-label">Satisfaction Rate</div>
                </div>
              </div>

              <button className="cta-button">
                <span className="button-text">Explore Services</span>
                <span className="button-icon">
                  <svg width="24" height="24" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;