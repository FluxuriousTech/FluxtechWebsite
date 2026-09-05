import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead.jsx';
import '../../../styles/Projects/WebDev1.css';

const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const project = {
  title: 'Gamers Tech Republic',
  subheader: 'Premium Esports Gaming Cafe Website',
  description: 'Designed and developed a high-energy esports cafe website featuring dual-zone booking (Esports & Sim Racing), custom PC build configurator, competitive leaderboards, live news feed, and a bold neon-red gaming aesthetic — built for Thane\'s premier gaming arena.'
};

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
      ease: [0.25, 0.46, 0.45, 0.94], // Custom easing for better mobile feel
    },
  }),
};

// Mobile-specific animation variants (no 3D transforms)
const mobileCardVariants = {
  hidden: { opacity: 0, y: 60, scale: 0.95 },
  visible: (i) => ({
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      delay: i * 0.15,
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

const WebDev6 = () => {
  const [hover, setHover] = React.useState(false);
  const navigate = useNavigate();
  
  // Mobile detection hook
  const useIsMobile = (breakpoint = 900) => {
    const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
    React.useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isMobile;
  };
  
  // Very small screen detection hook
  const useIsVerySmallScreen = (breakpoint = 600) => {
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
    <div style={{ minHeight: '100vh', background: '#0A0A1B', display: 'flex', flexDirection: 'column', padding: isMobile ? (isVerySmallScreen ? '0 16px' : '0 24px') : 0 }}>
      <SEOHead
        title="Gamers Tech Republic Case Study — Esports Gaming Cafe"
        description="Designed and developed a high-energy esports cafe website featuring dual-zone booking, PC build configurator, and leaderboards."
        canonicalPath="/projects/webdev/6"
      />
      <Navbar />
      {/* Back Button */}
      <div style={{ 
        width: '100%', 
        display: 'flex', 
        justifyContent: 'flex-start', 
        alignItems: 'center', 
        padding: isMobile ? (isVerySmallScreen ? '76px 16px 0' : '80px 24px 0') : '84px 0 0 48px', 
        zIndex: 2 
      }}>
        <Button2 onClick={() => navigate('/projects?section=webdev')} style={{ width: 'fit-content', minWidth: '40px' }}>
          {isVerySmallScreen ? '< Back to Projects' : '< Back to Web Development Projects'}
        </Button2>
      </div>
      {/* Blur effect at the top */}
      <div style={{ position: 'relative', width: '100%', display: 'flex', justifyContent: 'center', alignItems: 'center', marginTop: 0, marginBottom: 0 }}>
        <img src={BlurImage} alt="Blur" style={{ position: 'absolute', top: 0, left: '50%', transform: 'translateX(-50%)', width: '60vw', maxWidth: 900, minWidth: 180, opacity: 0.7, filter: 'blur(2px)', zIndex: 0, pointerEvents: 'none' }} />
      </div>
      {/* Top Section: Responsive Layout */}
      <motion.div 
        className="webdev1-top-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2, margin: "-50px" }}
        custom={0}
        variants={isMobile ? mobileCardVariants : cardVariants}
        style={{ perspective: isMobile ? 'none' : '1000px' }}
      >
        {/* Image Card First on Mobile */}
        <motion.div 
          className="webdev1-image-box"
          custom={1}
          variants={isMobile ? mobileCardVariants : cardVariants}
        >
          <div
            className="webdev1-image-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none' }}
          >
            <div
              className="webdev1-image-inner"
              style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none', background: innerBg, overflow: 'hidden' }}
            >
              <iframe 
                src="https://player.vimeo.com/video/1224198257?badge=0&autopause=0&player_id=0&app_id=58479&controls=1&title=0&byline=0&portrait=0" 
                frameBorder="0" 
                allow="autoplay; fullscreen; picture-in-picture; clipboard-write; encrypted-media; web-share" 
                referrerPolicy="strict-origin-when-cross-origin" 
                style={{
                  width: '100%',
                  height: '100%',
                  borderRadius: '0.7rem',
                  border: 'none',
                  display: 'block'
                }} 
                title="Gamers Tech Republic Video Walkthrough"
              />
            </div>
          </div>
        </motion.div>
        {/* Info Box */}
        <motion.div 
          className="webdev1-info-box"
          custom={2}
          variants={isMobile ? mobileCardVariants : cardVariants}
        >
          <div className="webdev1-title">{project.title}</div>
          <div className="webdev1-subheader">{project.subheader}</div>
          <div className="webdev1-description">{project.description}</div>
          <Button2 href="https://gamers-tech-republic-ubv1.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content', minWidth: '40px' }}>Visit Website</Button2>
        </motion.div>
      </motion.div>
      <Footer />
    </div>
  );
};

export default WebDev6;
