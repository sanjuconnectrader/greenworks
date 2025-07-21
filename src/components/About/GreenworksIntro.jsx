import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import "./GreenworksIntro.css";

// Register GSAP plugins
if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

const GreenworksIntro = () => {
  const sectionRef = useRef(null);
  const headingRefs = useRef([]);
  const labelRef = useRef(null);
  const underlineRef = useRef(null);
  const taglineRef = useRef(null);
  const imageRef = useRef(null);
  const imageInnerRef = useRef(null);
  const contentRef = useRef(null);
  const featureRefs = useRef([]);

  const addToRefs = (refArray, el) => {
    if (el && !refArray.current.includes(el)) {
      refArray.current.push(el);
    }
  };

  useEffect(() => {
    const isMobile = window.innerWidth <= 768;
    
    const tl = gsap.timeline({
      scrollTrigger: {
        trigger: sectionRef.current,
        start: isMobile ? "top 85%" : "top 75%",
        toggleActions: "play none none none",
      },
    });

    if (isMobile) {
      tl.fromTo(
        [labelRef.current, underlineRef.current, ...headingRefs.current, taglineRef.current, imageRef.current, ...featureRefs.current],
        { y: 20, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.1, 
          ease: "power3.out" 
        }
      );
    } else {
      tl.from(contentRef.current, {
        x: -40,
        opacity: 0,
        duration: 0.8,
        ease: "power3.out"
      })
      .fromTo(
        labelRef.current,
        { y: 30, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.6, ease: "expo.out" },
        "-=0.6"
      )
      .fromTo(
        underlineRef.current,
        { scaleX: 0 },
        { scaleX: 1, duration: 0.8, ease: "expo.out" },
        "-=0.4"
      )
      .fromTo(
        headingRefs.current,
        { y: 60, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.8, 
          stagger: 0.15,
          ease: "back.out(1.7)" 
        },
        "-=0.6"
      )
      .fromTo(
        taglineRef.current,
        { y: 40, opacity: 0 },
        { y: 0, opacity: 1, duration: 0.8, ease: "power2.out" },
        "-=0.6"
      )
      .fromTo(
        featureRefs.current,
        { y: 30, opacity: 0 },
        { 
          y: 0, 
          opacity: 1, 
          duration: 0.6, 
          stagger: 0.1,
          ease: "power2.out" 
        },
        "-=0.4"
      )
      .fromTo(
        imageRef.current,
        { x: 60, opacity: 0 },
        { x: 0, opacity: 1, duration: 0.8, ease: "power3.out" },
        "-=0.8"
      )
      .fromTo(
        imageInnerRef.current,
        { scale: 1.1, rotate: -2 },
        { scale: 1, rotate: 0, duration: 1.2, ease: "elastic.out(1, 0.5)" },
        "-=0.8"
      );
    }

    return () => tl.kill();
  }, []);

  return (
    <section className="greenworks-intro" ref={sectionRef}>
      {/* Decorative elements */}
      <div className="greenworks-intro__decor greenworks-intro__decor--leaf"></div>
      <div className="greenworks-intro__decor greenworks-intro__decor--water-drop"></div>
      
      <div className="greenworks-intro__container">
        <div className="greenworks-intro__content" ref={contentRef}>
          {/* Section label */}
          <div className="greenworks-intro__label" ref={labelRef}>
            <span className="greenworks-intro__label-text">Our Commitment</span>
            <span className="greenworks-intro__underline" ref={underlineRef}></span>
          </div>

          {/* Main heading */}
          <h1 className="greenworks-intro__heading">
            <span className="greenworks-intro__heading-line" ref={(el) => addToRefs(headingRefs, el)}>
              <span className="greenworks-intro__heading-text">Eco-Friendly Cleaning</span>
            </span>
            <span className="greenworks-intro__heading-line" ref={(el) => addToRefs(headingRefs, el)}>
              <span className="greenworks-intro__heading-text">For Healthier Homes</span>
            </span>
          </h1>

          {/* Sub-copy */}
          <p className="greenworks-intro__tagline" ref={taglineRef}>
            As a family-owned and locally operated cleaning business in Seattle, Greenworks is committed to delivering the highest quality service to every customer. We believe in using only safe, non-toxic products that are gentle for both your loved ones and your pets.
          </p>

          {/* Features */}
          <div className="greenworks-intro__features">
            <div className="greenworks-intro__feature" ref={(el) => addToRefs(featureRefs, el)}>
              <div className="greenworks-intro__feature-icon">✓</div>
              <span>cleaning company dedicated to providing top quality service</span>
            </div>
            <div className="greenworks-intro__feature" ref={(el) => addToRefs(featureRefs, el)}>
              <div className="greenworks-intro__feature-icon">✓</div>
              <span>We pride ourselves on using family and pet safe cleaning products</span>
            </div>
            <div className="greenworks-intro__feature" ref={(el) => addToRefs(featureRefs, el)}>
              <div className="greenworks-intro__feature-icon">✓</div>
              <span>Give us a call or use our online quote and scheduling form</span>
            </div>
            <div className="greenworks-intro__feature" ref={(el) => addToRefs(featureRefs, el)}>
              <div className="greenworks-intro__feature-icon">✓</div>
              <span>carpet, upholstery, and tile and grout cleaning.</span>
            </div>
          </div>
        </div>

        {/* Image Section */}
        <div className="greenworks-intro__image-wrapper" ref={imageRef}>
          <div className="greenworks-intro__image-inner" ref={imageInnerRef}>
            <img 
              src="./team.jpeg"
              alt="Greenworks cleaning team in action" 
              className="greenworks-intro__image"
              loading="lazy"
            />
            <div className="greenworks-intro__image-overlay"></div>
            <div className="greenworks-intro__image-accent"></div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GreenworksIntro;