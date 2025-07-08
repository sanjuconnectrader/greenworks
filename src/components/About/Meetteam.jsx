import React from "react";
import "./Meetteam.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const team = [
  { 
    id: 1, 
    img: "team1.jpeg", 
    alt: "Team member 1",
    name: "Alex Johnson",
    role: "Lead Cleaner",
 
  },
  { 
    id: 2, 
    img: "team2.jpg", 
    alt: "Team member 2",
    name: "Sarah Williams",
    role: "Eco Specialist",

  },
  { 
    id: 3, 
    img: "team3.jpg", 
    alt: "Team member 3",
    name: "Michael Fedry",
    role: "Operations Manager",

  },
  { 
    id: 4, 
    img: "team4.jpg", 
    alt: "Team member 4",
    name: "Emily Sarah",
    role: "Customer Success",

  },
  { 
    id: 5, 
    img: "team5.jpg", 
    alt: "Team member 5",
    name: "David Marc",
    role: "Quality Control",

  },
  { 
    id: 6, 
    img: "team6.jpg", 
    alt: "Team member 6",
    name: "Jessica Mariam",
    role: "Training Coordinator",

  },
  { 
    id: 7, 
    img: "team7.jpg", 
    alt: "Team member 7",
    name: "Philip Jack",
    role: "Equipment Specialist",
   
  },
  { 
    id: 8, 
    img: "team8.jpg", 
    alt: "Team member 8",
    name: "Jackie Fed",
    role: "Green Solutions",
   
  },
];

const Meetteam = () => {
  return (
    <section className="meetteam" aria-labelledby="team-heading">
      <div className="meetteam__container">
        {/* Section Header */}
        <div className="meetteam__header">
          <span className="meetteam__subtitle">Our Professionals</span>
          <h2 id="team-heading" className="meetteam__heading">
            Meet Our <span className="meetteam__heading-highlight">Dream Team</span>
          </h2>
          <p className="meetteam__description">
            Dedicated experts committed to delivering exceptional cleaning services with eco-friendly solutions
          </p>
        </div>

        {/* Team Grid */}
        <div className="meetteam__grid">
          {team.map((member) => (
            <div key={member.id} className="meetteam__card">
              <div className="meetteam__image-container">
                <img
                  src={`${process.env.PUBLIC_URL}/${member.img}`}
                  alt={member.alt}
                  className="meetteam__photo"
                  loading="lazy"
                />
                <div className="meetteam__overlay">
                 
                </div>
              </div>
              <div className="meetteam__info">
                <h3 className="meetteam__name">{member.name}</h3>
                <p className="meetteam__role">{member.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Meetteam;