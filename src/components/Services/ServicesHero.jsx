import React, { useEffect, useRef } from 'react';
import '../../styles/Services/ServicesHero.css';
import Button2 from '../Button2';
import BlurImage from '../../assets/Blur.png';
import lottie from 'lottie-web';
import rocketAnimation from '../../assets/lottie_animations/rocket.json';

const ServicesHero = () => {
  const animContainer = useRef(null);

  useEffect(() => {
    if (!animContainer.current) return;

    animContainer.current.innerHTML = '';

    const animInstance = lottie.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: rocketAnimation,
    });

    return () => {
      animInstance.destroy();
    };
  }, []);

  return (
    <section className="services-hero">
      <img src={BlurImage} alt="Blur" className="services-blur-top" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Everything You Need to Launch
          </h1>
          <p className="hero-description">
          From design to deployment, our services are built to bring your ideas to life with clarity and care.
          </p>
          <div className="hero-buttons">
            <Button2 to="/contact">Start Your Project</Button2>
            <Button2 to="/projects">View Projects</Button2>
          </div>
        </div>
        <div className="hero-visual">
          <div className="hero-lottie-container" ref={animContainer}></div>
        </div>
      </div>
    </section>
  );
};

export default ServicesHero; 