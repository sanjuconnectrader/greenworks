import React, { useState } from "react";
import { FaPlus, FaMinus, FaClock, FaShieldAlt, FaLeaf, FaStar, FaChevronDown } from "react-icons/fa";
import { motion, AnimatePresence } from "framer-motion";
import { FiCheck, FiAward, FiShield, FiHeart, FiClock } from "react-icons/fi";
import { GiBroom, GiWoodenChair, GiStonePath, GiSofa } from "react-icons/gi";
import { IoWater, IoTime, IoDiamond, IoRibbon } from "react-icons/io5";
import { RiCustomerService2Fill, RiShieldCheckFill, RiTeamFill } from "react-icons/ri";
import "./Service.css";

const SECTIONS = [
  {
    id: "carpet",
    heading: "Carpet Cleaning",
    image: "./service01.jpg",
 
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
        details: "We use commercial-grade HEPA filtration vacuums that capture particles as small as 0.3 microns, including dust mites, pollen, and pet dander.",
        icon: <IoWater />
      },
      { 
        title: "Pre-Spraying", 
        body: "Eco-friendly solution sprayed to loosen embedded dirt.",
        details: "Our pH-balanced, biodegradable pre-spray solution penetrates deep into carpet fibers without damaging them or leaving harmful residues.",
        icon: <FaLeaf />
      },
      { 
        title: "Agitation", 
        body: "Grooming brushes work the pre-spray deep into fibres for better soil suspension.",
        details: "Rotary brushes with soft nylon bristles gently agitate fibers to lift dirt without causing premature wear to your carpet.",
        icon: <FaClock />
      },
      { 
        title: "Rinsing & Extraction", 
        body: "High-powered hot-water extraction lifts soil and residues out.",
        details: "Our truck-mounted extraction system delivers water at 220°F and 500 PSI, then removes 95% of moisture to prevent mold/mildew.",
        icon: <IoDiamond />
      },
      { 
        title: "General Deodorizing", 
        body: "Neutralises odours with hypoallergenic, pet-safe deodorisers.",
        details: "Enzyme-based deodorizers break down odor molecules rather than masking them, eliminating smells at their source.",
        icon: <FaLeaf />
      },
      { 
        title: "Carpet Protector", 
        body: "Optional fibre protector helps repel future spills and stains.",
        details: "Fluorochemical protector creates an invisible barrier that causes liquids to bead up rather than absorb, making future cleanups easier.",
        icon: <FaShieldAlt />
      }
    ]
  },
  {
    id: "wood",
    heading: "Hardwood Floor Cleaning",
    image: "./service02.jpg",
    icon: <GiWoodenChair className="service-icon-svg" />,
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
        details: "We examine your floors under specialized lighting to identify wear patterns, finish type (polyurethane, wax, oil), and problem areas needing special attention.",
        icon: <FaShieldAlt />
      },
      { 
        title: "Vacuuming", 
        body: "Edge-to-edge vacuum collects grit that can scratch wood.",
        details: "Soft-bristle floor attachments prevent scratching while powerful suction removes embedded dirt from between floorboards.",
        icon: <FaClock />
      },
      { 
        title: "Deep Cleaning", 
        body: "Specialised wood-safe cleaner removes built-up grime.",
        details: "Our pH-neutral wood cleaner lifts dirt without damaging finishes or causing the whitening effect common with harsh cleaners.",
        icon: <FaLeaf />
      },
      { 
        title: "Extraction & Buff", 
        body: "Low-moisture buffing lifts residue and polishes surface.",
        details: "Microfiber pads gently buff the surface while our specialized equipment removes all cleaning residue, leaving no streaks or film.",
        icon: <IoRibbon />
      },
      { 
        title: "Protective Finish", 
        body: "Optional urethane top-coat adds shine and defence.",
        details: "Water-based protective coating enhances shine while providing scratch resistance and making future cleaning easier.",
        icon: <FaShieldAlt />
      }
    ],
  },
  {
    id: "tile",
    heading: "Tile & Grout Cleaning",
    image: "./service03.jpg",
    icon: <GiStonePath className="service-icon-svg" />,
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
        details: "We use soft-bristle brooms to prevent scratching delicate tile surfaces while removing all loose particles.",
        icon: <FaShieldAlt />
      },
      { 
        title: "Vacuuming", 
        body: "Detailed vacuuming ensures complete debris removal.",
        details: "Commercial vacuums with specialized floor attachments extract dirt from grout lines and tile textures.",
        icon: <FaClock />
      },
      { 
        title: "Pre-Spray", 
        body: "Application of specialized tile cleaning solution.",
        details: "pH-balanced cleaner breaks down soap scum, hard water deposits, and embedded dirt without damaging grout.",
        icon: <FaLeaf />
      },
      { 
        title: "Agitation", 
        body: "Deep scrubbing of grout lines and tile surfaces.",
        details: "Rotary brushes with varying stiffness clean different tile types effectively while protecting surfaces.",
        icon: <IoDiamond />
      },
      { 
        title: "Hot Water Rinse", 
        body: "High-pressure hot water extraction.",
        details: "Water heated to 200°F with 1000 PSI pressure removes all cleaning residues and suspended dirt.",
        icon: <FaShieldAlt />
      },
      { 
        title: "Restorative Cleaning", 
        body: "Targeted treatment for stubborn stains.",
        details: "Special poultices and steam treatments address specific problem areas like mold or mineral deposits.",
        icon: <FaLeaf />
      },
      { 
        title: "Grout Sealing", 
        body: "Optional protective sealing application.",
        details: "Penetrating sealant protects grout from future staining and makes regular maintenance easier.",
        icon: <FaShieldAlt />
      }
    ],
    
  },
  {
    id: "upholstery",
    heading: "Upholstery Cleaning",
    image: "./service04.jpg",
    icon: <GiSofa className="service-icon-svg" />,
    benefits: [
      "Fabric-safe process",
      "Stain removal",
      "Allergen reduction",
      "Leather conditioning"
    ],
    steps: [
      { 
        title: "Types of Upholstery We Clean", 
        body: "We professionally clean all fabric types including:",
        details: "• Leather (all types)\n• Microfiber\n• Cotton/Linen\n• Silk blends\n• Velvet\n• Synthetic fabrics\n• Antique textiles (with special care)\n\nWe test all cleaning methods on inconspicuous areas first.",
        icon: <FaShieldAlt />
      },
      { 
        title: "Inspection & Testing", 
        body: "Assessing fabric type and condition.",
        details: "We identify fiber content, construction, and existing damage before selecting appropriate cleaning methods.",
        icon: <FaClock />
      },
      { 
        title: "Vacuuming", 
        body: "Deep particulate removal.",
        details: "Special upholstery tools remove embedded dirt without damaging fabric fibers or decorative elements.",
        icon: <FaLeaf />
      },
      { 
        title: "Spot Treatment", 
        body: "Targeted stain removal.",
        details: "Custom solutions for different stain types (protein, tannin, oil, ink, etc.) applied with appropriate dwell times.",
        icon: <IoDiamond />
      },
      { 
        title: "Cleaning", 
        body: "Whole-surface treatment.",
        details: "Low-moisture methods or steam cleaning based on fabric requirements, using eco-friendly solutions.",
        icon: <FaShieldAlt />
      },
      { 
        title: "Protection", 
        body: "Optional fabric protector.",
        details: "Creates invisible barrier against future spills and stains while maintaining fabric breathability.",
        icon: <FaLeaf />
      }
    ],
    disclaimer: "Note: Some delicate fabrics may require special handling. We always test cleaning methods in inconspicuous areas first."
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

const AccordionItem = ({ title, body, details, icon, defaultOpen = false }) => {
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
        <span className="acc-icon-wrapper">
          <span className="acc-feature-icon">{icon}</span>
          <span className="acc-btn-text">{title}</span>
        </span>
        <motion.span 
          className="acc-icon"
          animate={{ rotate: open ? 180 : 0 }}
          transition={{ duration: 0.3 }}
        >
          <FaChevronDown size={14} />
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

const ServiceBlock = ({ heading, image, steps, disclaimer, reverse, icon, benefits }) => {
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
          <div className="service-icon-badge">
            {icon}
          </div>
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
              <span className="benefit-icon">✓</span>
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
            <div className="note-icon">ℹ️</div>
            <p>{disclaimer}</p>
          </motion.div>
        )}
      </div>
    </motion.div>
  );
};

const FeatureCard = ({ icon, title, description }) => {
  return (
    <motion.div 
      className="feature-card"
      whileHover={{ y: -5, boxShadow: "0 10px 25px rgba(0, 0, 0, 0.1)" }}
      transition={{ duration: 0.3 }}
    >
      <div className="feature-icon-container">
        {icon}
      </div>
      <h3 className="feature-title">{title}</h3>
      <p className="feature-description">{description}</p>
    </motion.div>
  );
};

const TestimonialCard = ({ name, role, content, rating }) => {
  const stars = Array(5).fill(0).map((_, i) => (
    <FaStar 
      key={i} 
      className={`testimonial-star ${i < rating ? "filled" : ""}`}
    />
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