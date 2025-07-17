import React from "react";
import "./Meetteam.css";
import { FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

const team = [
  {
    id: 1,
    img: "team1.jpeg",
    alt: "Alex Johnson headshot",
    name: "Alex Johnson",
    role: "Lead Cleaner",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 2,
    img: "team2.jpg",
    alt: "Sarah Williams headshot",
    name: "Sarah Williams",
    role: "Eco Specialist",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 3,
    img: "team3.jpg",
    alt: "Michael Fedry headshot",
    name: "Michael Fedry",
    role: "Operations Manager",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 4,
    img: "team4.jpg",
    alt: "Emily Sarah headshot",
    name: "Emily Sarah",
    role: "Customer Success",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 5,
    img: "team5.jpg",
    alt: "David Marc headshot",
    name: "David Marc",
    role: "Quality Control",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 6,
    img: "team6.jpg",
    alt: "Jessica Mariam headshot",
    name: "Jessica Mariam",
    role: "Training Coordinator",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 7,
    img: "team7.jpg",
    alt: "Philip Jack headshot",
    name: "Philip Jack",
    role: "Equipment Specialist",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    id: 8,
    img: "team8.jpg",
    alt: "Jackie Fed headshot",
    name: "Jackie Fed",
    role: "Green Solutions",
    social: {
      instagram: "#",
      linkedin: "#",
      twitter: "#"
    }
  },
];

const MeetTeam = React.memo(() => {
  return (
    <section className="meetteam" aria-labelledby="team-heading">
      <div className="meetteam__container">
        <header className="meetteam__header">
          <span className="meetteam__subtitle">Our Professionals</span>
          <h2 id="team-heading" className="meetteam__heading">
            Meet Our <span className="meetteam__heading-highlight">Dream Team</span>
          </h2>
          <p className="meetteam__description">
            Dedicated experts committed to delivering exceptional cleaning services with eco‑friendly solutions.
          </p>
        </header>

        <div className="meetteam__grid">
          {team.map((member) => (
            <TeamCard key={member.id} member={member} />
          ))}
        </div>
      </div>
    </section>
  );
});

const TeamCard = ({ member }) => {
  const [isHovered, setIsHovered] = React.useState(false);

  return (
    <article 
      className="meetteam__card"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <figure className="meetteam__image-container">
        <img
          src={`${process.env.PUBLIC_URL}/${member.img}`}
          alt={member.alt}
          width="280"
          height="280"
          loading="lazy"
          className="meetteam__photo"
        />
        <figcaption className={`meetteam__overlay ${isHovered ? 'active' : ''}`}>
          <div className="meetteam__social-links">
            <a href={member.social.instagram} aria-label={`${member.name} on Instagram`} target="_blank" rel="noopener noreferrer">
              <FaInstagram />
            </a>
            <a href={member.social.linkedin} aria-label={`${member.name} on LinkedIn`} target="_blank" rel="noopener noreferrer">
              <FaLinkedin />
            </a>
            <a href={member.social.twitter} aria-label={`${member.name} on Twitter`} target="_blank" rel="noopener noreferrer">
              <FaTwitter />
            </a>
          </div>
        </figcaption>
      </figure>

      <div className="meetteam__info">
        <h3 className="meetteam__name">{member.name}</h3>
        <p className="meetteam__role">{member.role}</p>
      </div>
    </article>
  );
};

export default MeetTeam;