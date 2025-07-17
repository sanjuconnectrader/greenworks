import React from "react";
import "./Owner.css";

const Owner = () => {
  const ownerPhoto = `${process.env.PUBLIC_URL}/owner.jpg`;

  return (
    <section className="owner" aria-labelledby="owner-heading">
      <div className="owner__container">
        {/* Left: Image */}
        <figure className="owner__photo-wrapper">
          <div className="owner__photo-overlay"></div>
          <img
            src={ownerPhoto}
            alt="Portrait of Sarah Alex – Founder and CEO of Green Works"
            className="owner__photo"
            loading="lazy"
          />
        </figure>

        {/* Right: Content */}
        <div className="owner__content">
          <div className="owner__header">
            <span className="owner__pre-title">Meet Our Founder</span>
            <h2 id="owner-heading" className="owner__name">
              Sarah <span className="owner__name--highlight">Alex</span>
            </h2>
            <p className="owner__title">Founder & CEO of Green Works</p>
          </div>

          <div className="owner__bio">
            <p className="owner__paragraph">
              With over 15 years in the cleaning industry, Sarah founded Green Works with a vision to 
              revolutionize home care through sustainable practices. Her eco-conscious approach has 
              earned national recognition and transformed thousands of homes.
            </p>

            <p className="owner__paragraph">
              Under Sarah's leadership, Green Works has become synonymous with excellence in green 
              cleaning. Her innovative techniques combine cutting-edge technology with environmentally 
              safe products, creating healthier living spaces without compromising effectiveness.
            </p>

            <p className="owner__paragraph">
              Beyond business success, Sarah is committed to educating communities about sustainable living.
              She regularly speaks at industry conferences and mentors young entrepreneurs passionate about
              combining profitability with environmental responsibility.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Owner;