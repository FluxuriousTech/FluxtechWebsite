import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead.jsx';
import GamersTechRepublicImage from '../../../assets/PROJECT/WebDev/GamersTechRepublic.png';
import '../../../styles/Projects/WebDev1.css';
import { 
  Monitor, Cpu, Trophy, Activity, Gauge, 
  Gamepad2, ArrowUpRight, Zap, Flame, ShieldAlert 
} from 'lucide-react';

const borderColor = 'rgba(255, 30, 30, 0.4)';
const borderHover = 'rgba(255, 60, 60, 0.8)';
const innerBg = 'rgba(18, 10, 15, 0.5)';

const project = {
  title: 'Gamers Tech Republic',
  subheader: 'Premium Esports Gaming Arena & Sim-Racing Cafe',
  description: 'Designed and developed a high-energy esports cafe website featuring dual-zone booking (Esports & Sim Racing), custom PC build configurator, competitive leaderboards, live news feed, and a bold neon-red gaming aesthetic — built for Thane\'s premier gaming arena.'
};

const metrics = [
  { value: '240Hz', label: 'Esports Tournament Displays' },
  { value: 'RTX 5090', label: 'Flagship Custom PC Builds' },
  { value: '25 Nm', label: 'Fanatec DD2 Direct Drive' },
  { value: '1 Gbps', label: 'Dual Redundant Fiber ISP' },
];

const features = [
  {
    icon: Gamepad2,
    title: 'Dual-Zone Booking Engine',
    desc: 'Automated real-time station reservation for high-refresh-rate Esports PC rigs and VIP D-BOX motion Sim-Racing cockpits.'
  },
  {
    icon: Cpu,
    title: 'Interactive PC Configurator',
    desc: 'Real-time custom gaming rig builder with live component compatibility checks, power draw estimates, and milestone pricing.'
  },
  {
    icon: Trophy,
    title: 'Tournament & Leaderboard System',
    desc: 'Competitive standings tracking for local LAN tournaments in CS2, Valorant, and Rocket League with player telemetry.'
  },
  {
    icon: Gauge,
    title: 'Sim-Racing Telemetry Suite',
    desc: 'Hardware integration supporting Fanatec DD2 direct-drive wheels, Heusinkveld hydraulic pedals, and triple 32" OLED panoramic views.'
  },
  {
    icon: Flame,
    title: 'Cyberpunk Neon-Red Aesthetic',
    desc: 'Custom dark-mode visual identity with animated glow pulses, telemetry maps, and 60fps micro-animations.'
  },
  {
    icon: Monitor,
    title: 'Cafe Experience & VIP Lounges',
    desc: 'Dedicated showcase pages for private gaming booths, gourmet cafe menus, and hourly student & weekend tournament pricing.'
  }
];

const techStack = [
  'Next.js 14', 'React', 'Tailwind CSS', 'Framer Motion', 'Lucide Icons', 'Vimeo Stream API', 'Vercel'
];

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
      ease: [0.25, 0.46, 0.45, 0.94],
    },
  }),
};

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
  
  const useIsMobile = (breakpoint = 900) => {
    const [isMobile, setIsMobile] = React.useState(() => window.innerWidth < breakpoint);
    React.useEffect(() => {
      const onResize = () => setIsMobile(window.innerWidth < breakpoint);
      window.addEventListener('resize', onResize);
      return () => window.removeEventListener('resize', onResize);
    }, [breakpoint]);
    return isMobile;
  };
  
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
        title="Gamers Tech Republic Case Study — Esports Gaming Arena"
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
        {/* Video Card */}
        <motion.div 
          className="webdev1-image-box"
          custom={1}
          variants={isMobile ? mobileCardVariants : cardVariants}
        >
          <div
            className="webdev1-image-card"
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 25px 0 rgba(255,30,30,0.45)' : '0 0 15px 0 rgba(255,30,30,0.15)' }}
          >
            <div
              className="webdev1-image-inner"
              style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(255,30,30,0.4)' : 'none', background: innerBg, overflow: 'hidden' }}
            >
              <iframe 
                src="https://player.vimeo.com/video/1224198257?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0" 
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
          
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, margin: '8px 0 16px 0' }}>
            {techStack.map((tech, idx) => (
              <span key={idx} style={{
                background: 'rgba(255,30,30,0.12)',
                border: '1px solid rgba(255,60,60,0.35)',
                color: '#ff8a8a',
                fontSize: '0.78rem',
                fontWeight: 600,
                padding: '4px 10px',
                borderRadius: '999px',
                letterSpacing: '0.02em'
              }}>
                {tech}
              </span>
            ))}
          </div>

          <Button2 href="https://gamers-tech-republic-ubv1.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content', minWidth: '40px' }}>
            <span>Visit Website</span>
            <ArrowUpRight size={16} style={{ marginLeft: 6, display: 'inline-block', verticalAlign: 'middle' }} />
          </Button2>
        </motion.div>
      </motion.div>

      {/* Metrics Section */}
      <motion.div 
        style={{
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto 56px auto',
          padding: isMobile ? '0 16px' : '0 24px',
          display: 'grid',
          gridTemplateColumns: isVerySmallScreen ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)',
          gap: 16,
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={isMobile ? mobileCardVariants : cardVariants}
        custom={3}
      >
        {metrics.map((m, idx) => (
          <div key={idx} style={{
            background: 'rgba(28,15,20,0.6)',
            border: '1px solid rgba(255,40,40,0.3)',
            borderRadius: 16,
            padding: isVerySmallScreen ? '16px 12px' : '24px 20px',
            textAlign: 'center',
            backdropFilter: 'blur(8px)',
          }}>
            <div style={{
              color: '#fff',
              fontSize: isVerySmallScreen ? '1.4rem' : '2rem',
              fontWeight: 800,
              letterSpacing: '-0.02em',
              marginBottom: 4
            }}>
              {m.value}
            </div>
            <div style={{
              color: '#c49a9a',
              fontSize: isVerySmallScreen ? '0.75rem' : '0.88rem',
              fontWeight: 500,
            }}>
              {m.label}
            </div>
          </div>
        ))}
      </motion.div>

      {/* Deep-Dive Capabilities Section */}
      <motion.div
        style={{
          maxWidth: 1200,
          width: '100%',
          margin: '0 auto 64px auto',
          padding: isMobile ? '0 16px' : '0 24px',
        }}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        variants={isMobile ? mobileCardVariants : cardVariants}
        custom={4}
      >
        <div style={{ textAlign: 'center', marginBottom: 36 }}>
          <span style={{
            background: 'rgba(255,30,30,0.15)',
            border: '1px solid rgba(255,60,60,0.4)',
            color: '#ff9999',
            padding: '5px 14px',
            borderRadius: 999,
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-block',
            marginBottom: 12,
          }}>
            Arena Features & Platform Tech
          </span>
          <h2 style={{
            color: '#fff',
            fontWeight: 800,
            fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
            letterSpacing: '-0.02em',
            marginBottom: 10
          }}>
            Built For Serious Esports Competition
          </h2>
          <p style={{ color: '#a8a8c0', fontSize: '1rem', maxWidth: 680, margin: '0 auto' }}>
            From high-refresh esports monitors to custom dual-radiator liquid-cooled battle stations, every feature was architected for zero latency and pure performance.
          </p>
        </div>

        <div style={{
          display: 'grid',
          gridTemplateColumns: isMobile ? '1fr' : 'repeat(3, 1fr)',
          gap: 20
        }}>
          {features.map((feat, idx) => {
            const IconComp = feat.icon;
            return (
              <div key={idx} style={{
                background: 'rgba(22,12,16,0.7)',
                border: '1px solid rgba(255,40,40,0.25)',
                borderRadius: 18,
                padding: 24,
                display: 'flex',
                flexDirection: 'column',
                gap: 12,
                transition: 'transform 0.3s, border-color 0.3s',
              }}>
                <div style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: 'rgba(255,30,30,0.15)',
                  border: '1px solid rgba(255,60,60,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#ff5c5c'
                }}>
                  <IconComp size={22} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                  {feat.title}
                </h3>
                <p style={{ color: '#b0a0a0', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>
                  {feat.desc}
                </p>
              </div>
            );
          })}
        </div>
      </motion.div>

      {/* Mockup Showcase Section */}
      <motion.div 
        className="webdev1-hero-section"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false, amount: 0.2 }}
        custom={5}
        variants={isMobile ? mobileCardVariants : cardVariants}
        style={{ perspective: isMobile ? 'none' : '1000px' }}
      >
        <div style={{
          color: '#fff',
          fontWeight: 800,
          fontSize: 'clamp(1.8rem, 4vw, 2.5rem)',
          textAlign: 'center',
          marginBottom: 16,
          letterSpacing: '-1px',
          padding: '0 24px',
        }}>
          Gaming For The People, By The People.
        </div>
        <div style={{
          color: '#bdbdbd',
          fontSize: 'clamp(1rem, 2.5vw, 1.25rem)',
          textAlign: 'center',
          maxWidth: 750,
          margin: '0 auto 40px auto',
          padding: '0 24px',
          lineHeight: 1.6
        }}>
          Thane's premier esports gaming cafe with cutting-edge battle stations, precision sim-racing rigs, and tournament leaderboards engineered to elevate the gaming community.
        </div>
        
        <div style={{
          position: 'relative',
          padding: '10px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, rgba(255,30,30,0.35) 0%, rgba(20,10,15,0.7) 100%)',
          boxShadow: '0 20px 60px -10px rgba(255,20,20,0.3)'
        }}>
          <img 
            src={GamersTechRepublicImage} 
            alt="Gamers Tech Republic Full Platform Interface" 
            style={{
              width: '90vw',
              maxWidth: 1040,
              minWidth: 280,
              display: 'block',
              borderRadius: 18,
              margin: '0 auto',
            }} 
          />
        </div>
      </motion.div>

      <Footer />
    </div>
  );
};

export default WebDev6;
