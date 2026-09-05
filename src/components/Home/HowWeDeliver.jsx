import React, { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import '../../styles/Home/HowWeDeliver.css';
import BlurEffect from '../../assets/Blur.png';

const timelineSteps = [
  {
    day: 'WEEK 1',
    title: 'STRATEGY & ARCHITECTURE',
    subtitle: 'Discovery, UX Mapping & System Design',
    description: [
      'We begin with an in-depth strategy sprint to align on business objectives, architect user journeys, and lock in milestone scopes.',
      'Wireframes and system specifications are developed in parallel, establishing a rock-solid technical foundation.'
    ]
  },
  {
    day: 'WEEK 2',
    title: 'UI & CORE ENGINE',
    subtitle: 'High-Fidelity Design & Backend Infrastructure',
    description: [
      'Crafting premium, interactive UI layouts with fluid design systems while our engineers build backend APIs and data models.',
      'Every pixel and endpoint is vetted for performance, scalability, and responsiveness.'
    ]
  },
  {
    day: 'WEEK 3',
    title: 'FULL INTEGRATION',
    subtitle: 'Feature Assembly, Interactive Flows & APIs',
    description: [
      'Transforming high-fidelity mockups into dynamic, fast-loading interfaces connected to live services.',
      'Continuous integration cycles with rigorous cross-browser and mobile device verification.'
    ]
  },
  {
    day: 'WEEK 4',
    title: 'POLISH & DEPLOYMENT',
    subtitle: 'Testing, Optimization & Production Launch',
    description: [
      'End-to-end QA, Lighthouse speed optimization, SEO configuration, and security checks.',
      'Zero-downtime deployment to production, client handover, and post-launch performance monitoring.'
    ]
  }
];

const TimelineStep = ({ step, index }) => {
  const sectionRef = useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start end", "end start"]
  });

  // Parallax effect for day labels
  const y = useTransform(scrollYProgress, [0, 1], [-200, 200]);

  return (
    <div ref={sectionRef} className="timeline-step">
      <div className="timeline-marker">
        <motion.span 
          className="day-label"
          style={{ y }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.3 }}
        >
          {step.day}
        </motion.span>
        <div className="marker-dot"></div>
      </div>
      <motion.div
        className="timeline-content"
        initial={{ opacity: 0, y: 100 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        viewport={{ once: true, amount: 0.3 }}
      >
        <div className="step-details">
          <h3>{step.title}</h3>
          <h4>{step.subtitle}</h4>
          {step.description.map((line, i) => (
            <p key={i}>{line}</p>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default function HowWeDeliver() {
  return (
    <section className="how-we-deliver">
      <img src={BlurEffect} alt="" className="blur-top-effect" />
      <div className="container">
        <div className="section-header">
          <div className="section-eyebrow-pill">
            <span>⚡</span> 4-WEEK SPRINT ROADMAP
          </div>
          <motion.h2
            initial={{ opacity: 0, y: -60, scale: 0.8 }}
            whileInView={{ 
              opacity: 1, 
              y: 0, 
              scale: 1, 
              transition: {
                duration: 0.8,
                ease: [0.25, 0.46, 0.45, 0.94]
              }
            }}
            viewport={{ amount: 0.3 }}
          >
            How We Deliver Fast
          </motion.h2>
          <motion.p
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
            A streamlined, 4-week end-to-end build process, engineered for<br />
            speed, precision, and full design-to-development readiness.
          </motion.p>
        </div>

        <div className="timeline">
          {timelineSteps.map((step, index) => (
            <TimelineStep key={index} step={step} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
} 