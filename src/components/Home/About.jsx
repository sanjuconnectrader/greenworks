import React, { useEffect, useRef } from "react";
import "./About.css";
import { Link } from "react-router-dom";

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
    <section className="About-home-section" id="about">
      <div className="About-home-container">
        <div className="About-home-inner">
          {/* Image Section */}
          <div className="About-home-image-container" ref={imageRef}>
            <div className="About-home-image-wrapper">
              <img
                src="./service1.jpg"
                alt="Professional carpet cleaning service"
                className="About-home-image"
                loading="lazy"
              />
              <div className="About-home-image-overlay"></div>
              <div className="About-home-image-shapes">
                <div className="About-home-shape-circle"></div>
                <div className="About-home-shape-triangle"></div>
                <div className="About-home-shape-square"></div>
              </div>
            </div>
          </div>

          {/* Content Section */}
          <div className="About-home-content" ref={contentRef}>
            <div className="About-home-content-wrapper">
              <div className="About-home-section-header">

                <h2 className="About-home-title">
                  <span className="About-home-title-text">About Us</span>
                  <span className="About-home-title-underline"></span>
                </h2>
              </div>

              <div className="About-home-description">
                <p className="About-home-description-paragraph">
                  As a family-owned and locally operated carpet cleaning business in Seattle,
                  we are committed to delivering the highest quality service to every customer.
                  We believe in using only safe, non-toxic products that are gentle for both your loved ones and your pets,
                  ensuring a healthy home environment with every visit.
                </p>
                <p className="About-home-description-paragraph">
                  Our expertise goes beyond just carpets—we specialize in upholstery, tile and grout, and even provide thorough cleaning for RVs and campers.
                  Booking your next Seattle carpet cleaning is hassle-free: simply give us a call or fill out our quick online form for an instant quote and convenient scheduling.
                </p>
              </div>

              <div className="About-home-stats-container">
                <div className="About-home-stat-item">
                  <div className="About-home-stat-value">12+</div>
                  <div className="About-home-stat-label">Years Experience</div>
                </div>
                <div className="About-home-stat-item">
                  <div className="About-home-stat-value">5,000+</div>
                  <div className="About-home-stat-label">Happy Clients</div>
                </div>
                <div className="About-home-stat-item">
                  <div className="About-home-stat-value">98%</div>
                  <div className="About-home-stat-label">Satisfaction Rate</div>
                </div>
              </div>


              <Link to="/services" className="About-home-cta-button">
                <span className="About-home-button-text">Explore Services</span>
                <span className="About-home-button-icon">
                  <svg
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M5 12H19M19 12L12 5M19 12L12 19"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </span>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;