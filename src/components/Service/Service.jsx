import React, { useState } from "react";
import { FaPlus, FaMinus, FaClock, FaShieldAlt, FaLeaf, FaStar, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiAward, FiShield, FiHeart, FiClock } from "react-icons/fi";
import { GiBroom, GiWoodenChair, GiStonePath, GiSofa } from "react-icons/gi";
import { IoWater, IoTime, IoDiamond, IoRibbon } from "react-icons/io5";
import { RiCustomerService2Fill, RiShieldCheckFill, RiTeamFill } from "react-icons/ri";
import "./Service.css";

// SECTIONS.js
// (Ensure the referenced icon components are imported in the file that uses this data.)

const SECTIONS = [
  /* ───────────────────────── CARPET CLEANING ───────────────────────── */
  {
    id: "carpet",
    title: "Five‑Star Seattle Carpet Cleaning",
    heading: "Carpet Cleaning",
    image: "./service01.jpg",
    description:
      "Our five‑star Seattle carpet‑cleaning process ensures every fibre is cleaned thoroughly with no detail missed. "
      + "Family‑ and pet‑safe solutions leave your carpet soft so it stays cleaner for longer, while hot‑water extraction removes deep‑seated soil and allergens.",
    benefits: [
      "Deep fiber cleaning",
      "Pet odor removal",
      "Eco-friendly solutions",
      "Stain protection"
    ],
    steps: [
      {
        title: "Vacuuming",
        body: "Thorough vacuuming removes loose soil and pet hair from carpet fibres.",
        details:
          "We use commercial‑grade HEPA‑filtration vacuums that capture particles as small as 0.3 microns, including dust mites, pollen, and pet dander.",
        icon: <IoWater />
      },
      {
        title: "Pre‑Spraying",
        body: "Eco‑friendly solution sprayed to loosen embedded dirt.",
        details:
          "We pre-treat your carpets with an organic and eco-friendly solution that cuts through the deeply embedded soils in the carpet fibers.",
        icon: <FaLeaf />
      },
      {
        title: "Agitation",
        body: "Grooming brushes work the pre‑spray deep into fibres for better soil suspension.",
        details:
          "We use mechanical agitation to help our pre-spray break up the soil so that is more easily extracted.",
        icon: <FaClock />
      },
      {
        title: "Rinsing & Extraction",
        body: "High‑powered hot‑water extraction lifts soil and residues out.",
        details:
          "With our high-powered carpet cleaning machines, we thoroughly rinse the carpet to remove the suspended soils out of the carpet fibers. Our cutting-edge machinery is able to perform 8 to 10 times as many passes than just a traditional wand, which helps the carpet dry faster but also to ensure maximum soil extraction.",
        icon: <IoDiamond />
      },
      {
        title: "General Deodorizing",
        body: "Neutralises odours with hypoallergenic, pet‑safe deodorisers.",
        details:
          "This is optional and extra for you to choose from. Our general deodorizer helps with general pet odor and general odor that dirt and soil can bring into the home. It leaves behind a light pleasant smell that will last for a few days following the cleaning.",
        icon: <FaLeaf />
      },
      {
        title: "Carpet Protector (Optional)",
        body: "Fibre protector helps repel future spills and stains.",
        details:
          "Having carpet protector reapplied after cleaning is great way to help your carpet to last longer and make spotting small spills easier for you to clean up. Carpet protector helps soil not to bind to the carpet fibers so that regular vacuuming can more easily remove it, and helps liquid spills to not damage the dye sites in the carpet creating a permanent stain.",
        icon: <FaShieldAlt />
      }
    ]
  },

  /* ───────────────────────── HARDWOOD FLOOR CLEANING ───────────────────────── */
  {
    id: "wood",
    title: "Professional Hardwood Floor Cleaning",
    heading: "Hardwood Floor Cleaning",
    image: "./service02.jpg",
    icon: <GiWoodenChair className="service-icon-svg" />,
    description:
      "Hardwood floors add natural beauty, but traffic and residue can dull the finish. "
      + "Our gentle, low‑moisture process lifts embedded grime, buffs away haze, and can be sealed with an optional water‑based urethane top‑coat for renewed shine and scratch resistance.",
    benefits: [
      "Gentle on finishes",
      "Scratch prevention",
      "Restores shine",
      "Low-moisture process"
    ],
    steps: [
      {
        title: "Inspection",
        body: "Assess finish type, condition, and areas of concern.",
        details:
          "We examine your floors under specialised lighting to identify wear patterns, finish type (polyurethane, wax, oil), and problem areas needing special attention.",
        icon: <FaShieldAlt />
      },
      {
        title: "Vacuuming",
        body: "Edge‑to‑edge vacuum collects grit that can scratch wood.",
        details:
          "Soft‑bristle floor attachments prevent scratching while powerful suction removes embedded dirt from between floorboards.",
        icon: <FaClock />
      },
      {
        title: "Deep Cleaning",
        body: "Specialised wood‑safe cleaner removes built‑up grime.",
        details:
          "Our pH‑neutral wood cleaner lifts dirt without damaging finishes or causing the whitening effect common with harsh cleaners.",
        icon: <FaLeaf />
      },
      {
        title: "Extraction & Buff",
        body: "Low‑moisture buffing lifts residue and polishes surface.",
        details:
          "Microfiber pads gently buff the surface while specialised equipment removes all cleaning residue, leaving no streaks or film.",
        icon: <IoRibbon />
      },
      {
        title: "Protective Finish (Optional)",
        body: "Urethane top‑coat adds shine and defence.",
        details:
          "Water‑based protective coating enhances shine while providing scratch resistance and making future cleaning easier.",
        icon: <FaShieldAlt />
      }
    ]
  },

  /* ───────────────────────── TILE & GROUT CLEANING ───────────────────────── */
  {
    id: "tile",
    title: "Tile & Grout Revival Service",
    heading: "Tile & Grout Cleaning",
    image: "./service03.jpg",
    icon: <GiStonePath className="service-icon-svg" />,
    description:
      "Cutting‑edge cleaning solutions and high‑pressure hot‑water extraction restore your tile’s original colour and clarity. "
      + "We finish with an optional penetrating grout sealant to guard against future stains, mold, and moisture.",
    benefits: [
      "Restores original color",
      "Grout revitalization",
      "Mold prevention",
      "Sealant application"
    ],
    steps: [
      {
        title: "Sweeping",
        body: "Initial sweeping removes loose debris and surface dirt.",
        details:
          "Soft‑bristle brooms prevent scratching delicate tile surfaces while clearing away loose particles.",
        icon: <FaShieldAlt />
      },
      {
        title: "Vacuuming",
        body: "Detailed vacuuming ensures complete debris removal.",
        details:
          "Commercial vacuums with specialised floor attachments extract dirt from grout lines and tile textures.",
        icon: <FaClock />
      },
      {
        title: "Pre‑Spray",
        body: "Application of specialised tile‑cleaning solution.",
        details:
          "pH‑balanced cleaner breaks down soap scum, hard‑water deposits, and embedded dirt without damaging grout.",
        icon: <FaLeaf />
      },
      {
        title: "Agitation",
        body: "Deep scrubbing of grout lines and tile surfaces.",
        details:
          "Rotary brushes with varying stiffness clean different tile types effectively while protecting surfaces.",
        icon: <IoDiamond />
      },
      {
        title: "Hot‑Water Rinse",
        body: "High‑pressure hot‑water extraction.",
        details:
          "Our powerful cleaning machine generates temperatures up to 230 degrees. Our self-contained tile and grout cleaning tool pressurizes this hot water and blasts away dirt and grime. It is immediately extracted and does not leave a big mess of water puddles.",
        icon: <FaShieldAlt />
      },
      {
        title: "Restorative Cleaning",
        body: "Targeted treatment for stubborn stains.",
        details:
          "At times, we will need to use a two-part cleaning process to properly restore the look of your grout. The first process removes oil, dirt, and grime. The second restores the look of the grout lines using a specialty grout restoration cleaning solution to do so. ",
        icon: <FaLeaf />
      },
      {
        title: "Grout Sealing (Optional)",
        body: "Protective sealing application.",
        details:
          "We offer grout sealing using an impregnating sealer to penetrate deep into the grout lines giving you layers of protection. This sealer will not damage the grout but will help liquids and oils to not penetrate and stain the grout lines. For natural tiles such as Slate, Limestone, and tumbled travertine – we can seal the tile face and the grout lines for added protection with this penetrating sealer. This is a safe and better alterative to topical coats for these types of tile.",
        icon: <FaShieldAlt />
      }
    ]
  },

  /* ───────────────────────── UPHOLSTERY CLEANING ───────────────────────── */
  {
    id: "upholstery",
    title: "Delicate Upholstery Cleaning & Protection",
    heading: "Upholstery Cleaning",
    image: "./service04.jpg",
    icon: <GiSofa className="service-icon-svg" />,
    description:
      "Delicate upholstery fabrics trap dust, allergens, and spills that ordinary vacuuming can’t remove. "
      + "We deep‑clean microfiber, silk blends, velvet, and high‑quality synthetics, treat stains individually, and offer optional fabric protector to keep pieces looking showroom‑fresh.",
    benefits: [
      "Fabric‑safe process",
      "Stain removal",
      "Allergen reduction",
      "Delicate fabric care"
    ],
    steps: [
      {
        title: "Types of Upholstery We Clean",
        body: "We professionally clean delicate fabric types including:",
        details:
          "• Microfiber\n"
          + "• Silk blends\n"
          + "• Velvet\n"
          + "• Synthetic fabrics\n\n"
          + "We test all cleaning methods on inconspicuous areas first.",
        icon: <FaShieldAlt />
      },
      {
        title: "Inspection & Testing",
        body: "Assessing fabric type and condition.",
        details:
          "We identify fiber content, construction, and existing damage before selecting appropriate cleaning methods.",
        icon: <FaClock />
      },
      {
        title: "Vacuuming",
        body: "Deep particulate removal.",
        details:
          "Special upholstery tools remove embedded dirt without damaging fabric fibers or decorative elements.",
        icon: <FaLeaf />
      },
      {
        title: "Spot Treatment",
        body: "Targeted stain removal.",
        details:
          "Custom solutions for different stain types (protein, tannin, oil, ink, etc.) applied with appropriate dwell times.",
        icon: <IoDiamond />
      },
      {
        title: "Cleaning",
        body: "Whole‑surface treatment.",
        details:
          "Low‑moisture methods or steam cleaning based on fabric requirements, using eco‑friendly solutions.",
        icon: <FaShieldAlt />
      },
      {
        title: "Protection (Optional)",
        body: "Fabric protector application.",
        details:
          "Creates an invisible barrier against future spills and stains while maintaining fabric breathability.",
        icon: <FaLeaf />
      }
    ],
    disclaimer:
      "Note: Some delicate fabrics may require special handling. We always test cleaning methods in inconspicuous areas first."
  }
];





const FEATURES = [
  {
    icon: <FiAward className="feature-icon" />,
    title: "Certified Professionals",
    description: "Our technicians undergo rigorous training and certification to deliver industry-leading results."
  },
  {
    icon: <FiShield className="feature-icon" />,
    title: "Eco-Friendly Solutions",
    description: "We use only non-toxic, biodegradable cleaning products safe for your family and pets."
  },
  {
    icon: <RiCustomerService2Fill className="feature-icon" />,
    title: "Premium Service",
    description: "24/7 customer support with rapid response times for all your cleaning needs."
  },
  {
    icon: <FiCheck className="feature-icon" />,
    title: "Satisfaction Guaranteed",
    description: "If you're not completely satisfied, we'll re-clean the area at no additional cost."
  },
  {
    icon: <RiTeamFill className="feature-icon" />,
    title: "Experienced Team",
    description: "Over 15 years of combined experience in professional cleaning services."
  },
  {
    icon: <FiHeart className="feature-icon" />,
    title: "Locally Owned",
    description: "We're part of your community and take pride in serving our neighbors with integrity."
  },
  {
    icon: <FiClock className="feature-icon" />,
    title: "On-Time Arrival",
    description: "Punctual and reliable service—you can count on us to arrive when we say we will."
  },
  {
    icon: <RiShieldCheckFill className="feature-icon" />,
    title: "Advanced Equipment",
    description: "We use state-of-the-art machinery to ensure a deep and effective clean every time."
  }
];

const TESTIMONIALS = [
  {
    name: "Joseph Alex",
    role: "Homeowner",
    content: "The team transformed my carpets completely. They look brand new and the pet odors are completely gone. Highly recommend their services!",
    rating: 5
  },
  {
    name: "Sarah Alexander",
    role: "Property Manager",
    content: "Consistently excellent service for our apartment complex. The hardwood floor cleaning has saved us thousands in refinishing costs.",
    rating: 5
  },
  {
    name: "Emily john",
    role: "Business Owner",
    content: "Our office tile floors had years of buildup. After their cleaning, the grout looks like it was just installed. Professional and efficient.",
    rating: 4
  }
];
const AccordionItem = ({ title, body, details, defaultOpen = false }) => {
  const [open, setOpen] = useState(defaultOpen);
  
  return (
    <div className={`acc-item ${open ? "is-open" : ""}`}>
      <motion.button
        className="acc-btn"
        onClick={() => setOpen(!open)}
        aria-expanded={open}
        whileHover={{ backgroundColor: "rgba(37, 99, 235, 0.05)" }}
        whileTap={{ scale: 0.98 }}
      >
        <span className="acc-btn-text">{title}</span>
        <motion.span 
          className="acc-icon"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M6 9L12 15L18 9" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </motion.span>
      </motion.button>
      
      <AnimatePresence>
        {open && (
          <motion.div
            className="acc-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ 
              opacity: 1, 
              height: "auto",
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2, delay: 0.1 }
              }
            }}
            exit={{ 
              opacity: 0, 
              height: 0,
              transition: {
                height: { duration: 0.3 },
                opacity: { duration: 0.2 }
              }
            }}
          >
            <div className="acc-body-content">
              <p className="acc-body-main">{body}</p>
              {details && (
                <motion.div 
                  className="acc-details"
                  initial={{ opacity: 0, y: -10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                >
                  <div className="detail-decoration"></div>
                  <p className="acc-body-details">{details}</p>
                </motion.div>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

const ServiceBlock = ({ heading, image, steps, disclaimer, reverse, benefits }) => {
  return (
    <motion.div 
      className={`service-block ${reverse ? "reverse" : ""}`}
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-100px" }}
      transition={{ duration: 0.6 }}
    >
      <div className="service-img-container">
        <figure className="service-img">
          <img src={image} alt={heading} loading="lazy" />
          <div className="image-overlay"></div>
        </figure>
      </div>

      <div className="service-acc">
        <h3 className="service-heading">
          <span className="heading-decoration"></span>
          {heading}
        </h3>
        
        <div className="service-benefits">
          {benefits.map((benefit, index) => (
            <motion.div 
              key={index} 
              className="benefit-item"
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              <span className="benefit-icon">
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path d="M20 6L9 17L4 12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </span>
              <span>{benefit}</span>
            </motion.div>
          ))}
        </div>
        
        <ul className="acc-list">
          {steps.map((s, index) => (
            <AccordionItem 
              key={s.title} 
              {...s} 
              defaultOpen={index === 0}
            />
          ))}
        </ul>
        
        {disclaimer && (
          <motion.div 
            className="service-note"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.4 }}
          >
            <div className="note-icon">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 16V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12 8H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
            </div>
            <p>{disclaimer}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ title, description }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="feature-icon-container">
        <svg width="32" height="32" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 8V12" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
          <path d="M12 16H12.01" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, content, rating }) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <svg 
      key={i} 
      className={`testimonial-star ${i < rating ? "filled" : ""}`}
      width="20" 
      height="20" 
      viewBox="0 0 24 24" 
      fill="none" 
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12 2L15.09 8.26L22 9.27L17 14.14L18.18 21.02L12 17.77L5.82 21.02L7 14.14L2 9.27L8.91 8.26L12 2Z" 
        stroke="currentColor" 
        strokeWidth="2" 
        strokeLinecap="round" 
        strokeLinejoin="round"
        fill={i < rating ? "currentColor" : "none"}
      />
    </svg>
  ));
  
  return (
    <motion.div 
      className="testimonial-card"
      whileHover={{ y: -5 }}
      transition={{ duration: 0.3 }}
    >
      <div className="testimonial-rating">{stars}</div>
      <p className="testimonial-content">"{content}"</p>
      <div className="testimonial-author">
        <h4 className="testimonial-name">{name}</h4>
        <p className="testimonial-role">{role}</p>
      </div>
    </motion.div>
  );
};

const ServiceSection = () => {
  return (
    <section className="service" id="services">
      <div className="service-container">
        <div className="section-header">
          <motion.h2 
            className="section-title"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            Premium Cleaning Solutions
            <span className="title-decoration"></span>
          </motion.h2>

          <motion.p 
            className="section-description"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            Professional cleaning services tailored to your specific needs with our certified eco-friendly process
          </motion.p>
        </div>

        <div className="features-grid">
          {FEATURES.map((feature, index) => (
            <FeatureCard 
              key={index}
              {...feature}
            />
          ))}
        </div>

        <div className="service-blocks">
          {SECTIONS.map((section, index) => (
            <ServiceBlock 
              key={section.id} 
              {...section} 
              reverse={index % 2 !== 0} 
            />
          ))}
        </div>

        <div className="testimonials-section">
          <motion.h3 
            className="testimonials-heading"
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            What Our Clients Say
          </motion.h3>
          
          <div className="testimonials-grid">
            {TESTIMONIALS.map((testimonial, index) => (
              <TestimonialCard 
                key={index}
                {...testimonial}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;