import React, { useRef, useState, useCallback, useEffect } from "react";
import "./Work.css";

const SLIDES = [
  {
    before: "./pic1-before.jpeg",
    after: "./pic1-after.jpeg",
   
    description: "Complete deep cleaning of heavily soiled living room carpet"
  },
  {
    before: "./pic2-before.jpeg",
    after: "./pic3-after.jpeg",
   
    description: "Commercial carpet cleaning for high-traffic office area"
  },
  {
    before: "./pic3.1-before.jpeg",
    after: "./pic3.2-after.jpeg",
 
    description: "Eco-friendly cleaning solution for allergy-sensitive bedroom"
  },
  {
    before: "./pic4-before.jpeg",
    after: "./pic4-after.jpeg",
  
    description: "Specialized treatment for worn staircase carpeting"
  }
];

function BeforeAfterSlider({ before, after, title, description, isFirst }) {
  const containerRef = useRef(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  // Check for mobile devices
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const updatePosition = useCallback((clientX) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const percentage = Math.min(100, Math.max(0, ((clientX - rect.left) / rect.width) * 100));
    setPosition(percentage);
  }, []);

  const handleInteractionStart = (e) => {
    setIsDragging(true);
    updatePosition(e.clientX ?? e.touches[0].clientX);
  };

  const handleInteractionMove = (e) => {
    if (!isDragging) return;
    updatePosition(e.clientX ?? e.touches[0].clientX);
  };

  const stopInteraction = () => setIsDragging(false);

  useEffect(() => {
    document.addEventListener('mouseup', stopInteraction);
    document.addEventListener('touchend', stopInteraction);
    document.addEventListener('mousemove', handleInteractionMove);
    document.addEventListener('touchmove', handleInteractionMove);
    
    return () => {
      document.removeEventListener('mouseup', stopInteraction);
      document.removeEventListener('touchend', stopInteraction);
      document.removeEventListener('mousemove', handleInteractionMove);
      document.removeEventListener('touchmove', handleInteractionMove);
    };
  }, [isDragging]);

  const handleKeyDown = (e) => {
    if (e.key === 'ArrowLeft') setPosition(p => Math.max(0, p - 5));
    if (e.key === 'ArrowRight') setPosition(p => Math.min(100, p + 5));
  };

  return (
    <div className="slider-container">
      {title && <h3 className="slider-title">{title}</h3>}
      <figure
        ref={containerRef}
        className="slider-figure"
        onMouseMove={handleInteractionMove}
        onTouchMove={handleInteractionMove}
      >
        {/* After image */}
        <img 
          src={after} 
          alt="After cleaning" 
          className="slider-image slider-image-after" 
          loading="lazy"
        />
        
        {/* Before image with dynamic clipping */}
        <img
          src={before}
          alt="Before cleaning"
          className="slider-image slider-image-before"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        />
        
        {/* Divider line */}
        <div className="slider-divider" style={{ left: `${position}%` }} />
        
        {/* Interactive handle */}
        <button
          className="slider-handle"
          style={{ left: `${position}%` }}
          onMouseDown={handleInteractionStart}
          onTouchStart={handleInteractionStart}
          onKeyDown={handleKeyDown}
          aria-label="Drag to compare before and after"
        >
          <div className="slider-handle-icon">
            <svg viewBox="0 0 24 24" width="16" height="16">
              <path d="M8 7l4-4 4 4M16 17l-4 4-4-4" stroke="currentColor" strokeWidth="2" fill="none" />
            </svg>
          </div>
        </button>
        
        {/* Labels - only show on desktop */}
        {!isMobile && (
          <>
            <span className="slider-label slider-label-before">Before</span>
            <span className="slider-label slider-label-after">After</span>
          </>
        )}
      </figure>
      {description && <p className="slider-description">{description}</p>}
    </div>
  );
}

export default function WorkGallery() {
  return (
    <section className="work-section">
      <div className="work-container">
        <h2 className="work-heading">Our Transformation Gallery</h2>
        <p className="work-subheading">See the difference our professional cleaning makes</p>
        
        <div className="work-grid">
          {SLIDES.map((slide, index) => (
            <BeforeAfterSlider 
              key={index}
              before={slide.before}
              after={slide.after}
              title={slide.title}
              description={slide.description}
              isFirst={index === 0}
            />
          ))}
        </div>
      </div>
    </section>
  );
}