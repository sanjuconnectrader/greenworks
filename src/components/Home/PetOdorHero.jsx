import React from "react";
import { FaArrowRight, FaPaw } from "react-icons/fa";
import "./PetOdorHero.css";

const BG = "./bg-clip.jpg";

export default function PetOdorHero() {
  return (
    <section
      className="pet-hero"
      style={{ backgroundImage: `url(${BG})` }}
      aria-label="Pet odor & stain removal services"
    >
      {/* Decorative top wave */}
      <svg
        className="pet-hero__wave"
        viewBox="0 0 1440 120"
        preserveAspectRatio="none"
      >
        <path
          d="M0,100 C360,50 720,0 1080,50 C1260,70 1440,60 1440,60 L1440,0 L0,0 Z"
          fill="currentColor"
        />
      </svg>

      {/* Dark overlay */}
      <span className="pet-hero__overlay" />

      {/* Content */}
      <div className="pet-hero__inner">
        <div className="pet-hero__badge">
          <FaPaw className="pet-hero__badge-icon" />
          <span>Premium Service</span>
        </div>

        <h1 className="pet-hero__title">
          PET ODOR &amp; STAIN REMOVAL SERVICES
        </h1>

        <h2 className="pet-hero__subtitle">
          ACCIDENTS HAPPEN – WE UNDERSTAND &amp; WE ARE HERE TO HELP
        </h2>

        <p className="pet-hero__text">
          Our furry loved ones are cute, adorable, and a joy to be around.
          However, the messes they leave behind aren't adorable like them. Our
          pet odor and stain removal service can take care of a variety of
          issues that come along with having furry loved ones in the family. Our
          products are safe for them and they do a spectacular job at removing
          odors and stains from these accidents. We offer a variety of processes
          and techniques for your specific situation and would be happy to talk
          with you to figure out what option is best for you. We are here to
          help. Thank you for choosing our Seattle Carpet Cleaning company!
        </p>

        {/* CTA button with icon */}
        <button
          type="button"
          className="pet-hero__btn"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <span>Schedule a Cleaning</span>
          <FaArrowRight className="pet-hero__btn-icon" />
        </button>
      </div>
    </section>
  );
}