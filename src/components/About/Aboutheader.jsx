import React from 'react';
import './Aboutheader.css';

const Aboutheader = () => {
  return (
    <section
      className="aboutheader"
      style={{ backgroundImage: `url(${process.env.PUBLIC_URL}/team.jpeg)` }}
    >
      <div className="aboutheader__overlay"></div>
      <div className="aboutheader__content">
        <h1>About Us</h1>
        <div className="aboutheader__underline"></div>
      
      </div>
    </section>
  );
};

export default Aboutheader;
