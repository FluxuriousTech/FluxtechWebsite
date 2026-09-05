// Design2.jsx - Student Dashboard Project Page
// This file is for the Student Dashboard project (Design2)
import React from 'react';
import { motion } from 'framer-motion';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import StudentDashboardImage from '../../../assets/PROJECT/WebDesign/Student_Dashboard.png';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import MockupStudentDashboard from '../../../assets/PROJECT/WebDesign/Mockup_StudentDashboard.png';

import { useNavigate } from 'react-router-dom';
import './Design.css';

const project = {
  title: 'Student Dashboard',
  subheader: 'One hub. Everything students need',
  description: 'Designed a platform to uplift underserved students: accessible, inspiring, and built to break barriers.'
};

// CSS variables for styling
const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const Design2 = () => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();

  // Animation variants for flip effect
  const cardVariants = {
    hidden: { opacity: 0, y: 80, rotateX: 90, scale: 0.9 },
    visible: (i) => ({
      opacity: 1,
      y: 0,
      rotateX: 0,
      scale: 1,
      transition: {
        duration: 0.8,
        delay: i * 0.15,
        ease: [0.25, 0.46, 0.45, 0.94], // Custom easing
      },
    }),
  };

  // Mobile detection hook
  const useIsMobile = (breakpoint = 768) => {
    const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
    React.useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isMobile;
  };
  
  // Very small screen detection hook
  const useIsVerySmallScreen = (breakpoint = 490) => {
    const [isVerySmall, setIsVerySmall] = React.useState(() => window.innerWidth <= breakpoint);
    React.useEffect(() => {
      const onResize = () => setIsVerySmall(window.innerWidth <= breakpoint);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isVerySmall;
  };
  
  const isMobile = useIsMobile();
  const isVerySmallScreen = useIsVerySmallScreen();
  
  return (
    <div style={{ minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', padding: isMobile ? (isVerySmallScreen ? '0 12px' : '0 16px') : 0 }}>
      <Navbar />
      {/* Back Button */}
      <div style={{ width: '100%', display: 'flex', justifyContent: 'flex-start', alignItems: 'center', padding: isMobile ? (isVerySmallScreen ? '76px 16px 0' : '80px 24px 0') : '84px 0 0 48px', zIndex: 2 }}>
        <Button2 onClick={() => navigate('/projects?section=webdesign')} style={{ width: 'fit-content', minWidth: '40px' }}>{'< Back to Web Design Projects'}</Button2>
      </div>
      {/* Blur effect at the top */}
      <div className="design-blur-container">
        <img src={BlurImage} alt="Blur" className="design-blur-img" />
      </div>
      <motion.div 
        className="design-content"
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={0}
      >
        <div className="design-flex-row">
          {/* Left: Info */}
          <motion.div 
            className="design-info"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            custom={1}
          >
            <div className="design-title">
              {project.title}
            </div>
            <div className="design-subheader">
              {project.subheader}
            </div>
            <div className="design-tags-row">
              <span className="design-pill">Student Portal</span>
              <span className="design-pill">Dashboard Design</span>
              <span className="design-pill">Data Visualization</span>
            </div>
            <div className="design-description">
              {project.description}
            </div>
          </motion.div>
          {/* Right: Image Card */}
          <motion.div 
            className="design-image-outer"
            variants={cardVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false, amount: 0.2, margin: "-50px" }}
            custom={2}
          >
            <div
              className={`design-image-card${hover ? ' design-image-card-hover' : ''}`}
              onMouseEnter={() => setHover(true)}
              onMouseLeave={() => setHover(false)}
            >
              <div className={`design-image-inner${hover ? ' design-image-inner-hover' : ''}`} style={{ overflow: 'hidden', padding: 0 }}>
                <iframe 
                  src="https://player.vimeo.com/video/1107824205?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0" 
                  frameBorder="0" 
                  allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                  referrerPolicy="strict-origin-when-cross-origin" 
                  style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '0.85rem',
                    border: 'none',
                    display: 'block'
                  }} 
                  title="Student Dashboard Video Walkthrough"
                />
              </div>
            </div>
          </motion.div>
        </div>
      </motion.div>
      {/* HERO SECTION - Unified across all Design pages */}
      <motion.div 
        style={{
        width: '100%',
        background: 'radial-gradient(ellipse at center, #2d0b4e 0%, #0A0A1B 100%)',
        padding: '64px 0 48px 0',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        margin: 0,
        }}
        variants={cardVariants}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={3}
      >
        <div style={{
          color: '#fff',
          fontWeight: 700,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: 16,
          letterSpacing: '-1px',
          padding: '0 24px',
        }}>
          We don't just build websites, we craft digital experiences.
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          textAlign: 'center',
          maxWidth: 700,
          margin: '0 auto 40px auto',
          padding: '0 24px',
        }}>
          A modern web solution tailored to your vision: responsive, scalable, and designed to elevate user experience across every screen.
        </div>
        <img src={MockupStudentDashboard} alt="Student Dashboard Responsive Mockup" style={{
          width: '90vw',
          maxWidth: 1000,
          minWidth: 280,
          display: 'block',
          borderRadius: 24,
          margin: '0 auto',
        }} />
      </motion.div>
      {/* END HERO SECTION */}
      <Footer />
    </div>
  );
};

export default Design2;
