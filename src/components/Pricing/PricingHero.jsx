import React, { useEffect, useRef } from 'react';
import '../../styles/Pricing/PricingHero.css';
import BlurImage from '../../assets/Blur.png';
import Button2 from '../Button2.jsx';
import lottie from 'lottie-web';
import pricingAnimation from '../../assets/lottie_animations/pricing.json';

const PricingHero = () => {
  const animContainer = useRef(null);

  useEffect(() => {
    if (!animContainer.current) return;

    animContainer.current.innerHTML = '';

    const animInstance = lottie.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: pricingAnimation,
    });

    return () => {
      animInstance.destroy();
    };
  }, []);

  return (
    <section className="pricing-hero">
      <img src={BlurImage} alt="Blur" className="pricing-blur-top" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Build Around Your Budget
          </h1>
          <p className="hero-description">
            Clear, flexible, and tailored to your goals: no jargon, zero hidden fees, just transparent delivery.
          </p>
          <div className="hero-buttons">
            <Button2 to="/contact">Start Your Project</Button2>
            <Button2 to="/services">View Services</Button2>
          </div>
        </div>
        <div className="hero-visual">
          <div className="pricing-lottie-container" ref={animContainer}></div>
        </div>
      </div>
    </section>
  );
};

export default PricingHero;
