import React, { useEffect, useRef } from 'react';
import '../../styles/Projects/ProjectsHero.css';
import Blur from '../../assets/Blur.png';
import Button2 from '../Button2.jsx';
import lottie from 'lottie-web';
import ideaAnimation from '../../assets/lottie_animations/idea.json';

const ProjectsHero = () => {
  const animContainer = useRef(null);

  useEffect(() => {
    if (!animContainer.current) return;

    animContainer.current.innerHTML = '';

    const animInstance = lottie.loadAnimation({
      container: animContainer.current,
      renderer: 'svg',
      loop: true,
      autoplay: true,
      animationData: ideaAnimation,
    });

    return () => {
      animInstance.destroy();
    };
  }, []);

  return (
    <section className="projects-hero">
      <img src={Blur} alt="Blur" className="projects-blur-top" />
      <div className="hero-content">
        <div className="hero-text">
          <h1 className="hero-title">
            Bringing Ideas to Life
          </h1>
          <p className="hero-description">
            Explore the digital products we've designed, developed, and delivered with purpose and precision.
          </p>
          <div className="hero-buttons">
            <Button2 to="/contact">Start Your Project</Button2>
            <Button2 to="/services">Our Services</Button2>
          </div>
        </div>
        <div className="hero-visual">
          <div className="projects-lottie-container" ref={animContainer}></div>
        </div>
      </div>
    </section>
  );
};

export default ProjectsHero; 