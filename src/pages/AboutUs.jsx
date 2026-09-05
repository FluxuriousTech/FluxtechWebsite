import React, { useEffect, useRef } from 'react';
import Navbar from '../components/Navbar.jsx';
import Footer from '../components/Footer.jsx';
import Button2 from '../components/Button2.jsx';
import SEOHead from '../components/SEOHead.jsx';
import '../styles/AboutUs.css';
import BlurImage from '../assets/Blur.png';
import BottomPattern from '../assets/bottom_pattern.png';
import TeamWorkImage from '../assets/TeamWork.png';
import lottie from 'lottie-web';
import teamAnimation from '../assets/lottie_animations/team.json';
import { motion } from 'framer-motion';

const aboutPageSchema = {
  "@context": "https://schema.org",
  "@type": "AboutPage",
  "name": "About Fluxurious Tech",
  "description": "A creative tech team building smart digital solutions. 150+ projects delivered, 50+ happy clients.",
  "url": "https://www.fluxurioustech.com/about",
  "mainEntity": {
    "@type": "Organization",
    "name": "Fluxurious Tech",
    "url": "https://www.fluxurioustech.com",
    "numberOfEmployees": {
      "@type": "QuantitativeValue",
      "value": "10-50"
    },
    "foundingLocation": {
      "@type": "Place",
      "name": "Mumbai, India"
    },
    "slogan": "A creative tech team building smart digital solutions."
  }
};

const AboutUs = () => {
  const animContainer = useRef(null);

  useEffect(() => {
    if (!animContainer.current) return;

    animContainer.current.innerHTML = '';

    const animInstance = lottie.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: teamAnimation,
    });

    return () => {
      animInstance.destroy();
    };
  }, []);

  const stats = [
    { number: "150+", label: "Projects Delivered" },
    { number: "50+", label: "Happy Clients" },
    { number: "7 Days", label: "Average Delivery" },
    { number: "24/7", label: "Support Available" }
  ];

  return (
    <main className="about-container">
      <SEOHead
        title="About Us — Creative Tech Studio in Mumbai"
        description="A creative tech team building smart digital solutions. 150+ projects delivered, 50+ happy clients, 7-day average delivery. Based in Mumbai, India."
        canonicalPath="/about"
        structuredData={aboutPageSchema}
      />
      <Navbar />
      
      {/* Hero Section */}
      <section className="about-hero">
        <img src={BlurImage} alt="" className="about-blur-top" />
        <div className="hero-content">
          <div className="hero-text">
            <h1 className="hero-title">
              Who We Are
            </h1>
            <p className="hero-subtitle">
              A creative tech team building smart digital solutions.
            </p>
            <p className="hero-description">
              We design and develop web experiences that help businesses grow and ideas come to life.
            </p>
            <div className="hero-buttons">
              <Button2 to="/contact">Start Your Project</Button2>
              <Button2 to="/projects">View Our Work</Button2>
            </div>
          </div>
          <div className="hero-visual">
            <div className="about-lottie-container" ref={animContainer}></div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="stats-section">
        <div className="stats-container">
          {stats.map((stat, index) => (
            <div key={index} className="stat-item">
              <div className="stat-number">{stat.number}</div>
              <div className="stat-label">{stat.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="team-container">
          <div className="section-header">
            <motion.h2 
              className="section-title"
              initial={{ opacity: 0, y: -60, scale: 0.8 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 1,
                  ease: [0.25, 0.46, 0.45, 0.94]
                }
              }}
              viewport={{ amount: 0.3 }}
            >
              "Innovation happens when people from different backgrounds work together."
            </motion.h2>
            <motion.p 
              className="section-subtitle"
              initial={{ opacity: 0, y: -40, scale: 0.9 }}
              whileInView={{ 
                opacity: 1, 
                y: 0, 
                scale: 1,
                transition: {
                  duration: 0.8,
                  ease: [0.25, 0.46, 0.45, 0.94],
                  delay: 0.3
                }
              }}
              viewport={{ amount: 0.3 }}
            >
              - Reid Hoffman, Co-founder of LinkedIn
            </motion.p>
          </div>
          <div className="team-image">
            <img src={TeamWorkImage} alt="Fluxurious Tech team collaborating on digital projects" />
          </div>
        </div>
      </section>

      <img src={BottomPattern} alt="" className="about-bottom-pattern" />
      <Footer />
    </main>
  );
};

export default AboutUs; 