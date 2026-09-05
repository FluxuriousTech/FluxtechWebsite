import React from 'react';
import Navbar from '../../../components/Navbar.jsx';
import Footer from '../../../components/Footer.jsx';
import BlurImage from '../../../assets/Blur.png';
import Button2 from '../../../components/Button2.jsx';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import SEOHead from '../../../components/SEOHead.jsx';
import EmergentOSImage from '../../../assets/PROJECT/WebDev/EmergentOS.png';
import '../../../styles/Projects/WebDev1.css';
import { 
  Users, Zap, ShieldCheck, Clock, TrendingUp, 
  Layers, CheckCircle, ArrowUpRight, Database, FileText 
} from 'lucide-react';

const borderColor = 'rgba(85,81,119,1)';
const borderHover = 'rgba(171,40,250,0.5)';
const innerBg = 'rgba(13,13,27,0.3)';

const project = {
  title: 'EmergentOS',
  subheader: 'Advisory Operations Platform for Financial Brokers',
  description: 'Built a comprehensive SaaS platform for financial advisors featuring client onboarding automation, CRM, premium tracking, surplus income insights, and compliance-ready workflows — all in one fast, secure workspace.'
};

const metrics = [
  { value: '₹1,250 Cr', label: 'AUM Handled' },
  { value: '< 1 Hour', label: 'Avg. Client Onboarding' },
  { value: '99.95%', label: 'Platform Uptime' },
  { value: '< 200ms', label: 'TTFB Response Time' },
];

const features = [
  {
    icon: Users,
    title: 'Advisory CRM & Directory',
    desc: 'Unified client book management with 360° views of holdings, communication history, and real-time portfolio summaries.'
  },
  {
    icon: Zap,
    title: 'Lifecycle Touchpoint Automation',
    desc: 'Automated greeting triggers, policy anniversary reminders, and scheduled re-engagement notifications to maximize client retention.'
  },
  {
    icon: TrendingUp,
    title: 'Surplus Income Intelligence',
    desc: 'Proprietary financial analysis engine pinpointing idle client cash flow and recommending tailored wealth allocation strategies.'
  },
  {
    icon: Clock,
    title: 'Missing Premium Tracking',
    desc: 'Automated policy reconciliation that flags overdue and uncollected insurance premiums, preventing unintentional lapses.'
  },
  {
    icon: ShieldCheck,
    title: 'Bank-Grade Security & Compliance',
    desc: 'Role-based access control, end-to-end encryption in transit and at rest, plus instant audit-ready regulatory export logs.'
  },
  {
    icon: FileText,
    title: 'Document Storage & Timelines',
    desc: 'Secure central repository for KYC files, policy bonds, and an interactive chronological visual event timeline for every client.'
  }
];

const techStack = [
  'Next.js 14', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Lottie Animations', 'Vercel Edge'
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

const WebDev5 = () => {
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
        title="EmergentOS Case Study — Advisory Operations Platform"
        description="Built a comprehensive SaaS platform for financial advisors featuring client onboarding automation, CRM, and compliance workflows."
        canonicalPath="/projects/webdev/5"
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
            style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none' }}
          >
            <div
              className="webdev1-image-inner"
              style={{ borderColor: hover ? borderHover : borderColor, boxShadow: hover ? '0 0 20px 0 rgba(171,40,250,0.4)' : 'none', background: innerBg, overflow: 'hidden' }}
            >
              <iframe 
                src="https://player.vimeo.com/video/1224197390?badge=0&amp;autopause=0&amp;player_id=0&amp;app_id=58479&amp;controls=1&amp;title=0&amp;byline=0&amp;portrait=0" 
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
                title="EmergentOS Video Walkthrough"
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
                background: 'rgba(171,40,250,0.1)',
                border: '1px solid rgba(171,40,250,0.3)',
                color: '#d4a5ff',
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

          <Button2 href="https://emergent-os.vercel.app/" target="_blank" rel="noopener noreferrer" style={{ width: 'fit-content', minWidth: '40px' }}>
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
            background: 'rgba(24,24,42,0.6)',
            border: '1px solid rgba(85,81,119,0.5)',
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
              color: '#a0a0b8',
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
            background: 'rgba(171,40,250,0.15)',
            border: '1px solid rgba(171,40,250,0.4)',
            color: '#e2b3ff',
            padding: '5px 14px',
            borderRadius: 999,
            fontSize: '0.8rem',
            fontWeight: 700,
            textTransform: 'uppercase',
            letterSpacing: '0.08em',
            display: 'inline-block',
            marginBottom: 12,
          }}>
            Architecture & Features
          </span>
          <h2 style={{
            color: '#fff',
            fontWeight: 800,
            fontSize: 'clamp(1.7rem, 3.5vw, 2.3rem)',
            letterSpacing: '-0.02em',
            marginBottom: 10
          }}>
            Engineered for Modern Advisory Scale
          </h2>
          <p style={{ color: '#a8a8c0', fontSize: '1rem', maxWidth: 680, margin: '0 auto' }}>
            Every interaction designed to cut onboarding toil, maintain compliance audit trails, and maximize broker portfolio productivity.
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
                background: 'rgba(20,20,38,0.7)',
                border: '1px solid rgba(85,81,119,0.5)',
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
                  background: 'rgba(171,40,250,0.15)',
                  border: '1px solid rgba(171,40,250,0.3)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  color: '#d4a5ff'
                }}>
                  <IconComp size={22} />
                </div>
                <h3 style={{ color: '#fff', fontSize: '1.15rem', fontWeight: 700, margin: 0 }}>
                  {feat.title}
                </h3>
                <p style={{ color: '#a0a0b8', fontSize: '0.92rem', lineHeight: 1.55, margin: 0 }}>
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
          All advisory ops in one fast, compliant workspace.
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
          High-performance web architecture tailored to wealth advisors: responsive across every device, bank-grade encryption, and sub-second execution.
        </div>
        
        <div style={{
          position: 'relative',
          padding: '10px',
          borderRadius: 24,
          background: 'linear-gradient(135deg, rgba(171,40,250,0.35) 0%, rgba(20,20,38,0.6) 100%)',
          boxShadow: '0 20px 60px -10px rgba(171,40,250,0.3)'
        }}>
          <img 
            src={EmergentOSImage} 
            alt="EmergentOS Full Web Platform Interface" 
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

export default WebDev5;
